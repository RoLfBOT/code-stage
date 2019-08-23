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

export default {
  name: "playground-page",
  components: {
    "v-base-layout": AppBaseLayout,
    "v-footer": AppFooter,
    "v-editor-card": EditorCard,
    "v-output-card": OutputCard
  }
};
</script>

<style scoped>
.card-footer-item:first-child {
  justify-content: left;
}

.card-footer-item:last-child {
  justify-content: right;
}

.card-footer-item:only-child {
  justify-content: left;
}

.card-footer-item:not(:last-child) {
  border-right: none;
}

option {
  background-color: #bb86fc;
  color: #000;
  border-color: transparent;
}

select {
  background-color: #bb86fc;
  border-color: transparent;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.editor-container {
  padding: 0;
}
</style>
