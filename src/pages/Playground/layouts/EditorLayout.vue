<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full">
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
import EditorCard from "@/shared/components/editor/AppEditorCard";
import OutputCard from "@/shared/components/editor/AppOutputCard";
import StdinCard from "@/shared/components/editor/AppStdinCard";

export default {
  name: "playground-editor",
  components: {
    "v-editor-card": EditorCard,
    "v-output-card": OutputCard,
    "v-stdin-card": StdinCard
  }
};
</script>
