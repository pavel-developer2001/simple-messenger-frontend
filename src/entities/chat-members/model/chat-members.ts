import { makeAutoObservable } from "mobx";
import ChatMembersApi from "../../../shared/api/messenger/chat-members-api";
import { IChatMember } from "../../../shared/api/messenger/models";

class ChatMembers {
  status = false;
  error = null;
  isLoading = true;
  members: IChatMember[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  async join(data: { chatId: string }) {
    try {
      const response = await ChatMembersApi.join(data);
      this.members.push(response.data);
      this.status = true;
    } catch (error) {
      console.log("error", error);
    }
  }
  async exit(id: string) {
    try {
      await ChatMembersApi.exit(id);
      this.members = this.members.filter((item) => item._id !== +id);
      this.status = false;
    } catch (error) {
      console.log("error", error);
    }
  }
  async check(id: string) {
    try {
      const response = await ChatMembersApi.check(id);
      this.status = response.data.status;
      this.isLoading = false;
    } catch (error) {
      console.log("error", error);
      this.isLoading = false;
    }
  }
  async getChatMembers(id: string) {
    try {
      const response = await ChatMembersApi.getChatMembers(id);
      this.members = response.data;
      this.isLoading = false;
    } catch (error) {
      console.log("error", error);
      this.isLoading = false;
    }
  }
}
export default new ChatMembers();
