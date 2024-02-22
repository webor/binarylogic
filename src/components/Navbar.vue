<template>
    <div id="navbar">
      <span class='nav-item navbar-item'>Blog &nbsp; ></span>
    <router-link class="italics" to="/go-mindset">
      <span class="nav-item"><img
                  id="imgHeader"
                  class="mx-auto d-block"
                  :src="getImgUrl('go.png')"
                  alt="Go"
                /> mindset </span></router-link>
    <router-link class="italics" to="/kubernetes">
      <span class="nav-item">
      <img
                  id="kubernetes"
                  class="mx-auto d-block"
                  :src="getImgUrl('kubernetes.png')"
                  alt="Kubernetes"
                />Kubernetes</span></router-link>
  </div>
  </template>
  
  <script>

  
  export default {
    name: "Navbar",
    props: ["user"],
    methods: {
    getImgUrl(img) {
      return require("../assets/img/logo/" + img);
    },
  },
  };
  </script>
  
  <style scoped lang="scss">
  @import "@/styles/constants.scss";
  
  .data {
    margin-bottom: 15px;
    font-size: 15px;
  }

  .navbar-item{
    font-size: 20px;
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
    
  }

  .nav-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  #kubernetes {
    display: block;
    width: 20px;
    height: 20px;
  }

  #imgHeader{
    display: block;
    width: 40px;
    height: 20px;
  }

  #navbar {
  padding: 30px;
  height: 60px;
  width: 100vw;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 15px;
  a {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    text-decoration: none;
    transform: scale(1);
    &:hover{
      transform: scale(1.1);
      text-decoration: underline;
      color: #141c24;
      transition: all 0.25s ease-out;
    }

    &.router-link-exact-active {
      color: #141c24;
    }
  }
  .italics {
    display: flex;
    flex-direction: row;
    font-style: italic;
  }
}
#nav#navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
  </style>