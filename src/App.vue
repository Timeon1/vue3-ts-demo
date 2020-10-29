<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.identicon {
  padding: 5px;
  background: #eee;
  display: inline-block;
  div {
    float: left;
    width: 6px;
    height: 6px;
    background: #eee;
    float: left;
  }
}
.identicon:after {
  content: '';
  clear: both;
  display: block;
}

.identicon div:nth-child(5n + 1) {
  clear: both;
}
.identicon div[data="1"] {
  background: red;
}
.identicon div[data="0"] {
  background: #eee !important;
}
</style>
