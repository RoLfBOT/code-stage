<template>
  <v-hero class="is-fullheight">
    <template v-slot:hero-content>
      <div class="columns is-vcentered">
        <transition name="auth" mode="out-in">
          <router-view
            name="authCard"
            @login="loginHandler"
            @register="registerHandler"
          ></router-view>
        </transition>
      </div>
    </template>
  </v-hero>
</template>

<script>
import AppHero from "@/shared/layout/AppHero";

export default {
  name: "login-page",
  components: {
    "v-hero": AppHero
  },
  methods: {
    loginHandler: function(formData) {
      this.$store
        .dispatch("user/Login", formData)
        .then(() => {
          this.$router.push({ name: "all" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    registerHandler: function(formData) {
      this.$store.dispatch("user/Register", formData).then(() => {
        this.$router.push("/playground");
      });
    }
  }
};
</script>

<style scoped>
.auth-enter,
.auth-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}
.auth-enter-active,
.auth-leave-active {
  transition: all 0.5s;
}
</style>
