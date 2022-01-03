<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching</h1>
      <p v-if="errors.length" data-testid="errorDisplay">
        {{ errors.join(" ") }}
      </p>
      <input-form @submit="search"></input-form>
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
          name: "user-resultPage",
          params: { resultPage: this.username }
        });
      } else {
        this.data.$route.errors.push("Please enter a username.");
      }
    },
  },
};
</script>