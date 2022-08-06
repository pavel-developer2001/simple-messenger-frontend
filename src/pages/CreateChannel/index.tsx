import React from "react";
import Layout from "../../shared/ui/Layout";
import styles from "./CreateChannel.module.scss";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import channel from "../../entities/channel/model/channel";
import { observer } from "mobx-react-lite";
import { Alert } from "@mui/material";

const CreateChannelSchema = yup.object().shape({
  name: yup.string().required("Введите название канала"),
  description: yup.string().required("Введите описание канала"),
});
const CreateChannel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateChannelSchema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    const payload = {
      channelTitle: data.name,
      channelDescription: data.description,
    };
    await channel.create(payload);

    if (channel.error.length === 0) {
      reset();
      navigate("/");
    }
  };
  return (
    <Layout>
      {channel.error.length !== 0 ? (
        channel.error.length > 1 ? (
          channel.error.map((err) => (
            <Alert key={err} variant='filled' severity='error'>
              {err}
            </Alert>
          ))
        ) : (
          <Alert variant='filled' severity='error'>
            {channel.error}
          </Alert>
        )
      ) : null}

      <div className={styles.main}>
        <Typography variant='h4' gutterBottom component='div'>
          Создать канал
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Название канала'
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
          <div className={styles.input}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Описание канала'
                  id='outlined-error-helper-text'
                  error={!!errors?.description}
                  helperText={errors?.description?.message}
                />
              )}
              name='description'
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

export default observer(CreateChannel);
