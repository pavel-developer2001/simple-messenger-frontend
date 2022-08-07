import { makeAutoObservable } from "mobx";
import ChatMessageApi from "../../../shared/api/messenger/chat-message-api";
import { IMessage } from "../../../shared/api/messenger/models";

class ChatMessage {
  isLoading = true;
  error = null;
  messages: IMessage[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  async create(data: IMessage) {
    try {
      this.messages.push(data);
    } catch (error) {
      this.error = (error as any).response.data.message;
    }
  }
  async getMessages(id: string) {
    try {
      const response = await ChatMessageApi.getChatMessages(id);
      this.messages = response.data;
      this.isLoading = false;
    } catch (error) {
      console.log("error", error);
      this.isLoading = false;
    }
  }
}
export default new ChatMessage();
