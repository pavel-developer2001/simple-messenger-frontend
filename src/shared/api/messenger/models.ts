export interface IChannel {
  _id: number;
  channelDescription: string;
  channelTitle: string;
  createdAt: string;
  updatedAt: string;
}
export interface IChannelMember {
  channel: IChannel;
  createdAt: string;
  status: string;
  updatedAt: string;
  user: { _id: number };
  _id: number;
}

export interface IPost {
  channel: IChannel;
  createdAt: string;
  post: string;
  updatedAt: string;
  _id: number;
}

export interface IChat {
  chatTitle: string;
  createdAt: string;
  updatedAt: string;
  _id: number;
}

export interface IUser {
  createdAt: string;
  name: string;
  password: string;
  updatedAt: string;
  _id: number;
}

export interface IMessage {
  createdAt: string;
  message: string;
  updatedAt: string;
  user: IUser;
  _id: number;
}
export interface IChatMember {
  chat: IChat;
  createdAt: string;
  status: string;
  updatedAt: string;
  _id: number;
}
