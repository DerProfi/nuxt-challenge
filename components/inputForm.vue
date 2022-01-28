<template>
  <div>
    <form @submit.prevent="emitEvent">
      <HdInput
        v-model="username"
        class="form__input"
        :required="true"
        type="text"
        name="search"
        label="Username"
        placeholder="Please enter a username."
      />
      <div class="button--center">
        <HdButton
          type="submit"
          modifier="primary"
          :is-in-dark-background="false"
          icon-src=""
          :disabled="false"
        >
          Search
        </HdButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HdButton, HdInput } from "homeday-blocks";
export default Vue.extend({
  components: {
    HdButton,
    HdInput,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    emitEvent(): void {
      this.$emit("submit", this.username);
    },
  },
});
</script>

<style lang="scss" scoped>
.form__input{
  color: black;
  width: 70%;
  margin: 0 auto;
}
</style>