import instance from "../../shared/api/messenger/base";

export default class ChatMessageApi {
  static async getChatMessages(id: string) {
    return instance.get("/chat-messages/" + id);
  }
}
