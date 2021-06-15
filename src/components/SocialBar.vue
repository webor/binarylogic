 <template>
  <div class="social-wrap">
    <ul>
      <li>
        <a :href="links.linkedIn" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a :href="links.twitter" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a :href="links.github" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a :href="links.stackOverflow" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'stack-overflow']" />
        </a>
      </li>
      <li>
        <a :href="links.instagram" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SocialBar",
  props: ["links"],
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";
.social-wrap {
  li {
    display: inline-block;
    margin-right: 10px;
  }
  .icon {
    font-size: 3rem;
  }
  a {
    color: #333;
  }
}
</style>