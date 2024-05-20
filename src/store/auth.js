import {defineStore} from "pinia";
import {doLogin, doLogout, setToken} from "@/api/auth.js";

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
