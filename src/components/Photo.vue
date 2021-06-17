<template>
  <div>
    <div class="photo">
      <a>
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
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: ["imgSrc"],
  methods: {
    getImgUrl(img) {
      return require("../assets/img/" + img);
    },
  },
};
</script>

<style scoped lang="scss">
.photo {
  &_dp {
    box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
    transform: scale(1);
    transition: all 0.25s ease-in;
    &:hover {
      transform: scale(1.15);
      box-shadow: 0 4px 15px rgb(0 0 0 / 30%);
      transition: all 0.25s ease-out;
    }
  }
  a:focus {
    outline: none;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
  }
}
img {
  max-width: 100%;
}
</style>