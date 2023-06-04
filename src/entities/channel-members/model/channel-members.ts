import { makeAutoObservable } from "mobx"
import ChannelMembersApi from "../channel-members-api"
import { IChannelMember } from "../../../shared/api/messenger/models"

class ChannelMembers {
  status: null | boolean = null
  members: IChannelMember[] = []
  isLoading = true
  error = null
  constructor() {
    makeAutoObservable(this)
  }
  async join(data: { channelId: string }) {
    try {
      const response = await ChannelMembersApi.join(data)
      this.members.push(response.data)
      this.isLoading = false
      this.status = true
    } catch (error) {
      console.log("error", error)
      this.isLoading = false
    }
  }
  async exit(id: string) {
    try {
      const response = await ChannelMembersApi.exit(+id)
      this.members = this.members.filter(
        (item) => item._id !== response.data._id
      )
      this.status = false
    } catch (error) {
      console.log("error", error)
    }
  }
  async getMembersChannel(id: string) {
    try {
      this.isLoading = true
      const response = await ChannelMembersApi.getMembersChannel(+id)
      this.members = response.data
      this.isLoading = false
    } catch (error) {
      console.log("error", error)
      this.isLoading = false
    }
  }
  async check(id: string) {
    try {
      const response = await ChannelMembersApi.check(+id)
      this.status = response.data.status
      this.isLoading = false
    } catch (error) {
      console.log("error", error)
      this.isLoading = false
    }
  }
}
export default new ChannelMembers()
