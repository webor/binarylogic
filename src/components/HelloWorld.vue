<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
