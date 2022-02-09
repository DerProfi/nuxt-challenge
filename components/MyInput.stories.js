import { HdInput } from 'homeday-blocks';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Prebuild/Input',
  component: HdInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    value: { table: { disable: true } },
    type: { table: { disable: true } },
    min: { table: { disable: true } },
    input: { table: { disable: true } },
    focus: { table: { disable: true } },
    blur: { table: { disable: true } },
    "input-right": { table: { disable: true } },

  },
  args: {
    label: '',
    placeholder: '',
    value: '',
    required: true,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdInput },
  data(){
    return {
      value: ""
    }
  },
  watch: {
    value(value) {
      action('input')(value);
    },
  },
  template: `
    <HdInput
     v-model="value"
     :label="label"
     :required="required"
     name="Input"
     :label="label"
     :placeholder="placeholder"
    />
  `
})

export const Required = Template.bind({});
Required.args = {
  label: 'Input',
  placeholder: 'Placeholder...'
};

export const NotRequired = Template.bind({});
NotRequired.args = {
  label: 'Not required',
  placeholder: 'Placeholder...',
  required: false
};