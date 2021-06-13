<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  height: 60px;
  width: 100vw;
  background: #00000060;
  position: fixed;
  box-shadow: 0 2px 15px rgb(133, 133, 133);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
#nav#navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
