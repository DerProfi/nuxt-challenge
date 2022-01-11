import { userInformation } from '@/components/userInformation.vue';

export default {
  title: 'Views/userInformation',
  components: userInformation,
}


const Template = (args, {argTypes}) => ({
  components: { userInformation },
  props: Object.keys(argTypes),
  template: `
     <user-information
      :user-data="userData"
      :username="username"
     >
     </user-information>
   `,
})

export const Information = Template.bind({});
  Information.args = {
    userData: {
      "avatar_url": "https://avatars.githubusercontent.com/u/43568019?v=4",
      "name": "Leon Nothegger",
      "company": 'Homeday',
      "location": "Berlin",
      "bio": "Hi, I'm Leon, junior frontend developer. 📚 ",
    },
    username: 'Der Profi'
}