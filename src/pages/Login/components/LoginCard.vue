<template>
  <div class="card">
    <div class="card-content">
      <p class="title has-text-centered is-size-1">Login</p>

      <form @submit.prevent="login">
        <div class="field">
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="email"
              v-model.lazy="$v.formData.email.$model"
            />
          </div>
          <p class="help is-danger" v-if="!$v.formData.email.required">
            This is a required field
          </p>
          <p class="help is-danger" v-if="!$v.formData.email.email">
            Please enter a valid email
          </p>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control is-expanded">
                  <input
                    class="input"
                    :type="passwordType"
                    placeholder="Password"
                    v-model="$v.formData.password.$model"
                  />
                </p>
                <p class="control">
                  <a
                    class="button is-primary"
                    @click="togglePasswordVisibility"
                  >
                    <span class="icon">
                      <i
                        class="fa"
                        :class="{
                          'fa-eye': showPassword,
                          'fa-eye-slash': !showPassword
                        }"
                      ></i>
                    </span>
                  </a>
                </p>
              </div>
              <p class="help is-danger" v-if="!$v.formData.password.required">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <p class="control">
            <button
              class="button is-fullwidth is-rounded is-primary"
              type="submit"
            >
              Login
            </button>
            <router-link class="help" to="/auth/reset"
              >Forgot Password?</router-link
            >
          </p>
        </div>
      </form>

      <div class="divider" data-content="Connect With"></div>

      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-one-third has-text-right">
            <span class="icon is-size-1 has-text-white">
              <i class="fa fa-google" aria-hidden="true"></i>
            </span>
          </div>

          <div class="column is-one-third has-text-centered">
            <span class="icon is-size-1 has-text-white">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </span>
          </div>

          <div class="column is-one-third has-text-left">
            <span class="icon is-size-1 has-text-white">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column has-text-centered">
          <p class="content footer-line">
            Do not have an account?
            <router-link to="/register"><strong>Sign Up</strong></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login-card",
  data: function() {
    return {
      showPassword: false,
      passwordType: "password",
      formData: {
        email: "",
        password: ""
      }
    };
  },

  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },

  methods: {
    togglePasswordVisibility: function() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
        this.showPassword = true;
      } else {
        this.passwordType = "password";
        this.showPassword = false;
      }
    },
    login: function() {
      this.$store
        .dispatch("user/LOGIN", this.formData)
        .then(() => {
          this.$router.push({ name: "all" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 1.25rem;
}

.title {
  color: rgba(255, 255, 255, 0.87);
}

.divider {
  display: block;
  position: relative;
  border-top: 0.1rem solid #66d8cd;
  height: 0.1rem;
  margin: 2rem 0;
  text-align: center;
}

.divider[data-content]::after {
  background: #191919;
  color: rgba(255, 255, 255, 0.87);
  content: attr(data-content);
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  -webkit-transform: translateY(-1.1rem);
  -ms-transform: translateY(-1.1rem);
  transform: translateY(-1.1rem);
  text-align: center;
}

.card {
  background-color: #191919;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.input {
  background-color: #252525;
  color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: transparent;
}

::placeholder {
  color: #737373;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #737373;
}

::-ms-input-placeholder {
  color: #737373;
}

.footer-line {
  color: rgba(255, 255, 255, 0.6);
}

a {
  color: rgba(255, 255, 255, 0.6);
}
</style>
