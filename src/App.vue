<template>
  <div id="app" class="py-4 min-h-screen">
    <nav class="flex py-4 justify-around">
      <router-link to="/">Today</router-link>
      <router-link to="/earlier">Earlier</router-link>
    </nav>
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
  background-color: #fbfbfb
}

</style>
