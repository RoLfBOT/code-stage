<template>
  <div
    class="navbar-item has-dropdown"
    :class="{ 'is-active': showComponent }"
    v-click-outside="closeDropdown"
    @click="toggleComponent"
  >
    <a class="navbar-link is-arrowless">
      <span class="icon">
        <i class="fa fa-user-circle fa-lg"></i>
      </span>
    </a>
    <div class="navbar-dropdown is-right is-boxed">
      <p class="navbar-item">Signed in as {{ loggedInAs }}</p>
      <hr class="navbar-divider" />
      <button class="navbar-item button">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { toggleInstance } from "@/shared/mixins/toggleInstance";
import { clickOutside } from "@/shared/directives/clickOutside";

export default {
  mixins: [toggleInstance],
  data: function() {
    return {
      loggedInAs: this.$store.getters["user/NAME"].split(" ")[0]
    };
  },
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

<style scoped>
.icon {
  color: rgba(255, 255, 255, 0.87);
}

.navbar-item.has-dropdown:hover .navbar-link,
.navbar-item.has-dropdown.is-active .navbar-link {
  background-color: transparent;
}

.navbar-dropdown {
  background-color: #252525;
}

@media screen and (max-width: 1024px) {
  .navbar-dropdown {
    background-color: #151515;
  }
}

.navbar-dropdown .navbar-item {
  color: rgba(255, 255, 255, 0.87);
}

.navbar-divider {
  background-color: rgba(255, 255, 255, 0.05);
}

.navbar-dropdown .button {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.87);
  border-color: transparent;
  font-size: 0.875rem;
}
</style>
