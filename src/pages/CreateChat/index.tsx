import React from "react";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./CreateChat.module.scss";
import Typography from "@mui/material/Typography";

const CreateChatSchema = yup.object().shape({
  name: yup.string().required("Введите название чата"),
});

const CreateChat = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateChatSchema),
  });
  const onSubmit = async (data: any) => {
    console.log("DATA", data);
  };
  return (
    <Layout>
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

export default CreateChat;
