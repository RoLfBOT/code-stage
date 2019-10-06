<template>
  <div>
    <v-navbar></v-navbar>
    <v-hero class="is-fullheight-with-navbar">
      <template v-slot:hero-content>
        <div class="columns is-vcentered">
          <div class="column is-half has-text-centered-mobile">
            <p class="title has-text-primary">CodeStage</p>
            <p class="subtitle has-text-white">
              Modern programming experience for developers, data scientists and
              competitive coders.
            </p>
            <router-link class="button is-rounded is-primary" to="/register"
              >Create Account</router-link
            >
          </div>
          <div class="column is-half">
            <div class="container">
              <figure class="image">
                <img src="@/assets/desk.svg" alt="Code Desk" />
              </figure>
            </div>
          </div>
        </div>
      </template>
    </v-hero>
  </div>
</template>

<script>
import AppNavbar from "@/shared/components/AppNavbar.vue";
import AppHero from "@/shared/layout/AppHero.vue";

export default {
  name: "Home",
  components: {
    "v-navbar": AppNavbar,
    "v-hero": AppHero
  }
};
</script>

<style scoped>
img {
  max-width: 450px;
  max-height: 450px;
  margin: 0 auto;
}
</style>
