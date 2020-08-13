<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  font-family: sans-serif
}

#nav {
  padding: 30px;
}
</style>
