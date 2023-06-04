import { FC } from "react"
import styles from "./NavbarGroup.module.scss"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { IconButton } from "@mui/material"

interface NavbarGroupProps {
  name: string
  count: number
  whom: string
  onExit: () => void
  status: boolean | null
}

const NavbarGroup: FC<NavbarGroupProps> = ({
  name,
  count,
  whom,
  onExit,
  status,
}) => {
  return (
    <div className={styles.navbar}>
      <div>
        <strong>{name}</strong>
        <span>
          {count} {whom}
        </span>
      </div>
      {status && (
        <IconButton aria-label="exit" onClick={onExit}>
          <ExitToAppIcon />
        </IconButton>
      )}
    </div>
  )
}

export default NavbarGroup
