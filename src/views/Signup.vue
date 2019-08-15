<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <SignupCard></SignupCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SignupCard from "@/components/SignupCard.vue";

export default {
  name: "signup",
  components: {
    SignupCard
  }
};
</script>
