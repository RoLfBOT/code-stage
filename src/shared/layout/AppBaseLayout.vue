<template>
  <div class="app-content">
    <v-navbar class="navbar-bg-dark">
      <template v-slot:navbar-end-item>
        <router-link class="navbar-item" to="/playground/all">
          Playground
        </router-link>
        <v-user-dropdown></v-user-dropdown>
      </template>
    </v-navbar>
    <slot name="app-main"></slot>
    <slot name="app-footer"></slot>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar";
import AppUserDropdown from "../components/AppUserDropdown";

export default {
  name: "base-layout",
  components: {
    "v-navbar": AppNavbar,
    "v-user-dropdown": AppUserDropdown
  }
};
</script>

<style scoped>
.app-content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.navbar-bg-dark {
  background-color: #1e1e1e;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.25);
}
</style>
