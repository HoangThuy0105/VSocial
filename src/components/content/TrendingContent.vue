<template>
  <div
    :class="[
      isDarkMode
        ? 'trending bg-dark text-white border border-dark'
        : 'trending bg-light text-dark ',
      'trending bg-light text-dark border ',
      'p-4 mt-4 mb-4 content-border',
    ]"
  >
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="fs-5 mb-0">Today Trending</h6>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div class="d-flex mb-2">
      <ul class="list-group w-100">
        <li
          v-for="(item, index) in trendingItems"
          :key="index"
          :class="[
            'list-group-item',
            isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
            'd-flex justify-content-between align-items-start border-0',
          ]"
        >
          <div>
            <h6 class="mb-1">{{ item.title }}</h6>
            <small class="custom-muted">{{ item.posts }} posts today</small>
          </div>
          <span class="badge bg-secondary ms-3">{{ item.time }}</span>
        </li>
        <div class="text-center">
          <span class="text-success cursor-pointer fw-bold">See All</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TrendingContent",
  data() {
    return {
      trendingItems: [],
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },

  mounted() {
    this.fetchTrendingData();
  },
  methods: {
    
    fetchTrendingData() {
      this.trendingItems = [
        { title: "Figma maintenance", posts: 125, time: "6:10 PM" },
        { title: "New Vue.js release", posts: 97, time: "4:00 PM" },
        { title: "JavaScript Conference", posts: 210, time: "1:30 PM" },
        { title: "Blender Update", posts: 117, time: "5:00 PM" },
        { title: "Figma maintenance", posts: 125, time: "6:10 PM" },
        { title: "New Vue.js release", posts: 97, time: "4:00 PM" },
      ];
    },
  },
};
</script>

<style src="@/assets/css/style.css"></style>
