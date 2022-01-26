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
        <p> There is no user called "{{$route.params.resultPage}}"</p>
      </div>
      <div class="button--center">
        <a href="/">
          <HdButton
            modifier="secondary"
            :is-in-dark-background="false"
            :disabled="false"
            icon-src=""
            @click="back(); reset()"
          >
            New search
          </HdButton>
        </a>
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
      await store.dispatch('userData/fetchUserData', "alieslamifard")
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: e.message
      })
    }
  },
  computed: mapState({
    userData: state => state.userData.userData
  }),
  methods: {
    back () {
      this.$router.push({
        name: "index",
      });
    },
    reset () {
      this.$store.dispatch('userData/resetUserData')
    }
  }
};
</script>

<style>
</style>