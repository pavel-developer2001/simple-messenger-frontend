import IconButton from "@mui/material/IconButton"
import { FC } from "react"
import styles from "./AddElement.module.scss"
import FilePresentIcon from "@mui/icons-material/FilePresent"
import TextField from "@mui/material/TextField"
import SendIcon from "@mui/icons-material/Send"

interface AddElementProps {
  value: string
  setValue: (arg: string) => void
  handleCreate: () => void
}

const AddElement: FC<AddElementProps> = ({ value, setValue, handleCreate }) => {
  return (
    <div className={styles.main}>
      {/* <IconButton color='primary' aria-label='upload picture' component='span'>
        <FilePresentIcon />
      </IconButton> */}
      <TextField
        id="outlined-basic"
        label="Написать сообщение"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && value.length !== 0) {
            handleCreate()
          }
        }}
        sx={{ m: 1, width: "100ch" }}
        variant="outlined"
      />
      <IconButton
        color="primary"
        disabled={value.length === 0}
        onClick={handleCreate}
        aria-label="upload picture"
        component="span"
      >
        <SendIcon />
      </IconButton>
    </div>
  )
}

export default AddElement
