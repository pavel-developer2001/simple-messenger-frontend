import Layout from "../../shared/ui/Layout";
import PostList from "./components/PostList";
import NavbarGroup from "../../shared/ui/NavbarGroup";
import { Button, CircularProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import channel_members from "../../entities/channel-members/model/channel-members";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import channelPosts from "../../entities/channel-posts/model/channel-posts";
import AddElement from "../../shared/ui/AddElement";

const Channel = () => {
  const params = useParams();
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      channel_members.check(params.id);
      channel_members.getMembersChannel(String(params.id));
    }
  }, [params.id]);
  const handleExit = () => {
    channel_members.exit(String(params.id));
    navigate("/");
  };
  if (channel_members.isLoading) {
    return <CircularProgress />;
  }
  const handleJoin = () => {
    const payload = { channelId: String(params.id) };
    channel_members.join(payload);
  };

  const handleCreatePost = () => {
    const payload = { channelId: String(params.id), post };
    channelPosts.create(payload);
    setPost("");
  };
  return (
    <Layout>
      <NavbarGroup
        name={channel_members?.members[0]?.channel?.channelTitle}
        onExit={handleExit}
        count={channel_members.members.length}
        whom='подписчиков'
        status={channel_members.status}
      />
      <PostList />
      {channel_members.status ? (
        <AddElement
          value={post}
          setValue={setPost}
          handleCreate={handleCreatePost}
        />
      ) : (
        <Button onClick={handleJoin} variant='outlined'>
          Подписаться
        </Button>
      )}
    </Layout>
  );
};

export default observer(Channel);
