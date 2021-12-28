import React, { FC } from "react";
import { TextField } from "@mui/material";
import Menu from "./components/Menu";
import ChannelList from "./components/ChannelList";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: any;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.navbar}>
          <Menu />
          <div className={styles.searchInput}>
            <TextField
              sx={{ m: 1, width: "55ch" }}
              id='outlined-basic'
              label='Поиск'
              variant='outlined'
            />
          </div>
        </div>
        <ChannelList />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default Layout;
