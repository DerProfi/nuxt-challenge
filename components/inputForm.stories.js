import { action } from '@storybook/addon-actions';
import { InputForm } from '@/components/inputForm.vue';

export default {
  title: 'Views/InputForm',
  components: InputForm,
}

export const Form = () => ({
  components: InputForm,
  template: `
    <input-form
      @submit="search"
    >
    </input-form>
  `,
  methods: {search: action('searched')}
})