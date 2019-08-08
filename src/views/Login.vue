<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-one-third is-offset-one-third">
            <LoginCard></LoginCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "login",
  components: {
    LoginCard
  }
};
</script>

<style scoped>
/* .container {
    display: flex;
    align-items: center;
} */
</style>
