<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">CodeSmash</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    onClick: Function
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1e1e1e;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar-item .icon {
  cursor: pointer;
}
</style>
