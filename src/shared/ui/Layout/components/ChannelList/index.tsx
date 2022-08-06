import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import deepPurple from "@mui/material/colors/deepPurple";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import channel from "../../../../../entities/channel/model/channel";
import { IChannel } from "../../../../api/messenger/models";
import styles from "./ChannelList.module.scss";

const ChannelListItem: FC<{ channel: IChannel }> = ({ channel }) => {
  return (
    <Link to={"/channel/" + channel._id}>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 45, height: 45 }}>
            C
          </Avatar>
        </div>
        <div className={styles.content}>
          <strong>{channel.channelTitle}</strong>
          <p>{channel.channelDescription}</p>
        </div>
      </div>
    </Link>
  );
};

const ChannelList = observer(() => {
  useEffect(() => {
    channel.getChannels();
  }, []);

  if (channel.isLoading) {
    return <CircularProgress />;
  }
  if (channel.channels.length === 0) {
    return <div>Нет каналов</div>;
  }
  return (
    <aside className={styles.mainList}>
      {channel.channels.map((channel) => (
        <ChannelListItem key={channel._id} channel={channel} />
      ))}
    </aside>
  );
});

export default ChannelList;
