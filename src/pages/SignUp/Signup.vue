<template>
  <v-hero class="is-fullheight">
    <template v-slot:hero-content>
      <div class="columns is-vcentered">
        <div class="column is-4 is-offset-4">
          <SignupCard></SignupCard>
        </div>
      </div>
    </template>
  </v-hero>
</template>

<script>
import AppHero from "@/shared/layout/AppHero.vue";
import SignupCard from "./components/SignupCard.vue";

export default {
  name: "signup-page",
  components: {
    "v-hero": AppHero,
    SignupCard
  }
};
</script>
