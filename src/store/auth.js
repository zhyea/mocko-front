import {defineStore} from "pinia";
import {doLogin, doLogout, setToken, removeToken} from "@/api/auth.js";
import config from "@/config/index.js";

export const useAuthStore = defineStore('auth', {

	state: () => ({
		token: '',
	}),


	actions: {

		//setToken
		setTokenHandle(token) {
			this.token = token
			setToken(this.token)
		},


		//login
		loginHandle(data) {
			return new Promise((resolve, reject) => {
				return doLogin(data)
					.then(
						response => {
							const token = response.data
							this.setTokenHandle(token)
							sessionStorage.setItem(config.isLogin, "true")
							resolve()
						}
					)
					.catch(
						error => {
							reject(error)
						}
					)
			})
		},


		//logout
		logoutHandle() {
			return new Promise((resolve, reject) => {
				return doLogout()
					.then(
						() => {
							sessionStorage.removeItem(config.isLogin)
							removeToken()
							resolve()
						}
					).catch(
						error => {
							reject(error)
						}
					)
			})
		}

		// -----
	}

})
