<template>
  <div class="column is-4 is-offset-4">
    <div class="card">
      <div class="card-content">
        <p class="title has-text-centered is-size-1">Sign Up</p>
        <form @submit.prevent="register">
          <div class="field">
            <p class="control is-expanded">
              <input
                type="text"
                class="input"
                placeholder="Name"
                v-model.lazy="$v.formData.name.$model"
              />
            </p>
            <p class="help is-danger" v-if="!$v.formData.name.required">
              This field is required
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input
                type="email"
                class="input"
                placeholder="Email"
                v-model.lazy="$v.formData.email.$model"
              />
            </p>
            <p class="help is-danger" v-if="!$v.formData.email.email">
              Please enter a valid email
            </p>
            <p class="help is-danger" v-if="!$v.formData.email.required">
              This field is required
            </p>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select
                  name="user-role"
                  id=""
                  v-model.lazy="$v.formData.role.$model"
                >
                  <option value="" disabled selected>Role</option>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  <option value="organisation">Organisation</option>
                </select>
              </div>
            </div>
            <p class="help is-danger" v-if="!$v.formData.role.required">
              This field is required
            </p>
          </div>

          <div class="field">
            <p class="control is-expanded">
              <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="$v.formData.password.$model"
              />
            </p>
            <p class="help is-danger" v-if="!$v.formData.password.required">
              This field is required
            </p>
            <p class="help is-danger" v-if="!$v.formData.password.minLength">
              Password must be min.
              {{ $v.formData.password.$params.minLength.min }} characters
            </p>
          </div>

          <div class="field">
            <p class="control">
              <button
                class="button is-rounded is-fullwidth is-primary"
                type="submit"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>

        <div class="divider" data-content="Sign Up With"></div>

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
              Already have an account?
              <router-link :to="{ name: 'login' }"
                ><strong>Login</strong></router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "signup-card",
  data: function() {
    return {
      formData: {
        name: "",
        email: "",
        role: "",
        password: ""
      },
      formEmpty: true,
      errors: false
    };
  },
  validations: {
    formData: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      role: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    register: function() {
      this.formEmpty = !this.$v.formData.$anyDirty;
      this.errors = this.$v.formData.$anyError;

      if (!this.formEmpty && !this.errors) {
        this.$store.dispatch("user/Register", this.formData).then(() => {
          this.$router.push("/playground");
        });
      }
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 1.25rem;
}
option {
  background-color: #252525;
  color: rgba(255, 255, 255, 0.87);
  border-color: transparent;
}

select {
  background-color: #252525;
  border-color: transparent;
  color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

select option:disabled {
  color: #737373;
}

.input {
  background-color: #252525;
  color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: transparent;
}

.card {
  background-color: #191919;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.title {
  color: rgba(255, 255, 255, 0.87);
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

.footer-line {
  color: rgba(255, 255, 255, 0.6);
}

a {
  color: rgba(255, 255, 255, 0.6);
}
</style>
