import IconButton from "@mui/material/IconButton";
import React from "react";
import styles from "./AddMessage.module.scss";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const AddMessage = () => {
  return (
    <div className={styles.main}>
      <IconButton color='primary' aria-label='upload picture' component='span'>
        <FilePresentIcon />
      </IconButton>
      <TextField
        id='outlined-basic'
        label='Написать сообщение'
        sx={{ m: 1, width: "100ch" }}
        variant='outlined'
      />
      <IconButton color='primary' aria-label='upload picture' component='span'>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default AddMessage;
