import { makeAutoObservable } from "mobx"
import ChatApi from "../chat-api"
import { IChat } from "../../../shared/api/messenger/models"

class Chat {
  isLoading = true
  chats: IChat[] = []
  error = []
  constructor() {
    makeAutoObservable(this)
  }
  async create(data: { chatTitle: string }) {
    try {
      const response = await ChatApi.create(data)
      this.chats.push(response.data)
    } catch (error) {
      this.error = (error as any).response.data.message
    }
  }
  async getChats() {
    try {
      const response = await ChatApi.getChats()
      this.chats = response.data
      this.isLoading = false
    } catch (error) {
      console.log("error", error)
      this.isLoading = false
    }
  }
}
export default new Chat()
