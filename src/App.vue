<template>
  <div id="app" class="py-4">
  <!--
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./styles.scss";
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap');

h2 {
  font-size: 3rem;
}
#app {
  font-family: sans-serif;
  color: $coffee;
}

#nav {
  padding: 30px;
}
</style>
