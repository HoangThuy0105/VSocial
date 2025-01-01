<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div :class="[
      'sidebar',
      isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark border',
      'p-3',
      'frame'
    ]">
      <div class="logo mb-4">
        <!-- <img src="../../assets/img/logo.png" alt="Logo" /> -->
        <img src="https://res.cloudinary.com/vsocial/image/upload/v1735717354/logo_hgvb3e.png" alt="avatar"
          style="margin-right: 16px; width: 50px; height: 50px;" />
        <h2>VSocial</h2>
      </div>
      <div class="d-flex">
        <input type="text" :class="[
          'form-control',
          'w-2',
          'mb-3',
          isDarkMode
            ? 'bg-dark text-white border border-secondary'
            : 'bg-light border',
        ]" v-model="keyword" placeholder="Tìm kiếm..." @keydown.enter="handleSearch()" />
      </div>

      <ul class="nav flex-column">
        <li class="nav-item d-flex align-items-center hover">
          <i class="fa-solid fa-house"></i>
          <a href="#" class="nav-link" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Trang chủ</a>
        </li>

        <li class="nav-item d-flex align-items-center hover">
          <i class="fa-solid fa-person-military-to-person"></i>
          <a href="/friend" class="nav-link" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Bạn bè</a>
        </li>

        <!-- <li class="nav-item d-flex align-items-center hover">
          <i class="fa-solid fa-bag-shopping"></i>
          <a href="#" class="nav-link" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Marketplace</a>
        </li> -->

        <li class="nav-item d-flex align-items-center hover">
          <i class="fa-solid fa-calendar-days"></i>
          <a href="#" class="nav-link" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Sự kiện</a>
        </li>
      </ul>


      <hr class="custom-hr" />

      <div class="my-community mt-4">
        <h6 :class="isDarkMode ? 'text-white' : 'text-dark'">Nhóm</h6>
        <ul class="list-group">
          <ul class="list-group">
            <li class="list-group-item border-0" :class="isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'">
              <!-- <img :src="sidebar.img" alt="img" class="img-user" /> -->
              UI/UX Designer
            </li>
          </ul>

          <li class="list-group-item border-0" :class="isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'">
            Frontend Developer
          </li>
        </ul>
      </div>

      <hr class="custom-hr" />

      <div class="upcoming-events mt-4">
        <h6 :class="isDarkMode ? 'text-white' : 'text-dark'">Sự kiện sắp tới</h6>
        <ul class="list-group">
          <li class="list-group-item border-0" :class="isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'">
            Product Designer Meetup
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import { searchUsers } from "@/service/userService"

export default {
  data() {
    return {
      keyword: "",
      sidebar: [
        {
          name: "Ridwan Beler",
          img: "https://photo.znews.vn/w660/Uploaded/ygtmvd/2024_01_09/DSC_8457.jpg",
        },
        {
          name: "Maria Galau",
          img: "https://photo.znews.vn/w660/Uploaded/ygtmvd/2024_01_09/DSC_8457.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
    ...mapGetters('auth', ['getAccountId']),
  },
  methods: {
    // async handleSearch() {
    //   const accountId = this.getAccountId
    //   const response = await searchUsers({ accountId, keyword: this.keyword })
    //   if (response && response.status === 200) {
    //     console.log(response.data.result)
    //     this.$store.commit('user/setResultSearchUser', response.data.result);
    //     this.$router.push('/search-results');
    //   } else {
    //     console.log('Thất bại, hãy thử lại')
    //   }
    // },
    handleSearch() {
      if (!this.keyword == "") {
        this.$router.push({
          name: 'search-results',
          query: { keyword: this.keyword }
        });
      }
      // console.log("render ")
      this.keyword = "";
    }
  }
};
</script>

<style src="../../assets/css/style.css"></style>
