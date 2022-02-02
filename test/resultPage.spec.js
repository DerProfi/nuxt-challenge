import {render, screen, fireEvent} from '@testing-library/vue'
import resultPage from '@/pages/_resultPage.vue'



describe('resultPage.vue', () => {
  it('fetch user data at fetch', async () => {
    Vue.use(Vuex)
    const {getByTestId, getByText} = render(resultPage, {
      store: new Vuex.Store({
        state: {
          userData: {}
        },
        mutations: {
          SET_USERDATA(state, userData){
            state.userData = userData
          },
        },
        actions: {
          fetchUserData({commit}, username) {
            return api.api(username).then(function(response) {
              commit('SET_USERDATA', response.data)
            }).catch(function(error){
              commit('SET_USERDATA_ERROR', error);
            })
          },
        }
      })
    })
    // fire the fetch hock with username
    await
    // expect store to have userData
    
  })
  it('error displayed if no user', async () => {

  })
})
