import { FC } from "react"
import { TextField } from "@mui/material"
import Menu from "../../../entities/auth/ui/Menu"
import ChatList from "../../../entities/chat/ui/ChatList"
import styles from "./Layout.module.scss"
import ChannelList from "../../../entities/channel/ui/ChannelList"

interface LayoutProps {
  children: any
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <header className={styles.navbar}>
          <Menu />
          {/* <div className={styles.searchInput}>
            <TextField
              sx={{ m: 1, width: "55ch" }}
              id='outlined-basic'
              label='Поиск'
              variant='outlined'
            />
          </div> */}
        </header>
        <ChatList />
        <ChannelList />
      </div>
      <main className={styles.right}>{children}</main>
    </div>
  )
}

export default Layout
