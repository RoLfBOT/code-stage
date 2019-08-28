<template>
  <div class="modal">
    <div class="modal-background" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Editor Settings</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('close-modal')"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="columns is-mobile">
          <div class="column is-two-thirds">
            <p class="title is-6">Editor Mode</p>
            <p class="subtitle is-7">
              Select preferred language to change editor mode
            </p>
          </div>
          <div class="column">
            <div class="select is-pulled-right is-fullwidth">
              <select v-model="selectMode">
                <option
                  v-for="mode in modes"
                  :value="mode.modeName"
                  :key="mode.modeName"
                  >{{ mode.modeText }}</option
                >
              </select>
            </div>
          </div>
        </div>

        <div class="columns is-mobile">
          <div class="column is-two-thirds">
            <p class="title is-6">Editor Theme</p>
            <p class="subtitle is-7">
              Customize the editor theme and syntax highlighting
            </p>
          </div>
          <div class="column">
            <div class="select is-pulled-right is-fullwidth">
              <select v-model="selectTheme">
                <option
                  v-for="theme in themes"
                  :value="theme.themeName"
                  :key="theme.themeName"
                  >{{ theme.themeText }}</option
                >
              </select>
            </div>
          </div>
        </div>

        <div class="columns is-mobile">
          <div class="column is-two-thirds">
            <p class="title is-6">Font Size</p>
            <p class="subtitle is-7">Change font size of editor text</p>
          </div>
          <div class="column">
            <div class="select is-pulled-right is-fullwidth">
              <select v-model="selectFontSize">
                <option
                  v-for="(fontSize, index) in fontSizes"
                  :value="fontSize"
                  :key="index"
                  >{{ fontSize + "px" }}</option
                >
              </select>
            </div>
          </div>
        </div>

        <div class="columns is-mobile">
          <div class="column is-two-thirds">
            <p class="title is-6">Tabs</p>
            <p class="subtitle is-7">
              Change the number of spaces for tab character
            </p>
          </div>
          <div class="column">
            <div class="select is-pulled-right is-fullwidth">
              <select v-model="selectTabs">
                <option
                  v-for="(tabSize, index) in tabSizes"
                  :value="tabSize"
                  :key="index"
                  >{{ tabSize }}</option
                >
              </select>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot"></footer>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {
  Themes,
  Modes,
  FontSizes,
  TabSizes
} from "../../../utils/appConstants";

export default {
  name: "editor-settings-modal",
  data: function() {
    return {
      selectMode: "c_cpp",
      selectTheme: "monokai",
      selectFontSize: 16,
      selectTabs: 4,
      themes: Themes,
      modes: Modes,
      fontSizes: FontSizes,
      tabSizes: TabSizes
    };
  },

  methods: {
    ...mapMutations("editor", {
      setMode: "@SET_MODE",
      setTheme: "@SET_THEME",
      setFontSize: "@SET_FONTSIZE",
      setTabs: "@SET_TABS"
    })
  },

  watch: {
    selectMode(newMode) {
      this.setMode(newMode);
    },
    selectTheme(newTheme) {
      this.setTheme(newTheme);
    },
    selectFontSize(newFontSize) {
      this.setFontSize(newFontSize);
    },
    selectTabs(newTabs) {
      this.setTabs(newTabs);
    }
  }
};
</script>

<style scoped>
.modal-card-head {
  background-color: #1e1e1e;
  border-bottom: none;
}

.modal-card-title {
  color: rgba(255, 255, 255, 0.87);
}

.modal-card-body {
  background-color: #252525;
}

.title {
  color: rgba(255, 255, 255, 0.87);
}

.subtitle {
  color: rgba(255, 255, 255, 0.57);
}

option {
  background-color: #252525;
  color: rgba(255, 255, 255, 0.87);
  border-color: transparent;
}

select {
  background-color: #2f2f2f;
  border-color: transparent;
  color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

select:hover {
  border-color: #66d8cd;
}

.modal-card-foot {
  background-color: #1e1e1e;
  border-top: none;
}
</style>
