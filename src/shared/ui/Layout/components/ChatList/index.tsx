import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import chat from "../../../../../entities/chat/model/chat";
import { IChat } from "../../../../api/messenger/models";
import styles from "./ChatList.module.scss";

const ChatListItem: FC<{ chat: IChat }> = ({ chat }) => {
  return (
    <Link to={"/chat/" + chat._id}>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 45, height: 45 }}>
            A
          </Avatar>
        </div>
        <div className={styles.content}>
          <strong>{chat.chatTitle}</strong>
          <p>
            <span>твой братишка:</span> hello guys
          </p>
        </div>
      </div>
    </Link>
  );
};
const ChatList = () => {
  useEffect(() => {
    chat.getChats();
  }, []);
  if (chat.isLoading) {
    return <CircularProgress />;
  }
  if (chat.chats.length === 0) {
    return <div>Нет чатов</div>;
  }
  return (
    <aside className={styles.mainList}>
      {chat.chats.map((chat) => (
        <ChatListItem chat={chat} key={chat._id} />
      ))}
    </aside>
  );
};

export default observer(ChatList);
