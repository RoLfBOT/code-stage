<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <slot name="footer-content">
        <p>
          <span class="icon"><i class="fa fa-copyright"></i></span>Copyright
          CodeStage Inc.
        </p>
      </slot>
    </div>
  </footer>
</template>

<style scoped>
.content {
  color: rgba(255, 255, 255, 0.87);
}
</style>
