export default {
    namespaced: true,
    state: () => {
      return {
        id: null,
        name: null,
      }
    },
    mutations: {
        setUser(state, payload) {
          state.id = payload.id
          state.name = payload.name
        },
    },
    getters: {},
    actions: {
      setUser({commit}, payload) {
        commit('setUser', payload)
      },
    }
}
