import { makeAutoObservable } from "mobx";
import ChannelApi from "../../../shared/api/messenger/channel-api";
import { IChannel } from "../../../shared/api/messenger/models";

class Channel {
  isLoading = true;
  channels: IChannel[]= [];
  error = [];
  channel = {};
  constructor() {
    makeAutoObservable(this);
  }
  async create(data: { channelTitle: string; channelDescription: string }) {
    try {
      const response = await ChannelApi.create(data);
      this.channels.push(response.data);
    } catch (error) {
      this.error = (error as any).response.data.message;
    }
  }
  async getChannels() {
    try {
      const response = await ChannelApi.getChannels();
      this.channels = response.data;
      this.isLoading = false;
    } catch (error) {
      this.error = (error as any).response.data.message;
      this.isLoading = false;
    }
  }
}
export default new Channel();
