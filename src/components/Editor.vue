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
      fontSize: 16,
      maxLines: 25,
      minLines: 25
    });
    this.editor.setValue("#include<iostream>\nusing namespace std;", 1);
  }
};
</script>
