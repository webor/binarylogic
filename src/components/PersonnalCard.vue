<template>
  <div>
    <h3>{{ social.name }}</h3>
    <div class="data"><strong>E-mail:</strong> {{ social.email }}</div>
    <div class="data"><strong>Phone:</strong> {{ social.phone }}</div>
    <div class="data"><strong>City:</strong> {{ social.city }}</div>
    <!-- <div class="data"><strong>Languages:</strong> {{ user.lang }}</div> -->
    <SocialBar :links="social.links" />
  </div>
</template>

<script>
import SocialBar from "./SocialBar.vue";

export default {
  name: "PersonnalCard",
  props: ["social"],
  components: {
    SocialBar,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.data {
  margin-bottom: 15px;
  font-size: 15px;
}
</style>