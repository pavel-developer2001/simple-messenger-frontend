import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import deepPurple from "@mui/material/colors/deepPurple";
import Paper from "@mui/material/Paper";
import React from "react";
import styles from "./MessageList.module.scss";

const MessageListItem = () => {
  return (
    <div className={styles.main}>
      <div className={styles.avatar}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>U</Avatar>
      </div>

      <div className={styles.content}>
        <Paper elevation={3}>
          <div className={styles.messageText}>
            {" "}
            <div className={styles.header}>
              <strong>Ivan</strong>
              <div className={styles.answer}>
                <Button variant='text'>Ответить</Button>
              </div>
            </div>
            <div className={styles.body}>
              у меня структура я получаю всякие записи такого же типа и хочу
              обновить их если совпадает hashToken и id или вставить если таких
              нет
            </div>
            <div className={styles.footer}>13:14</div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const MessageList = () => {
  return (
    <div className={styles.mainList}>
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
      <MessageListItem />
    </div>
  );
};

export default MessageList;
