import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import LogoutIcon from "@mui/icons-material/Logout"
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import FiberNewIcon from "@mui/icons-material/FiberNew"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import auth from "../../model/auth"

const MenuList = () => {
  const listItems = [
    { link: "/create-chat", icon: <PeopleOutlineIcon />, text: "Создать чат" },
    { link: "/create-channel", icon: <FiberNewIcon />, text: "Создать канал" },
  ]
  const handleExit = () => {
    auth.logout()
  }
  return (
    <List>
      {listItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
      <ListItem button onClick={handleExit}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Выйти" />
      </ListItem>
    </List>
  )
}

export default observer(MenuList)
