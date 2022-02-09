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
        <nuxt-link to="/">
          <HdButton
            modifier="secondary"
            :is-in-dark-background="false"
            :disabled="false"
            icon-src=""
            @click="back(); reset()"
          >
            New search
          </HdButton>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { HdButton } from "homeday-blocks";
import userInformation from "@/components/userInformation.vue";
import api from '@/services/githubService.js'



export default {
  name: "ResultPage",
  components: {
    userInformation,
    HdButton,
  },
  async asyncData({ params }){
    try{
      const response = await api.api(params.resultPage);
      const userData = response.data
      return {userData}
    } catch (err) {
      err({
        statusCode: err.response.status,
        message: err.message
      })
    }
  },
  methods: {
    back () {
      this.$router.push({
        name: "index",
      });
    },
    reset () {
      this.userData = {}
    }
  }
};
</script>

<style>

</style>