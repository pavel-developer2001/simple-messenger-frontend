import Paper from "@mui/material/Paper";
import React, { FC, useEffect } from "react";
import styles from "./PostList.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import channelPosts from "../../model/channel-posts";
import { CircularProgress } from "@mui/material";
import { IPost } from "../../../../shared/api/messenger/models";

const PostListItem: FC<{post:IPost}> = ({ post }) => {
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
          <strong>{post.channel.channelTitle}</strong>
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
          {/* <img
            src='https://staff-online.ru/wp-content/uploads/2017/04/multfilmy-marvel.jpg'
            alt='photo post'
          /> */}
          <p>{post.post}</p>
        </div>
        <Link to='/channel/1/comments'>
          {" "}
          {/* <div className={styles.footer}>
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
          </div>{" "} */}
        </Link>
      </Paper>
    </div>
  );
};
const PostList = () => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      channelPosts.getPosts(params.id);
    }
  }, [params.id]);
  if (channelPosts.isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className={styles.mainList}>
      {channelPosts.posts.map((post) => (
        <PostListItem post={post} key={post._id} />
      ))}
    </div>
  );
};

export default observer(PostList);
