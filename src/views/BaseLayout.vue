<template>
  <div>
    <UserNavbar></UserNavbar>
    <router-view></router-view>
  </div>
</template>

<script>
import UserNavbar from "@/components/UserNavbar.vue";

export default {
  name: "base_layout",
  components: {
    UserNavbar
  }
};
</script>
