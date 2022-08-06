import instance from "./base";

export default class ChatApi {
  static async create(payload: { chatTitle: string }) {
    return instance.post("/chat/", payload);
  }
  static async getChats() {
    return instance.get("/chat/");
  }
}
