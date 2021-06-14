<template>
  <div class="about">
    <img id="logo" alt="Binary Logic Logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Binary Logic . A Tech Blogging Portal" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
#logo {
  width: 100px;
  height: 100px;
}
</style>