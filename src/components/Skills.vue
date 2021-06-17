<template>
  <section id="skills">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <Title :title="skills.title" :description="skills.subtitle" />
    </AnimateOnVisible>

    <div class="section-content">
      <div class="container-fluid">
        <div class="row d-flex flex-wrap align-items-center">
          <div
            class="col-md-2 m-auto pb-4"
            v-for="(post, index) in skills.items"
            :key="index"
          >
            <AnimateOnVisible name="bounce" :duration="2">
              <div
                class="img-container"
                v-tilt="{
                  max: 35,
                  scale: 1.4,
                  speed: 500,
                  perspective: 1000,
                }"
              >
                <img
                  id="imgLogo"
                  class="img-responsive mx-auto d-block"
                  :src="getImgUrl(post.img)"
                  :alt="post.title"
                />
              </div>
              <div id="divAlt" class="altCaption text-center">
                {{ post.title }}
              </div>
            </AnimateOnVisible>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";

export default {
  name: "Skills",
  components: {
    Title,
  },
  props: ["skills"],
  methods: {
    getImgUrl(img) {
      return require("../assets/img/logo/" + img);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

#skills {
  background-color: lighten(map-get($colors, dark), 100%);
}

@media (min-width: #{map-get($breakpoints, medium)}) {
  .section-content {
    width: 80%;
    margin: 0 auto;
  }
}

img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 60px;
  max-height: 60px;
}

.altCaption {
  color: map-get($colors, secondary);
  margin-top: 1rem;
}

.img-container {
  height: 60px;
  position: relative;
}
</style>