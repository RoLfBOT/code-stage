<template>
  <div>
    <Navbar></Navbar>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-half has-text-centered-mobile">
              <p class="title">CodeSmash</p>
              <p class="subtitle">
                CodeSmash is the modern programming experience for educators and
                competitive coders.
              </p>
              <router-link class="button is-rounded" to="/register"
                >Create Account</router-link
              >
            </div>

            <div class="column is-half">
              <div class="container">
                <figure class="image">
                  <img src="@/assets/desk.svg" alt="Code Desk" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.title {
  color: #0bfdd1;
}

.subtitle {
  color: #fff;
}

.button {
  background-color: #0bfdd1;
  color: #000;
  border-color: transparent;
}

img {
  max-width: 450px;
  max-height: 450px;
  margin: 0 auto;
}
</style>
