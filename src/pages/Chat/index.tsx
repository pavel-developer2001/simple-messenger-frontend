import React from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import AddMessage from "./components/AddMessage";
import styles from "./Chat.module.scss";
import MessageList from "./components/MessageList";
import NavbarGroup from "../../components/NavbarGroup";

const Chat = () => {
  const params = useParams();
  return (
    <Layout>
      <NavbarGroup name='Murrengan' count={557} whom='участников' />
      <MessageList />
      <AddMessage />
    </Layout>
  );
};

export default Chat;
