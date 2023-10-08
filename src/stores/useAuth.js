// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: null,
        isAuthenticated: false
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
            this.isAuthenticated= true;
        },
        setUser(user) {
            this.user = user

        },
        logOut() {
            this.token = null;
            this.user = null;
            localStorage.removeItem('token')
            this.isAuthenticated = false;
        }
    }
})
