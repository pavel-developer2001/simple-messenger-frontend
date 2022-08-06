import instance from "./base";

export default class AuthApi {
  static async registration(payload: { name: string; password: string }) {
    return instance.post("/auth/register", payload);
  }
  static async login(payload: { name: string; password: string }) {
    return instance.post("/auth/login", payload);
  }
  static async logout() {
    return instance.post("/auth/logout");
  }
  static async refresh() {
    return instance.get("/auth/refresh", {
      withCredentials: true,
    });
  }
}
