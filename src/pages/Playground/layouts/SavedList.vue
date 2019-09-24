<template>
  <div class="container">
    <div class="masonry">
      <v-saved-card
        v-for="savedItem in savedList"
        :key="savedItem.codeId"
        :savedItem="savedItem"
      ></v-saved-card>
    </div>
  </div>
</template>

<script>
import SavedSourceCard from "../components/SavedSourceCard";
import { mapState } from "vuex";

export default {
  name: "saved-list",
  components: {
    "v-saved-card": SavedSourceCard
  },
  computed: {
    ...mapState("plg", ["savedList"])
  },
  mounted() {
    if (!this.saveList) {
      this.$store.dispatch("plg/GetAllFromServer");
    }
  }
};
</script>

<style scoped>
.masonry {
  margin: 1.5em auto;
  max-width: 100%;
  column-gap: 1.5em;
  -webkit-column-gap: 1.5em;
  column-rule: 1px solid #66d8cd;
}

@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
    -webkit-column-count: 4;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {
  .masonry {
    column-count: 3;
    -webkit-column-count: 3;
  }
}

/* @media only screen and (max-width: 768px) and (min-width: 540px) {
  .masonry {
    column-count: 2;
    -webkit-column-count: 2;
  }
} */
</style>
