export default {
	namespaced: "user",
	state: {
		token: "",
		roles: [],
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_ROLES(state, roles) {
			state.roles = roles;
		}
	},
	actions: {},
	getters: {}
}
