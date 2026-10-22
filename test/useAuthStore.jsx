import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  userName: "",

  login: (username) =>
    set({
      isLoggedIn: true,
      userName: username,
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      userName: "",
    }),
}));