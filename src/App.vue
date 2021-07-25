<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./styles.scss";
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
@import "~bulma/sass/utilities/_all";
@import "~bulma";

h2 {
  @apply is-size-1;
  font-size: 3rem;
}
#app {
  text-align: center;
  font-family: sans-serif;
  background-color: $latte;
  color: $coffee;
}

#nav {
  padding: 30px;
}
</style>
