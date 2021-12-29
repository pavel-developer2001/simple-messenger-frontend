import Avatar from "@mui/material/Avatar";
import deepPurple from "@mui/material/colors/deepPurple";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ChannelList.module.scss";

const ChannelListItem = () => {
  return (
    <Link to='/channel/1'>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 45, height: 45 }}>
            C
          </Avatar>
        </div>
        <div className={styles.content}>
          <strong>Marvel Fans</strong>
          <p>Режиссёр "Чудо-женщины 2" предположила, что</p>
        </div>
      </div>
    </Link>
  );
};

const ChannelList = () => {
  return (
    <div className={styles.mainList}>
      <ChannelListItem />
      <ChannelListItem />
      <ChannelListItem />
    </div>
  );
};

export default ChannelList;
