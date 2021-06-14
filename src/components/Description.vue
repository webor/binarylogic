<template>
  <section id="about">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <Title
        :title="user.description.title"
        :description="user.description.subtitle"
      />
    </AnimateOnVisible>
    <AnimateOnVisible name="fadeRight" :duration="1">
      <div class="section-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <Photo :imgSrc="user.description.photo" />
          </div>
          <div class="row">
            <div class="col-md-7 mr-auto card-mobile">
              <Presentation :content="user.content" />
            </div>
            <div class="col-md-4 card-mobile">
              <PersonnalCard :social="user.social" />
            </div>
          </div>
        </div>
      </div>
    </AnimateOnVisible>
  </section>
</template>

<script>
import Title from "./Title.vue";
import PersonnalCard from "./PersonnalCard.vue";
import Presentation from "./Presentation.vue";
import Photo from "./Photo.vue";

export default {
  name: "AboutMe",
  props: ["user"],
  components: {
    Title,
    PersonnalCard,
    Presentation,
    Photo,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

#about {
  background-color: lighten(map-get($colors, dark), 100%);
}

@media (min-width: #{map-get($breakpoints, medium)}) {
  .section-content {
    width: 80%;
    margin: 0 auto;
  }
}

@media (max-width: #{map-get($breakpoints, medium)}) {
  .card-mobile {
    text-align: center !important;
    margin-top: 20px;
  }
}
</style>