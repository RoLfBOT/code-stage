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
            <div class="level-left">
              <router-link
                :to="{ name: 'saved', params: { id: savedItem.codeId } }"
                class="level-item"
              >
                <span class="icon is-small has-text-info">
                  <i class="fa fa-pencil"></i>
                </span>
              </router-link>
              <div class="level-item">
                <span
                  class="icon is-small has-text-danger"
                  @click="$emit('delete-item', index)"
                >
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
