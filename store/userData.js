import api from '@/services/githubService.js'

export const state = () => ({
  userData: {},
})

export const mutations = {
  SET_USERDATA(state, userData){
    state.userData = userData
  },
}

export const actions = {
  fetchUserData({commit}, username) {
    return api.api(username).then(function(response) {
      commit('SET_USERDATA', response.data)
    })
  },

}

