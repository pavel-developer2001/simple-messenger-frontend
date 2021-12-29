import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ChatList.module.scss";

const ChatListItem = () => {
  return (
    <Link to='/chat/1'>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 45, height: 45 }}>
            A
          </Avatar>
        </div>
        <div className={styles.content}>
          <strong>Murrengan</strong>
          <p>
            <span>твой братишка:</span> hello guys
          </p>
        </div>
      </div>
    </Link>
  );
};
const ChatList = () => {
  return (
    <div className={styles.mainList}>
      <ChatListItem />
      <ChatListItem />
    </div>
  );
};

export default ChatList;
