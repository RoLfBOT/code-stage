<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">CodeSmash</router-link>
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
          <div class="navbar-item">
            <router-link to="/premium" class="button is-rounded"
              >Premium</router-link
            >
          </div>
          <div class="navbar-item">
            <slot name="navbar-end-item">
              <router-link to="/login" class="button is-rounded"
                >Log In</router-link
              >
            </slot>
          </div>
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
.button {
  background-color: transparent;
  color: #66d8cd;
  border-color: transparent;
}

.button:hover,
.button.is-hovered {
  background-color: #66d8cd;
  color: #000;
  border-color: transparent;
}

a:hover {
  color: #66d8cd;
}
</style>
