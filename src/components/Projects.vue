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
        <div class="example-3d">
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="1.5"
            :space-between="0"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="true"
            class="mySwiper"
          >
            <swiper-slide v-for="(post, index) in projects.items" :key="index">
              <span class="pseudo_ribbon">{{
                new Date(post.date).toDateString()
              }}</span>
              <div :class="['carousel_slide carousel_bg_' + randomNumber()]">
                <div class="carousel_left">
                  <img
                    class="photo_carousel"
                    :src="getImgUrl(post.image)"
                    alt="photo"
                  />
                </div>
                <div class="carousel_right">
                  <h2>
                    {{ post.title }}
                  </h2>
                  <div class="carousel_text">
                    <div class="text-wrapper" v-html="post.content"></div>
                  </div>
                  <span
                    class="label carousel_label"
                    v-bind:style="{ backgroundColor: post.color }"
                    >{{ post.tag }}</span
                  >
                  <div class="tech_wrap carousel_text">
                    <span> Tech Stack: </span>
                    <span v-for="(tech, index) in post.tech" :key="index">
                      <img
                        class="tech_wrap_img"
                        :src="getImgTechUrl(tech.logo)"
                        alt="photo"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </article>
    </div>
  </section>
</template>
      

<script>
import Title from "./Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
export default {
  name: "Projects",
  props: ["projects"],
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
  methods: {
    randomNumber: () => {
      return Math.floor(Math.random() * 9) + 1;
    },
    getImgUrl(img) {
      if (img == undefined || img == "") return "";
      return require("../assets/img/projects/" + img);
    },
    getImgTechUrl(img) {
      if (img == undefined || img == "") return "";
      return require("../assets/img/logo/" + img);
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
.carousel_label {
  float: left;
  color: white;
  padding: 4px 8px;
  font-weight: bold;
  margin: 10px 0px;
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 #18191a;
}

.pseudo_ribbon {
  position: absolute;
  right: -10px;
  color: white;
  top: 15px;
  font-size: 1.4rem;
  z-index: 10;
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
.carousel_left {
  width: 50%;
  display: inline-block;
}
.carousel_right {
  border-left: solid 1px #a9a9a9;
  width: 45%;
  height: 100%;
  display: inline-block;
  padding-left: 20px;
  font-size: 14px;
}
.carousel_slide {
  vertical-align: middle;
  box-sizing: border-box;
  padding: 30px 0px 0 0;
  height: 480px;
  overflow: hidden;
  background-color: map-get($colors, light);
  h2 {
    padding: 30px 0;
    font-size: 24px;
  }
}
.photo_carousel {
  width: 100%;
  height: 100%;
  max-height: 480px;
  object-fit: contain;
  overflow: hidden;
}
.carousel_bg_1 {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
}
.carousel_bg_2 {
  background-color: #f8f9d2;
  background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
}
.carousel_bg_3 {
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);
}
.carousel_bg_4 {
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
}
.carousel_bg_5 {
  background-color: #fee2f8;
  background-image: linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%);
}
.carousel_bg_6 {
  background-color: #deebdd;
  background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
}
.carousel_bg_7 {
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}
.carousel_bg_8 {
  background-color: #f3e6e8;
  background-image: linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%);
}
.carousel_bg_9 {
  background-color: #f1dfd1;
  background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
}

.tech_wrap_img {
  max-width: 25px;
  max-height: 25px;
  margin: 0 5px;
}

.swiper-container {
  display: inline-block;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.carousel_slide::before {
  position: absolute;
  content: "";
  background: map-get($colors, primary);
  height: 40px;
  width: 40px;
  top: 19px;
  z-index: -1;
  right: -15px;
  transform: rotate(45deg);
}
.carousel_slide::after {
  position: absolute;
  content: "In Progress";
  top: 10px;
  right: -24px;
  padding: 0.5rem;
  width: 14rem;
  font-size: 1.4rem;
  background: #353535;
  color: transparent;
  text-align: center;
  font-family: "Roboto", sans-serif;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 2px;
  box-shadow: 4px 4px 15px rgb(26 35 126 / 20%);
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow-x: visible;
  overflow-y: visible;
}

.carousel_text {
  text-align: left;
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tech_wrap {
  position: absolute;
  bottom: 10%;
}

@media (max-width: #{map-get($breakpoints, mobile)}) {
  // .carousel_slide {
  //   height: 400px;
  // }
  // .swiper-slide {
  //   height: 400px;
  // }
  .carousel_left {
    display: none;
  }
  .carousel_right {
    padding-left: 10px;
    width: 100%;
  }
  .carousel_slide h2 {
    padding: 20px 0 10px 0;
  }
  .carousel_text {
    .text-wrapper {
      padding: 2%;
    }
  }
}

h1 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
