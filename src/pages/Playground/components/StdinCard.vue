<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Stdin
      </p>
      <div
        class="card-header-icon tooltip is-tooltip-bottom is-tooltip-left-mobile"
        data-tooltip="Copy"
        v-clipboard:copy="stdin"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        <span class="card-header-icon icon">
          <i class="fa fa-clipboard"></i>
        </span>
      </div>
    </header>
    <div class="card-content stdin-container">
      <textarea
        class="textarea is-black"
        rows="5"
        placeholder="Standard Input"
        v-model.lazy="stdin"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { copyHandlers } from "@/shared/mixins/copyHandlers";

export default {
  name: "stdin-card",
  mixins: [copyHandlers],
  computed: {
    stdin: {
      get() {
        return this.$store.getters["plg/STDIN"];
      },
      set(value) {
        this.$store.commit("plg/@SET_STDIN", value);
      }
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
  background-color: #1e1e1e;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.card-header-title {
  color: rgba(255, 255, 255, 0.87);
}

.card-header {
  color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.8);
  z-index: -1;
}

.stdin-container {
  padding: 0;
}

.textarea {
  resize: none;
  border-radius: 0;
  background-color: #252525;
  border: none;
  color: rgba(255, 255, 255, 0.87);
}

::placeholder {
  color: #737373;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #737373;
}

::-ms-input-placeholder {
  color: #737373;
}
</style>
