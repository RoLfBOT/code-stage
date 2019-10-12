<template>
  <div class="container">
    <div class="columns">
      <div class="column is-fullwidth">
        <v-editor-card></v-editor-card>
      </div>
    </div>
    <div class="columns">
      <div class="column is-5">
        <v-stdin-card></v-stdin-card>
      </div>
      <div class="column is-7">
        <v-output-card></v-output-card>
      </div>
    </div>
  </div>
</template>

<script>
import EditorCard from "../components/EditorCard";
import OutputCard from "../components/OutputCard";
import StdinCard from "../components/StdinCard";

export default {
  name: "playground-editor",
  components: {
    "v-editor-card": EditorCard,
    "v-output-card": OutputCard,
    "v-stdin-card": StdinCard
  }
};
</script>
