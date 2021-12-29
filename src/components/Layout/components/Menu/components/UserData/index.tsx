import Avatar from "@mui/material/Avatar";
import React from "react";
import styles from "./UserData.module.scss";

const UserData = () => {
  return (
    <div className={styles.main}>
      <Avatar
        alt='Remy Sharp'
        src='/static/images/avatar/1.jpg'
        sx={{ width: 56, height: 56 }}
      />
      <div className={styles.data}>
        <strong>Heodark</strong>
        <p>
          id: <span>1</span>
        </p>
      </div>
    </div>
  );
};

export default UserData;
