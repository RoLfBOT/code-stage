<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title" v-if="!editTitle">
          <span class="icon">
            <figure class="image is-24x24">
              <img :src="getImgSrc(mode)" alt="" />
            </figure> </span
          >&nbsp; {{ title }}&nbsp;<span
            class="icon edit-title"
            @click="editTitle = true"
            ><i class="fa fa-pencil"></i
          ></span>
        </p>
        <p class="card-header-title" v-if="editTitle">
          <input
            class="input"
            type="text"
            v-model="title"
            maxlength="20"
            @keydown.enter="editTitle = false"
          />
          &nbsp;<span class="icon edit-title" @click="editTitle = false"
            ><i class="fa fa-floppy-o"></i
          ></span>
        </p>
        <div
          class="card-header-icon tooltip is-tooltip-bottom is-tooltip-left-mobile"
          data-tooltip="Editor Settings"
          @click="show"
        >
          <span class="card-header-icon icon">
            <i class="fa fa-cog"></i>
          </span>
        </div>
      </header>
      <div class="card-content editor-container">
        <v-editor v-model="localSource"></v-editor>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <div class="buttons">
            <button
              class="button is-primary is-rounded"
              @click="run"
              :disabled="runningCode"
            >
              <span class="icon"><i class="fa fa-play"></i></span>
              <span>{{ runningCode ? "Running" : "Run Code" }}</span>
            </button>
            <button class="button is-info is-rounded" @click="save">
              <span class="icon"><i class="fa fa-floppy-o"></i></span>
              <span>Save</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
    <v-settings
      :class="{ 'is-active': showSettings }"
      @close-modal="closeSettings"
    ></v-settings>
  </div>
</template>

<script>
import AppEditor from "./AppEditor";
import EditorSettingsModal from "./AppEditorSettingsModal";
import { mapState } from "vuex";

export default {
  name: "editor-card",

  components: {
    "v-editor": AppEditor,
    "v-settings": EditorSettingsModal
  },

  data: function() {
    return {
      showSettings: false,
      editTitle: false,
      runningCode: false
    };
  },

  computed: {
    ...mapState("editor", ["mode"]),
    title: {
      get() {
        return this.$store.getters["plg/TITLE"];
      },
      set(value) {
        this.$store.commit("plg/@SET_TITLE", value);
      }
    },
    localSource: {
      get() {
        return this.$store.getters["editor/SOURCE"];
      },
      set(value) {
        this.$store.commit("editor/@SET_SOURCE", value);
      }
    }
  },

  methods: {
    getImgSrc(language) {
      return require(`@/assets/images/${language}.svg`);
    },

    save: function() {
      if (this.localSource) {
        this.$store.commit("editor/@SET_SOURCE", this.localSource);
      }
      this.$store.dispatch("plg/SaveToServer").then(() => {
        this.$router.push({
          name: "saved",
          params: { id: this.$store.getters["plg/ID"] }
        });
      });
    },

    run: function() {
      if (this.localSource) {
        this.$store.commit("editor/@SET_SOURCE", this.localSource);
      }
      this.runningCode = true;
      this.$store.dispatch("editor/RunCode").then(() => {
        this.runningCode = false;
      });
    },

    show: function() {
      let html = document.documentElement;
      html.classList.add("is-clipped");
      document.addEventListener("keydown", this.escHandler);
      this.showSettings = true;
    },

    closeSettings: function() {
      let html = document.documentElement;
      html.classList.remove("is-clipped");
      document.removeEventListener("keydown", this.escHandler);
      this.showSettings = false;
    },

    escHandler: function(e) {
      if (e.key === "Escape") {
        this.closeSettings();
      }
    }
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

input,
input:focus {
  outline: none;
  -webkit-appearance: none;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #2f2f2f;
  max-width: 50%;
  color: rgba(255, 255, 255, 255);
}

.card-footer {
  border-top: none;
}

.card-footer-item:first-child {
  justify-content: left;
}
</style>
