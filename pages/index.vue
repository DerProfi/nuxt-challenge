<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching</h1>
      <input-form @submit="search"></input-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import inputForm from "../components/inputForm.vue";
export default Vue.extend({
  name: "IndexForm",
  components: {
    inputForm,
  },
  methods: {
    search(payload: string) {
        this.$router.push({
          name: "user-resultPage",
          params: { resultPage: payload },
        })
    }
  },
});
</script>