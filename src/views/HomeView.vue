<template>
  <div class="justify-start">
    <navbar-vue></navbar-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import navbarVue from '@/components/navbar.vue';
export default {
  name: "HomeView",
  components: {
    navbarVue
  },
};
</script>
