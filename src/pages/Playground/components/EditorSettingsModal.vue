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
                <option value="c_cpp">c/c++</option>
                <option value="java">java</option>
                <option value="python">python</option>
                <option value="javascript">javascript</option>
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
                <option value="monokai">monokai</option>
                <option value="xcode">xcode</option>
                <option value="github">github</option>
                <option value="textmate">textmate</option>
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
                <option value="12">12px</option>
                <option value="14">14px</option>
                <option value="16">16px</option>
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
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
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

export default {
  name: "editor-settings-modal",
  data: function() {
    return {
      selectMode: "c_cpp",
      selectTheme: "monokai",
      selectFontSize: 16,
      selectTabs: 4
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
