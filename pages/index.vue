<template>
<div>
  <h1>Hello world</h1>
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
</template>

<script>
import { HdButton } from 'homeday-blocks';

export default {
    components: {
        HdButton
    }

}
</script>

<style>

</style>