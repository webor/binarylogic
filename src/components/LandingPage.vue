 <template>
  <header class="header parallax">
    <div class="name">
      <div class="wrapper-name">
        <AnimateOnVisible name="fadeDown" ::duration="1">
          <h1>Vibhor Tambat</h1>
        </AnimateOnVisible>
        <hr />
        <AnimateOnVisible name="fadeUp" ::duration="1">
          <p>Full Stack Developer</p>
        </AnimateOnVisible>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LandingPage",
  props: ["user"],
});
</script>
<style scoped lang="scss">
@import "@/styles/constants.scss";
.header {
  z-index: 1;
  padding: 20px;
  //background-color: map-get($colors, dark);
}
.parallax {
  //   background-image: url("../assets/bg.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1000px;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;

  .wrapper-name {
    width: 250px;
  }

  h1 {
    font-size: 2.4rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    color: #333;
    background-color: #ffffff;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: #333;
    background-color: #ffffff;
  }

  hr {
    border: 1px solid #808080;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .name {
    .wrapper-name {
      width: 55%;
    }
    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }
    p {
      font-size: 2rem;
    }
  }
}
@media (min-width: #{map-get($breakpoints, medium)}) {
  .name {
    .wrapper-name {
      width: 450px;
    }
    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>