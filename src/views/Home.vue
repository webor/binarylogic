<template>
  <transition name="fade" tag="div" class="home" mode="out-in">
    <div class="wrapper" v-if="isLoaded" id="app">
      <div id="tsparticles">
        <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
          :particlesLoaded="particlesLoaded"
          :options="{
            background: {
              color: {
                value: '#ffffff00',
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'window',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#333',
              },
              links: {
                color: '#A9A9A9',
                distance: 180,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }"
        />
      </div>
      <LandingPage :user="user" />
      <Description :user="user" />
      <Skills :skills="user.skills" />
      <Projects :projects="user.projects" />
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "../components/LandingPage.vue";
import Description from "../components/Description.vue";
import Skills from "../components/Skills.vue";
import Projects from "../components/Projects.vue";
import user from "../jsons/user.json";

export default defineComponent({
  name: "Home",
  components: {
    LandingPage,
    Description,
    Skills,
    Projects,
  },
  data: () => ({
    isLoaded: false,
    showNavbar: true,
    lastScrollPosition: 0,
    user: user,
    posts: [],
  }),
  methods: {
    fetchPosts() {
      return {};
    },
    fetchUser() {
      return {};
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  created(): void {
    Promise.all([this.fetchPosts(), this.fetchUser()]).then(
      ([posts, users]) => {
        document.body.classList.add("loading");
        this.isLoaded = true;
      }
    );
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
});
</script>
<style scoped lang="scss">
canvas {
  display: block;
  vertical-align: bottom;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: opacity 0.8s ease, -webkit-transform 1.4s ease;
  transition: opacity 0.8s ease, transform 1.4s ease;
}
#tsparticles {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
}
</style>
