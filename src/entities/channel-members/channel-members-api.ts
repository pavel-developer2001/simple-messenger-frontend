import instance from "../../shared/api/messenger/base";

export default class ChannelMembersApi {
  static async join(payload: { channelId: string }) {
    return instance.post("/channel-members/join", payload);
  }
  static async exit(id: number) {
    return instance.delete("/channel-members/exit/" + id);
  }
  static async getMembersChannel(id: number) {
    return instance.get("/channel-members/" + id);
  }
  static async check(id: number) {
    return instance.get("/channel-members/check/" + id);
  }
}
