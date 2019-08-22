<template>
  <div id="editor"></div>
</template>

<script>
import * as Ace from "ace-builds";
import "ace-builds/webpack-resolver";

export default {
  name: "editor",
  data: function() {
    return {
      editor: undefined
    };
  },

  mounted() {
    this.editor = Ace.edit("editor", {
      mode: "ace/mode/c_cpp",
      theme: "ace/theme/monokai",
      fontSize: 16
    });
    this.editor.setValue("#include<iostream>\nusing namespace std;", 1);
  }
};
</script>

<style scoped>
#editor {
  min-height: 65vh;
  height: 100%;
}
</style>
