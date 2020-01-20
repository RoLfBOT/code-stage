<template>
  <v-hero class="is-fullheight">
    <template v-slot:hero-content>
      <div class="columns is-vcentered">
        <transition name="auth" mode="out-in">
          <router-view name="authCard"></router-view>
        </transition>
      </div>
    </template>
  </v-hero>
</template>

<script>
import AppHero from "@/shared/layout/AppHero";

export default {
  name: "login-page",
  components: {
    "v-hero": AppHero
  }
};
</script>

<style scoped>
.auth-enter,
.auth-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}
.auth-enter-active,
.auth-leave-active {
  transition: all 0.5s;
}
</style>
