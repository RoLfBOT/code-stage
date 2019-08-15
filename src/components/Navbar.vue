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
          @click="toggleMenu"
          :class="{ 'is-active': menuActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        @click="toggleMenu"
        :class="{ 'is-active': menuActive }"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/premium" class="button is-rounded"
                >Premium</router-link
              >
              <router-link to="/auth/login" class="button is-rounded"
                >Log In</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      menuActive: false
    };
  },

  methods: {
    toggleMenu: function() {
      this.menuActive = !this.menuActive;
    }
  }
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
