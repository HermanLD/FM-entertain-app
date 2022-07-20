import { defineStore } from "pinia";
import useAuthStore from "./auth";

const url = import.meta.env.VITE_BACKEND_URL;

export default defineStore({
  id: "user",
  state: () => ({
    avatar: undefined,
    email: undefined,
  }),
  actions: {
    setUser(userData) {
      this.avatar = userData.avatar;
      this.email = userData.email;
    },
    async initUserLogin() {
      const auth = useAuthStore();
      const token = auth.checkAuthToken();

      try {
        if (!token) throw new Error("No token!");

        const bearer = `Bearer ${token}`;
        const res = await fetch(`${url}/users/me`, {
          method: "GET", // or 'PUT'
          headers: {
            Authorization: bearer,
          },
        });
        const resData = await res.json();

        if (resData.error) throw new Error(resData.error);

        this.setUser(resData.user);
        auth.toggleLoginStatus(true);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async createUser(userData) {
      // ? - userData = { email: "ford@test.com", password: "truck1234" }
      const auth = useAuthStore();

      try {
        const res = await fetch(`${url}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const resData = await res.json();

        if (resData.error) throw new Error(resData.error);

        auth.setAuthToken(resData.token);
        auth.toggleLoginStatus(true);
        this.setUser(resData.user);
      } catch (e) {
        console.log(e);
      }
    },
    async logInUser(userData) {
      // ? - userData = { email: "ford@test.com", password: "truck1234" }
      const auth = useAuthStore();

      try {
        const res = await fetch(`${url}/users/login`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const resData = await res.json();

        if (resData.error) throw new Error(resData.error);

        console.log(resData);

        auth.setAuthToken(resData.token);
        auth.toggleLoginStatus(true);
        this.setUser(resData.user);
      } catch (e) {
        console.log(e);
      }
    },
    async logOutUser() {
      const auth = useAuthStore();
      const token = auth.checkAuthToken();

      console.log(token);

      try {
        if (!token) throw new Error("No token!");

        const bearer = `Bearer ${token}`;

        await fetch(`${url}/users/logout`, {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: bearer,
          },
        });

        // ? - Clear user app state
        this.setUser({ email: undefined, avatar: undefined });
        auth.clearAuthToken();
        auth.toggleLoginStatus(false);
      } catch (e) {
        console.log(e);
      }
    },
    async addBookmark(contentId) {
      const auth = useAuthStore();

      const token = auth.checkAuthToken();

      try {
        if (!token) throw new Error("No token!");
        const bearer = `Bearer ${token}`;

        await fetch(`${url}/users/bookmarks`, {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contentId }),
        });
      } catch (e) {
        console.log(e);
      }
    },
    async deleteBookmark(contentId) {
      const auth = useAuthStore();

      const token = auth.checkAuthToken();

      try {
        if (!token) throw new Error("No token!");
        const bearer = `Bearer ${token}`;

        await fetch(`${url}/users/bookmarks`, {
          method: "DELETE", // or 'PUT'
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contentId }),
        });
      } catch (e) {
        console.log(e);
      }
    },
    async logoutAll() {
      const auth = useAuthStore();
      const token = auth.checkAuthToken();
      try {
        if (!token) throw new Error("No token!");
        const bearer = `Bearer ${token}`;

        await fetch(`${url}/users/logoutAll`, {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: bearer,
          },
        });
        // ? - Clear user app state
        this.setUser({ email: undefined, avatar: undefined });
        auth.clearAuthToken();
        auth.toggleLoginStatus(false);
      } catch (e) {
        console.log(e);
      }
    },
    async uploadAvatar() {
      const token = auth.checkAuthToken();
      const auth = useAuthStore();
      try {
        if (!token) throw new Error("No token!");
        const bearer = `Bearer ${token}`;

        await fetch(`${url}/users/avatar`, {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: bearer,
            //! "Content-Type": "application/json",
          },
          body: new FormData(),
          //! body: JSON.stringify({ contentId }),
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
