import instance from "../../shared/api/messenger/base"

export default class ChannelPostsApi {
  static async create(payload: { channelId: string; post: string }) {
    return instance.post("/channel-posts/", payload)
  }
  static async getPostsChannel(id: string) {
    return instance.get("/channel-posts/" + id)
  }
}
