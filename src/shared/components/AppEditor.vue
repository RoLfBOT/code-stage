<template>
  <div id="editor"></div>
</template>

<script>
import * as Ace from "ace-builds";
import "ace-builds/webpack-resolver";

import { mapState } from "vuex";

export default {
  name: "editor",
  data: function() {
    return {
      editor: undefined
    };
  },

  computed: {
    ...mapState("editor", ["mode", "theme", "fontSize", "tabs"]),
    ...mapState("plg", ["source"])
  },

  mounted() {
    this.editor = Ace.edit("editor", {
      mode: "ace/mode/" + this.mode,
      theme: "ace/theme/" + this.theme,
      fontSize: this.fontSize
    });

    this.editor.on("input", () => {
      if (!this.editor.session.getUndoManager().isClean()) {
        this.$emit("code-change", this.editor.getValue());
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
        case "plg/@SET_SOURCE":
          this.editor.setValue(this.source, 1);
          this.editor.session.getUndoManager().reset();
          break;
      }
    });
  }
};
</script>

<style scoped>
#editor {
  min-height: 65vh;
  height: 100%;
}
</style>
