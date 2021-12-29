import React from "react";
import styles from "./Channel.module.scss";
import Layout from "../../components/Layout";
import NavbarGroup from "../../components/NavbarGroup";

const Channel = () => {
  return (
    <Layout>
      <NavbarGroup name='Marver Fans' count={117757} whom='подписчиков' />
    </Layout>
  );
};

export default Channel;
