import Layout from "../../shared/ui/Layout";
import MessageList from "./components/MessageList";
import NavbarGroup from "../../shared/ui/NavbarGroup";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import chatMembers from "../../entities/chat-members/model/chat-members";
import chatMessage from "../../entities/chat-message/model/chat-message";
import AddElement from "../../shared/ui/AddElement";

const Chat = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      chatMembers.check(params.id);
      chatMembers.getChatMembers(String(params.id));
    }
  }, [params.id]);
  const [message, setMessage] = useState("");
  const handleCreateMessage = () => {
    const payload = { message, chatId: String(params.id) };
    chatMessage.create(payload);
    setMessage("");
  };
  const handleExit = () => {
    chatMembers.exit(String(params.id));
    navigate("/");
  };
  const handleJoin = () => {
    const payload = { chatId: String(params.id) };
    chatMembers.join(payload);
  };
  if (chatMembers.isLoading) {
    return <CircularProgress />;
  }
  return (
    <Layout>
      <NavbarGroup
        name={chatMembers?.members[0]?.chat?.chatTitle}
        onExit={handleExit}
        count={chatMembers?.members?.length}
        whom='участников'
        status={chatMembers.status}
      />
      <MessageList />
      {chatMembers.status ? (
        <AddElement
          value={message}
          setValue={setMessage}
          handleCreate={handleCreateMessage}
        />
      ) : (
        <Button variant='outlined' onClick={handleJoin}>
          Вступить в чат
        </Button>
      )}
    </Layout>
  );
};

export default observer(Chat);
