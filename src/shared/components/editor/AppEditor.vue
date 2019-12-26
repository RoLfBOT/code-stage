<template>
  <div id="editor"></div>
</template>

<script>
import * as Ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";

import { mapState } from "vuex";

export default {
  name: "editor",
  props: {
    value: String
  },

  data: function() {
    return {
      editor: null,
      content: ""
    };
  },

  computed: {
    ...mapState("editor", ["mode", "theme", "fontSize", "tabs"])
  },

  watch: {
    value: function(val) {
      if (this.content !== val) {
        this.editor.session.setValue(val, 1);
        this.content = val;
      }
    }
  },

  mounted() {
    Ace.require("ace/ext/language_tools");
    this.editor = Ace.edit("editor", {
      mode: "ace/mode/" + this.mode,
      theme: "ace/theme/" + this.theme,
      fontSize: this.fontSize,
      showPrintMargin: false,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });

    if (this.value) {
      this.editor.setValue(this.value, 1);
      this.content = this.value;
    }

    this.editor.on("input", () => {
      if (!this.editor.session.getUndoManager().isClean()) {
        this.$emit("input", this.editor.getValue());
        this.content = this.editor.getValue();
      }
    });

    this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case "editor/@SET_MODE":
          this.editor.session.setMode("ace/mode/" + this.mode);
          break;
        case "editor/@SET_THEME":
          this.editor.setTheme("ace/theme/" + this.theme);
          break;
        case "editor/@SET_FONTSIZE":
          this.editor.setFontSize(this.fontSize);
          break;
        case "editor/@SET_TABS":
          this.editor.session.setTabSize(this.tabs);
          break;
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
    this.editor.container.remove();
  }
};
</script>

<style scoped>
#editor {
  min-height: 65vh;
  height: 100%;
}
</style>
