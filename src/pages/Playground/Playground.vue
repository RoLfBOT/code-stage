<template>
  <v-base-layout>
    <template v-slot:app-main>
      <main class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <v-editor-card></v-editor-card>
            </div>
            <div class="column is-5">
              <v-output-card></v-output-card>
            </div>
          </div>
          <div class="columns">
            <div class="column is-fullwidth">
              <v-stdin-card></v-stdin-card>
            </div>
          </div>
        </div>
      </main>
    </template>
    <template v-slot:app-footer>
      <v-footer></v-footer>
    </template>
  </v-base-layout>
</template>

<script>
import AppBaseLayout from "@/shared/layout/AppBaseLayout.vue";
import AppFooter from "@/shared/components/AppFooter.vue";
import EditorCard from "./components/EditorCard";
import OutputCard from "./components/OutputCard";
import StdinCard from "./components/StdinCard";

export default {
  name: "playground-page",
  components: {
    "v-base-layout": AppBaseLayout,
    "v-footer": AppFooter,
    "v-editor-card": EditorCard,
    "v-output-card": OutputCard,
    "v-stdin-card": StdinCard
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "route/ROUTE_CHANGED":
          if (state.route.name === "saved") {
            this.$store.dispatch("plg/LoadFromServer");
          } else if (state.route.name === "new") {
            this.$store.commit("plg/@RESET");
          }
          break;
      }
    });
  }
};
</script>

<style scoped></style>
