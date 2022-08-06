import instance from "./base";

export default class ChatMembersApi {
  static async join(payload: { chatId: string }) {
    return instance.post("/chat-members/join", payload);
  }
  static async getChatMembers(id: string) {
    return instance.get("/chat-members/" + id);
  }
  static async check(id: string) {
    return instance.get("/chat-members/check/" + id);
  }
  static async exit(id: string) {
    return instance.delete("/chat-members/exit/" + id);
  }
}
