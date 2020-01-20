<template>
  <v-hero class="is-fullheight">
    <template v-slot:hero-content>
      <div class="columns is-vcentered">
        <router-view name="authCard"></router-view>
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
