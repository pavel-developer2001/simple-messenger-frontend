import instance from "./base";

export default class ChatMessageApi {
  static async getChatMessages(id: string) {
    return instance.get("/chat-messages/" + id);
  }
}
