<template>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ savedItem.title }}</strong
              ><small> CodeID: {{ savedItem.codeId }}</small>
              <br />
              Language: {{ savedItem.language }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level left">
              <router-link
                :to="{ name: 'saved', params: { id: savedItem.codeId } }"
                class="level-item"
              >
                <span class="icon is-small">
                  <i class="fa fa-pencil"></i>
                </span>
              </router-link>
              <div class="level-item">
                <span class="icon is-small">
                  <i class="fa fa-trash-o"></i>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    savedItem: Object
  }
};
</script>
