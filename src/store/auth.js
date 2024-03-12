import {defineStore} from "pinia";
import {doLogin, doLogout, setToken} from "@/api/auth.js";

export const useAuthStore = defineStore('auth', {

	state: () => ({
		token: '',
	}),


	actions: {

		setTokenHandle(token) {
			this.token = token
			setToken(this.token)
		},


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

	}

})
