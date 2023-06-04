import { makeAutoObservable } from "mobx";
import AuthApi from "../auth-api";
import { IUser } from "../../../shared/api/messenger/models";

class Auth {
  isAuth = false;
  isLoading = true;
  error: string[] = [];
  profile: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  async registerUser(data: { name: string; password: string }) {
    try {
      const response = await AuthApi.registration(data);
      window.localStorage.setItem("messenger-token", response.data.accessToken);
      this.isLoading = false;
      this.isAuth = true;
    } catch (error) {
      this.error.push((error as any).response.data.message);
    }
  }
  async loginUser(data: { name: string; password: string }) {
    try {
      const response = await AuthApi.login(data);
      window.localStorage.setItem("messenger-token", response.data.accessToken);
      this.isLoading = false;
      this.isAuth = true;
    } catch (error) {
      this.error.push((error as any).response.data.message);
    }
  }
  checkAuth(check: boolean) {
    this.isAuth = check;
  }
  async userCheckout() {
    try {
      const response = await AuthApi.refresh();
      window.localStorage.setItem("messenger-token", response.data.accessToken);
      this.profile = response.data.user;
    } catch (error) {
      this.error = (error as any).response.data.message;
    }
  }
  async logout() {
    try {
      await AuthApi.logout();
      window.localStorage.removeItem("messenger-token");
      this.isAuth = false;
      this.profile = null;
    } catch (error) {
      console.log("errors", error);
    }
  }
}
export default new Auth();
