import instance from "../../shared/api/messenger/base"

export default class ChannelApi {
  static async create(payload: {
    channelTitle: string
    channelDescription: string
  }) {
    return instance.post("/channel/", payload)
  }
  static async getChannels() {
    return instance.get("/channel/")
  }
}
