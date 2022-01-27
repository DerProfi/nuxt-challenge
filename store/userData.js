import api from '@/services/githubService.ts'

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
  SET_RESET(state){
    state.userData = {}
  }
}

export const actions = {
  fetchUserData({commit}, username) {
    return api.api(username).then(function(response) {
      commit('SET_USERDATA', response.data)
    }).catch(function(error){
      commit('SET_USERDATA_ERROR', error);
    })
  },
  resetUserData({commit}) {
    commit('SET_RESET')
  }
}