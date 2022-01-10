import { InputForm } from '@/components/inputForm.stories';

export default {
  title: 'Views/InputForm',
  components: InputForm,
  argTypes: {
    search: {
      action: "search"
    }
  }
}

const Template = (args, {argTypes}) => ({
  components: InputForm,
  template: `
    <input-form 
      @submit="search"
    >
    </input-form>
  `,
})

export const Form = Template.bind({});
Form.argTypes = {};