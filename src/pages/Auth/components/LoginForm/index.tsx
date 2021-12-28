import Typography from "@mui/material/Typography";
import React, { FC } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  setRegister: (arg: boolean) => void;
}
const LoginFormSchema = yup.object().shape({
  login: yup.string().required("Введите логин"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
});
const LoginForm: FC<LoginFormProps> = ({ setRegister }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (data: any) => {
    console.log("DATA", data);
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

        <div>
          <Button variant='contained' type='submit'>
            Войти
          </Button>
        </div>
      </form>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        Нет аккаунта?{" "}
        <strong onClick={() => setRegister(false)}>Зарегистрируйтесь</strong>
      </Typography>
    </div>
  );
};

export default LoginForm;
