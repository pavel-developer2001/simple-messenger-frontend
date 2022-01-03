import Paper from "@mui/material/Paper";
import React from "react";
import styles from "./PostList.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const PostListItem = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.main}>
      <Paper elevation={3}>
        <div className={styles.head}>
          <strong>Marver Fans</strong>
          <IconButton
            id='demo-positioned-button'
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div className={styles.body}>
          <img
            src='https://staff-online.ru/wp-content/uploads/2017/04/multfilmy-marvel.jpg'
            alt='photo post'
          />
        </div>
        <Link to='/channel/1/comments'>
          {" "}
          <div className={styles.footer}>
            <div className={styles.left}>
              <AvatarGroup total={3}>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt='Remy Sharp'
                  src='/static/images/avatar/1.jpg'
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt='Travis Howard'
                  src='/static/images/avatar/2.jpg'
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt='Agnes Walker'
                  src='/static/images/avatar/4.jpg'
                />
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt='Trevor Henderson'
                  src='/static/images/avatar/5.jpg'
                />
              </AvatarGroup>
              <strong>120 комментариев</strong>
            </div>
            <div className={styles.rigth}>
              <ChevronRightIcon />
            </div>
          </div>{" "}
        </Link>
      </Paper>
    </div>
  );
};
const PostList = () => {
  return (
    <div className={styles.mainList}>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
