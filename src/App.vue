<template>
  <div id="app">
  <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>