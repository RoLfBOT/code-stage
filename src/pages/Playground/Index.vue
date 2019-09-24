<template>
  <v-base-layout>
    <template v-slot:app-main>
      <main class="section">
        <router-view name="playground"></router-view>
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

export default {
  name: "playground-page",
  components: {
    "v-base-layout": AppBaseLayout,
    "v-footer": AppFooter
  },
  created() {
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
