import api from '@/services/githubService.js'

export const state = () => ({
  userData: {},
  error: []
})

export const mutations = {
  SET_USERDATA(state, userData){
    state.userData = userData
  },
  SET_USERDATA_ERROR(state, error){
    state.error = error
  },
}

export const actions = {
  fetchUserData({commit}, username) {
    return api.api(username).then(function(response) {
      commit('SET_USERDATA', response.data)
    }).catch(function(error){
      commit('SET_USERDATA_ERROR', error);
    })
  },

}

