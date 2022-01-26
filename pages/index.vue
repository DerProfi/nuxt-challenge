<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching</h1>
      <input-form @submit="search"></input-form>
      <hr>
      <h2>PA squad MVPs</h2>
      <a href="/user/leandro/"> <p>Leandro</p></a>
      <a href="/user/Vini"> <p>Vini</p></a>
      <a href="/user/Daniele"> <p>Daniele</p></a>
      <a href="/user/Ali"> <p>Ali</p></a>
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
h2, p{
  text-align: center;
}

</style>