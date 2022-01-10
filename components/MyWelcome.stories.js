import Welcome from './MyWelcome.vue';

export default {
  title: 'Introduction/Welcome',
  component: Welcome,
};

export const Hello = () => ({
  components: { Welcome },
  template: '<Welcome />',
});
