<template>
  <div
    class="navbar-item has-dropdown"
    :class="{ 'is-active': showComponent }"
    v-click-outside="closeDropdown"
    @click="toggleComponent"
  >
    <a class="navbar-link is-arrowless">
      <span class="icon">
        <i class="fa fa-user-circle"></i>
      </span>
    </a>
    <div class="navbar-dropdown is-right">
      <p class="navbar-item">Signed in as Kaustabh</p>
      <p class="navbar-item">Sign Out</p>
    </div>
  </div>
</template>

<script>
import { toggleInstance } from "@/shared/mixins/toggleInstance";
import { clickOutside } from "@/shared/directives/clickOutside";

export default {
  mixins: [toggleInstance],
  methods: {
    closeDropdown: function() {
      this.showComponent = false;
    }
  },
  directives: {
    "click-outside": clickOutside
  }
};
</script>
