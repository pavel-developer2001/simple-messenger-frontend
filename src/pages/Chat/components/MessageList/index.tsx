import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import deepPurple from "@mui/material/colors/deepPurple";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import chatMessage from "../../../../entities/chat-message/model/chat-message";
import { IMessage } from "../../../../shared/api/messenger/models";
import dayjs from "dayjs";
import styles from "./MessageList.module.scss";

const MessageListItem: FC<{ message: IMessage }> = ({ message }) => {
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
              <strong>{message.user.name}</strong>
              <div className={styles.answer}>
                <Button variant='text'>Ответить</Button>
              </div>
            </div>
            <div className={styles.body}>{message.message}</div>
            <div className={styles.footer}>
              {dayjs(message.createdAt).format(" DD/MM/YYYY, H:mm")}
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const MessageList = () => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      chatMessage.getMessages(params.id);
    }
  }, [params.id]);
  if (chatMessage.messages.length === 0) {
    return <div>Нет сообщений</div>;
  }
  if (chatMessage.isLoading) {
    return <CircularProgress />;
  }
  return (
    <div className={styles.mainList}>
      {chatMessage.messages.map((message) => (
        <MessageListItem key={message._id} message={message} />
      ))}
    </div>
  );
};

export default observer(MessageList);
