import React from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import AddMessage from "./components/AddMessage";
import styles from "./Channel.module.scss";
import MessageList from "./components/MessageList";

const Channel = () => {
  const params = useParams();
  return (
    <Layout>
      <div className={styles.navbar}>
        <strong>Murrengan</strong>
        <span>557 membars</span>
      </div>
      <MessageList />
      <AddMessage />
    </Layout>
  );
};

export default Channel;
