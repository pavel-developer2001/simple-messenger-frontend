import Layout from "../../shared/ui/Layout";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./CreateChat.module.scss";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import chat from "../../entities/chat/model/chat";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const CreateChatSchema = yup.object().shape({
  name: yup.string().required("Введите название чата"),
});

const CreateChat = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateChatSchema),
  });
  const onSubmit = async (data: any) => {
    const payload = { chatTitle: data.name };
    await chat.create(payload);
    if (chat.error.length === 0) {
      reset();
      navigate("/");
    }
  };
  return (
    <Layout>
      {chat.error.length !== 0 ? (
        chat.error.length > 1 ? (
          chat.error.map((err) => (
            <Alert key={err} variant='filled' severity='error'>
              {err}
            </Alert>
          ))
        ) : (
          <Alert variant='filled' severity='error'>
            {chat.error}
          </Alert>
        )
      ) : null}
      <div className={styles.main}>
        <Typography variant='h4' gutterBottom component='div'>
          Создать чат
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Название чата'
                  id='outlined-error-helper-text'
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                />
              )}
              name='name'
              control={control}
              defaultValue=''
            />
          </div>

          <div>
            <Button variant='contained' type='submit'>
              Создать
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default observer(CreateChat);
