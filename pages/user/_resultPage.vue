<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <user-information
        v-if="userData.avatar_url"
        :user-data="userData"
        :username="$route.params.resultPage"
      ></user-information>
      <!-- If the user doesnt exist  -->
      <div v-else>
        <p> There is no user called {{$route.params.resultPage}}</p>
      </div>
      <div class="button--center">
        <HdButton
          modifier="secondary"
          :is-in-dark-background="false"
          :disabled="false"
          icon-src=""
          @click="back"
        >
          New search
        </HdButton>
      </div>
    </section>
  </div>
</template>

<script>
import { HdButton } from "homeday-blocks";
import { mapState} from "vuex";
import userInformation from "@/components/userInformation.vue";


export default {
  name: "ResultPage",
  components: {
    userInformation,
    HdButton,
  },
  async fetch({ store, error, params }){
    try{
      await store.dispatch('userData/fetchUserData',params.resultPage)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch user data at this time. Please try again.'
      })
    }
  },
  methods: {
    back () {
      this.$router.push({
        name: "index",
      });
    },
  },
  // eslint-disable-next-line vue/order-in-components
  computed: mapState({
    userData: state => state.userData.userData
  })
};
</script>

<style>
</style>