import Avatar from "@mui/material/Avatar"
import { observer } from "mobx-react-lite"
import auth from "../../model/auth"
import styles from "./UserData.module.scss"

const UserData = () => {
  return (
    <div className={styles.main}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      {auth.profile && (
        <div className={styles.data}>
          <strong>{auth.profile.name}</strong>
          <p>
            id: <span>{auth.profile._id}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default observer(UserData)
