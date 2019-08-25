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
    ...mapState("editor", ["mode", "theme", "fontSize", "tabs"])
  },

  watch: {
    mode(newMode) {
      this.editor.session.setMode("ace/mode/" + newMode);
    },
    theme(newTheme) {
      this.editor.setTheme("ace/theme/" + newTheme);
    },
    fontSize(newFontSize) {
      this.editor.setFontSize(newFontSize);
    },
    tabs(newTabs) {
      this.editor.session.setTabSize(newTabs);
    }
  },

  mounted() {
    this.editor = Ace.edit("editor", {
      mode: "ace/mode/c_cpp",
      theme: "ace/theme/monokai",
      fontSize: 16
    });
    this.editor.setValue("#include<bits/stdc++.h>\nusing namspace std;", 1);
  }
};
</script>

<style scoped>
#editor {
  min-height: 65vh;
  height: 100%;
}
</style>
