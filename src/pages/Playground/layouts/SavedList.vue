<template>
  <div class="container">
    <div class="columns is-multiline">
      <v-saved-card
        v-for="(savedItem, index) in savedList"
        :key="savedItem.codeId"
        :savedItem="savedItem"
        :index="index"
        @delete-item="deleteItem"
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
  methods: {
    deleteItem: function(index) {
      this.$store.dispatch("plg/DeleteCode", index);
    }
  },
  mounted() {
    if (!this.saveList) {
      this.$store.dispatch("plg/GetAllFromServer");
    }
  }
};
</script>
