<template>
  <div class="column is-full">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              :src="getImgSrc(savedItem.language)"
              :alt="savedItem.language"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-5 has-text-white">{{ savedItem.title }}</p>
            <p>Editor ID: {{ savedItem.codeId }}</p>
            <p>Language: {{ savedItem.language }}</p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left"></div>
            <div class="level-right">
              <div class="level-item">
                <router-link
                  :to="{ name: 'saved', params: { id: savedItem.codeId } }"
                  class="button is-primary is-rounded"
                >
                  <span class="icon is-small">
                    <i class="fa fa-pencil"></i> </span
                  >&nbsp;Edit
                </router-link>
              </div>
              <div class="level-item">
                <button
                  class="button is-danger is-rounded"
                  @click="
                    $emit('delete-item', { index, codeId: savedItem.codeId })
                  "
                >
                  <span class="icon is-small">
                    <i class="fa fa-trash-o"></i> </span
                  >&nbsp;Delete
                </button>
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
    savedItem: Object,
    index: Number
  },
  methods: {
    getImgSrc(language) {
      return require(`@/assets/images/${language}.svg`);
    }
  }
};
</script>

<style scoped>
.box {
  color: rgba(255, 255, 255, 0.87);
  background-color: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>
