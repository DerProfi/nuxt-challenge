<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching with Nuxt</h1>
      <p v-if="errors.length" data-testid="errorDisplay" >
        {{ errors.join(" ") }}
      </p>
      <!-- Submit prevent because the form is not connected, we just need the search method -->
      <!-- <input-form @submit="search"></input-form> -->
    </div>
  </div>
</template>

<script>
// import inputForm from "../components/inputForm.vue";
export default {
  // components: {
  //   inputForm,
  // },
  data() {
    return {
      username: "",
      errors: [],
    };
  },
  methods: {
    search(payload) {
      this.username = payload;
      if (this.username) {
        this.$router.push({
          name: "Results",
          params: { username: this.username },
        });
      } else {
        this.errors.push("Please enter a username.");
      }
    },
  },
};
</script>