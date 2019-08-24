<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Untitled&nbsp;<span class="icon edit-title"
            ><i class="fa fa-pencil"></i
          ></span>
        </p>
        <div class="card-header-icon" @click="show">
          <span class="card-header-icon icon">
            <i class="fa fa-cog"></i>
          </span>
        </div>
      </header>
      <div class="card-content editor-container">
        <v-editor></v-editor>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <div class="buttons">
            <button class="button is-primary is-rounded">
              <span class="icon"><i class="fa fa-play"></i></span>
              <span>Run Code</span>
            </button>
            <button class="button is-info is-rounded">
              <span class="icon"><i class="fa fa-floppy-o"></i></span>
              <span>Save</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
    <v-settings
      :class="{ 'is-active': showSettings }"
      @close-modal="showSettings = false"
    ></v-settings>
  </div>
</template>

<script>
import AppEditor from "@/shared/components/AppEditor";
import EditorSettingsModal from "./EditorSettingsModal";

export default {
  name: "editor-card",
  components: {
    "v-editor": AppEditor,
    "v-settings": EditorSettingsModal
  },
  methods: {
    show: function() {
      this.showSettings = true;
    }
  },
  data: function() {
    return {
      showSettings: false
    };
  }
};
</script>

<style scoped>
.editor-container {
  padding: 0;
}

.edit-title {
  cursor: pointer;
}

.card {
  height: 100%;
  background-color: #1e1e1e;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.card-header,
.card-header-title {
  color: rgba(255, 255, 255, 0.87);
}

.card-footer {
  border-top: none;
}

.card-footer-item:first-child {
  justify-content: left;
}
</style>
