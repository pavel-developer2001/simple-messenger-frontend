import { makeAutoObservable } from "mobx"
import ChannelPostsApi from "../channel-posts-api"
import { IPost } from "../../../shared/api/messenger/models"

class ChannelPosts {
  isLoading = true
  posts: IPost[] = []
  error = null
  constructor() {
    makeAutoObservable(this)
  }
  async create(data: { channelId: string; post: string }) {
    try {
      const response = await ChannelPostsApi.create(data)
      this.posts.push(response.data)
    } catch (error) {
      this.error = (error as any).response.data.message
    }
  }
  async getPosts(id: string) {
    try {
      const response = await ChannelPostsApi.getPostsChannel(id)
      this.posts = response.data
      this.isLoading = false
    } catch (error) {
      console.log("error", error)
      this.isLoading = false
    }
  }
}
export default new ChannelPosts()
