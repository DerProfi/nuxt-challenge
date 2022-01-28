<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching</h1>
      <input-form @submit="search"></input-form>
      <hr>
      <h2>PA squad MVPs (no particular order) </h2>
      <nuxt-link to="/user/viniciuskneves"><p>Vini</p></nuxt-link>
      <nuxt-link to="/user/alieslamifard"><p>Ali</p></nuxt-link>
      <nuxt-link to="/user/leandroinacio"><p>Leandro</p></nuxt-link>
      <nuxt-link to="/user/drapisarda"><p>Daniele</p></nuxt-link>
    </div>
  </div>
</template>

<script>
import inputForm from "../components/inputForm.vue";
export default {
  name: "IndexForm",
  components: {
    inputForm,
  },
  methods: {
    search(payload) {
        this.$router.push({
          name: "user-resultPage",
          params: { resultPage: payload }
        })
    }
  },
};
</script>
<style lang="scss">
hr{
  margin-top: 2rem;
}
h2{
  text-align: center;
}
p{
  display: block;
  text-align: center;
}

</style>