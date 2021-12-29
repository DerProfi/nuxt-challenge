<template>
  <div>
    <form @submit.prevent="emitEvent">
      <HdInput
        class="form__input"
        v-model="username"
        :required="true"
        type="text"
        name="search"
        label="Username"
        placeholder="Please enter a username."
      />
      <div class="form__button--center">
        <HdButton
          type="submit"
          modifier="primary"
          :isInDarkBackground="false"
          iconSrc=""
          :disabled="false"
        >
          Search
        </HdButton>
      </div>
    </form>
  </div>
</template>

<script>
import { HdButton, HdInput } from "homeday-blocks";
import "homeday-blocks/src/styles/main.scss";
export default {
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
    emitEvent() {
      this.$emit("submit", this.username);
    },
  },
};
</script>

<style lang="scss" scoped>
.form__input{
  color: black;
  width: 70%;
  margin: 0 auto;
}
.form__button--center{
   display: flex;
  justify-content: center;
  align-items: center;
}
</style>