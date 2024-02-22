<template>
  <div class="hello">
    <div class="dummy_header"></div>  
    <div class="header">
      <img id="logo" alt="Binary Logic Logo" src="../assets/img/logo.png" />
      <h1>{{ msg }}</h1>
    </div>
    <p>This project is owned by Vibhor Tambat</p>
    <embed
      src="/pdfs/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
      width="800px"
      height="1150px"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.dummy_header {
  display: block;
  height: 100px;
  width: 100%;
}

#logo {
  width: 25px;
  height: 25px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
