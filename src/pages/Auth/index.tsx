import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import styles from "./Auth.module.scss";

const Auth = () => {
  const [register, setRegister] = useState(true);
  return (
    <div className={styles.main}>
      <Paper>
        <div className={styles.content}>
          <Typography variant='h5' gutterBottom component='div'>
            {register ? "Авторизация" : "Регистрация"}
          </Typography>
          {register ? (
            <LoginForm setRegister={setRegister} />
          ) : (
            <RegisterForm />
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Auth;
