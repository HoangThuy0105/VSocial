<template>
 <div :class="[isDarkMode ? 'friends-list bg-dark text-white border border-dark' : 'friends-list bg-light text-dark border ', 'p-4 mb-4 content-border']">

    <h6>My friends</h6>
    <ul class="list-group">
      <li v-for="friend in friends" :key="friend.name" :class="['list-group-item', isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark', 'd-flex align-items-start', 'border-0']">
        <img :src="friend.avatar" alt="Avatar" class="img-user" />
        <div class="ms-3">
          <span class="friend-name">{{ friend.name }}</span>
          <span class="friend-status small">{{ friend.status }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "FriendsList",
  data() {
    return {
      friends: [
        {
          name: 'Ridwan Beler',
          status: 'Last active recently',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Maria Galau',
          status: 'Last active today',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Ridwan Beler',
          status: 'Last active recently',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Maria Galau',
          status: 'Last active today',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Maria Galau',
          status: 'Last active today',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Maria Galau',
          status: 'Last active today',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
        {
          name: 'Maria Galau',
          status: 'Last active today',
          avatar: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg',
        },
      ],
    };
  },
  computed: {
    ...mapState("mode",{
      isDarkMode: state => state.darkMode, 
    }),
  },
};
</script>

<style src="../../assets/css/style.css"></style>
