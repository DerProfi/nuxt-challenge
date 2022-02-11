<template>
  <div>
    <div v-if="userData.avatar_url">
      <h1 data-testid="informationHeading">Information about {{ username }}</h1>
      <div class="container__content">
        <img :src="userData.avatar_url" alt="avatar" />
        <div class="container__text">
          <p v-if="userData.name"><strong>Name: </strong>{{ userData.name }}</p>
          <p v-if="userData.location">
            <strong>City: </strong>{{ userData.location }}
          </p>
          <p v-if="userData.company">
            <strong>Company: </strong>{{ userData.company }}
          </p>
          <p v-if="userData.bio"><strong>Bio: </strong>{{ userData.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import {IUserInformation} from '../types/user.interface';


export default Vue.extend({
  name: "UserInformation",
  props: {
    userData: { type: Object as PropType<IUserInformation['userData']>, required: true },
    username: { type: String as PropType<IUserInformation['username']>, required: true}
  }
})
</script>