<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
          v-if="$route.name !== 'home-page'"
          >CodeStage</router-link
        >
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleComponent"
          :class="{ 'is-active': showComponent }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showComponent }">
        <div class="navbar-end">
          <router-link to="/premium" class="navbar-item">Premium</router-link>
          <slot name="navbar-end-item">
            <!-- <div class="navbar-item"> -->
            <router-link to="/login" class="navbar-item">Log In</router-link>
            <!-- </div> -->
          </slot>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { toggleInstance } from "@/shared/mixins/toggleInstance";

export default {
  mixins: [toggleInstance]
};
</script>

<style scoped>
a:hover {
  color: #66d8cd;
}
</style>
