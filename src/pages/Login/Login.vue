<template>
  <v-hero class="is-fullheight">
    <template v-slot:hero-content>
      <div class="columns is-vcentered">
        <div class="column is-one-third is-offset-one-third">
          <LoginCard></LoginCard>
        </div>
      </div>
    </template>
  </v-hero>
</template>

<script>
import AppHero from "@/shared/components/AppHero.vue";
import LoginCard from "./components/LoginCard.vue";

export default {
  name: "login-page",
  components: {
    "v-hero": AppHero,
    LoginCard
  }
};
</script>
