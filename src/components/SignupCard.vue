<template>
  <div class="card">
    <div class="card-content">
      <p class="title has-text-centered is-size-1">Sign Up</p>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input type="text" class="input" placeholder="First Name" />
            </p>
            <p class="help">This field is required</p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input type="text" class="input" placeholder="Last Name" />
            </p>
            <p class="help">This field is required</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input type="email" class="input" placeholder="Email" />
            </p>
            <p class="help">The value is not a valid email</p>
          </div>
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">+91</a>
              </p>
              <p class="control is-expanded">
                <input type="tel" class="input" placeholder="Mobile Number" />
              </p>
            </div>
            <p class="help">Please enter valid phone number</p>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="user-role" id="">
                  <option value="" disabled selected>Role</option>
                  <option value="student">Student</option>
                  <option value="student">Mentor</option>
                  <option value="student">Organisation</option>
                </select>
              </div>
            </div>
            <p class="help">Required</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input type="password" class="input" placeholder="Password" />
            </p>
            <p class="help">The password doesn't meet requirements</p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input
                type="password"
                class="input"
                placeholder="Confirm Password"
              />
            </p>
            <p class="help">Passwords do not match</p>
          </div>
        </div>
      </div>

      <div class="field">
        <p class="control">
          <button class="button is-rounded is-fullwidth" type="submit">
            Sign Up
          </button>
        </p>
      </div>

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
            <router-link to="/auth/login"><strong>Login</strong></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
option {
  background-color: #454545;
  color: #fff;
  border-color: transparent;
}

select {
  background-color: #454545;
  border-color: transparent;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

select option:disabled {
  color: #737373;
}

.button {
  background-color: #0bfdd1;
  color: #000;
  border-color: transparent;
}

.input {
  background-color: #454545;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: transparent;
}

.card {
  background-color: #353535;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.title {
  color: #fff;
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
  border-top: 0.1rem solid #0bfdd1;
  height: 0.1rem;
  margin: 2rem 0;
  text-align: center;
}

.divider[data-content]::after {
  background: #353535;
  color: #fff;
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
  color: #fff;
}

a {
  color: #fff;
}
</style>
