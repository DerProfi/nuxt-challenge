<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <user-information
        v-if="userData.avatar_url"
        :user-data="userData"
        :username="username"
      ></user-information>
      <!-- If the user doesnt exist  -->
      <div v-else>
        <p>There is no user called "{{ username }}"</p>
      </div>
      <HdButton
        modifier="primary"
        :is-in-dark-background="false"
        :disabled="false"
        icon-src=""
        @click="back"
      >
        New search
      </HdButton>
    </section>
  </div>
</template>

<script>
// import  api  from "../services/Fetch"
import { HdButton } from "homeday-blocks";
import userInformation from "@/components/userInformation.vue";

export default {
  name: "ResultPage",
  components: {
    userInformation,
    HdButton,
  },
  props:{
    username: {
      type: String,
      required: true
    }
  },
  asyncData({$axios, error}){
    return $axios.get('https://api.github.com/users/derprofi')
    .then(response => {
      return{
        userData: response.data
      }
    }).catch(e => {
      error({
        statusCode: 503,
        message: 'Unable to fetch user data at this time. Please try again.'
      })
    })
  },
  mounted() {
    this.search();
  },
  methods: {
    back () {
      this.$router.push({
        name: "index",
      });
    },
    search () {
    },
  }
};
</script>

<style></style>