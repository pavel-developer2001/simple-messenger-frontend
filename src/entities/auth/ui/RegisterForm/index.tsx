import { useState } from "react";
import styles from "./RegisterForm.module.scss";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import auth from "../../model/auth";
import { observer } from "mobx-react-lite";

const RegisterFormSchema = yup.object().shape({
  login: yup.string().required("Введите логин"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
  password2: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
});

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });
  const [alertError, setAlertError] = useState(false);
  const onSubmit = async (data: any) => {
    if (data.password !== data.password2) {
      return setAlertError(true);
    }
    const payload = { name: data.login, password: data.password };
    auth.registerUser(payload);
    if (auth.error.length === 0) {
      reset();
    }
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Логин'
                id='outlined-error-helper-text'
                error={!!errors?.login}
                helperText={errors?.login?.message}
              />
            )}
            name='login'
            control={control}
            defaultValue=''
          />
        </div>
        <div className={styles.input}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Пароль'
                error={!!errors?.password}
                helperText={errors?.password?.message}
              />
            )}
            name='password'
            control={control}
            defaultValue=''
          />
        </div>
        <div className={styles.input}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label='Повторить пароль'
                error={!!errors?.password2}
                helperText={errors?.password2?.message}
              />
            )}
            name='password2'
            control={control}
            defaultValue=''
          />
        </div>
        {alertError ? (
          <div className={styles.alert}>
            <Alert severity='error'>Пароли не совпадают</Alert>
          </div>
        ) : null}

        <div>
          <Button variant='contained' type='submit'>
            Зарегистрироваться
          </Button>
        </div>
      </form>
      {auth.error.length !== 0 ? (
        auth.error.length > 1 ? (
          auth.error.map((err) => (
            <Alert key={err} variant='filled' severity='error'>
              {err}
            </Alert>
          ))
        ) : (
          <Alert variant='filled' severity='error'>
            {auth.error}
          </Alert>
        )
      ) : null}
    </div>
  );
};

export default observer(RegisterForm);
