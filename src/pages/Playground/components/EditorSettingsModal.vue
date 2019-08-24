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
            <p class="title is-6">Editor Theme</p>
            <p class="subtitle is-7">
              Customize the editor theme and syntax highlighting
            </p>
          </div>
          <div class="column">
            <div class="select is-pulled-right is-fullwidth">
              <select>
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
              <select>
                <option value="12">12px</option>
                <option value="13">13px</option>
                <option value="14">14px</option>
                <option value="15">15px</option>
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
              <select>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary">Save changes</button>
      </footer>
    </div>
  </div>
</template>
