import instance from "./base";

export default class ChatMessageApi {
  static async create(payload: { message: string; chatId: string }) {
    return instance.post("/chat-messages/", payload);
  }
  static async getChatMessages(id: string) {
    return instance.get("/chat-messages/" + id);
  }
}
