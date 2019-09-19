<template>
  <div class="container">
    <div class="tile is-ancestor">
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
.container {
  flex-wrap: wrap;
}
</style>
