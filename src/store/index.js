import { create } from "zustand";

export const backendUrlApi = 'http://localhost:1337/api/'

const auth = JSON.parse(localStorage.getItem('auth')) || JSON.parse(sessionStorage.getItem('auth')) || null;

export const useAuthStore = create((set) => ({
    user: auth == null ? null : auth.user,
    token: auth == null ? null : auth.token,
    isLoggedIn: auth == null ? false : true
}))