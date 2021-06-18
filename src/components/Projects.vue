<template>
  <section id="projects">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <Title
        class="title"
        :title="projects.title"
        :description="projects.subtitle"
      />
    </AnimateOnVisible>

    <div class="container-fluid center-block">
      <article class="content text-center">
        <carousel :items-to-show="1.5">
          <slide v-for="(post, index) in projects.items" :key="index">
            <h2>{{ post.title }}</h2>
            <div class="wrapper">
              <div class="text-wrapper">{{ post.description }}</div>
            </div>
            <img
              class="photo_dp"
              :src="getImgUrl(imgSrc)"
              alt="photo"
              v-tilt="{
                max: 25,
                scale: 1.1,
                glare: true,
                speed: 200,
                perspective: 2000,
              }"
            />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </article>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import Title from "./Title.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Projects",
  props: ["projects"],
  components: {
    Title,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    getImgUrl(img) {
      if (img == undefined || img == "") return "";
      return require("../assets/img/projects/" + img);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

$linear: map-get($colors, dark);

#projects {
  // background-color: lighten(map-get($colors, projectBg), 5%);
}

.title {
  color: map-get($colors, text);
}

.text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}

article .inner {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  z-index: 1;
}

.content {
  color: map-get($colors, secondary);
  margin-top: 30px;
  header {
    height: 100%;
    width: 70%;
  }
  h1 {
    font-size: 3rem;
  }
}

.vertical-center {
  display: flex;
  align-items: center;
}

h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
