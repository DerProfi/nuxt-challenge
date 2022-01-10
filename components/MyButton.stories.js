import {
  HdButton,
  HdButtonTypes as TYPES,
} from 'homeday-blocks';

export default {
  title: 'Prebuild/Button',
  component: HdButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text default slot of the button',
    },
    modifier: {
      control: { type: 'select', options: Object.values(TYPES) },
      table: {
        defaultValue: { summary: TYPES.PRIMARY },
      },
    },
    onClick: {
      action: 'onClick',
    },
  },
  args: {
    modifier: TYPES.PRIMARY,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdButton },
  template: `
    <div>
      <HdButton
        @click="onClick"
        :modifier="modifier"
      >
      {{ text }}
      </HdButton>
    </div>
      `,
});

export const Primary = Template.bind({});
Primary.args = {
  modifier: TYPES.PRIMARY,
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  modifier: TYPES.SECONDARY,
  text: 'Secondary',
};