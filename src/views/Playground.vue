<template>
  <main class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-7">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Untitled&nbsp;<span class="icon"
                  ><i class="fa fa-pencil"></i
                ></span>
              </p>
              <div class="card-header-icon">
                <span class="card-header-icon icon">
                  <i class="fa fa-cog"></i>
                </span>
              </div>
            </header>
            <div class="card-content editor-container">
              <Editor></Editor>
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <div class="buttons">
                  <button class="button is-primary is-rounded">Run Code</button>
                  <button class="button is-info is-rounded">Save</button>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div class="column is-5">
          <div class="card">
            <div class="card-content">
              <p class="title">Output</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Editor from "@/components/Editor.vue";

export default {
  name: "playground",
  components: {
    Editor
  }
};
</script>

<style scoped>
.section {
  min-height: calc(100vh - 3.25rem);
}

.card {
  background-color: #1e1e1e;
  border-radius: 10px;
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

.card-footer-item:last-child {
  justify-content: right;
}

.card-footer-item:only-child {
  justify-content: left;
}

.card-footer-item:not(:last-child) {
  border-right: none;
}

option {
  background-color: #bb86fc;
  color: #000;
  border-color: transparent;
}

select {
  background-color: #bb86fc;
  border-color: transparent;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.editor-container {
  padding: 0;
}
</style>
