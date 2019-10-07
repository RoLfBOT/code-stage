<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
select,
select:focus,
textarea,
textarea:focus input,
input:focus {
  outline: none;
  -webkit-appearance: none;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

button::-moz-focus-inner {
  border: 0;
}
</style>
