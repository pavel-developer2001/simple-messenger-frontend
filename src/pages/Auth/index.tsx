import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LoginForm from "../../entities/auth/ui/LoginForm";
import RegisterForm from "../../entities/auth/ui/RegisterForm";
import styles from "./Auth.module.scss";
import { Navigate } from "react-router-dom";
import auth from "../../entities/auth/model/auth";
import { observer } from "mobx-react-lite";

const Auth = () => {
  const [register, setRegister] = useState(true);
  const isAuth = auth.isAuth;
  if (isAuth) return <Navigate to={"/"} />;
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

export default observer(Auth);
