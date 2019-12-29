<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404 NOT FOUND</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回到首页</router-link>
      <hr />
      <h4>其他文章推荐：</h4>
      <ul>
        <li v-for="(v,i) in page" :key="i">
          <router-link :to="v.path">{{ v.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];
export default {
  data() {
    return {
      page: []
    };
  },
  computed: {
    pages() {
      return this.$site.pages || [];
    }
  },
  mounted() {
    this.page = this.getRandomPages();
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
    getRandomPages(length = 10) {
      let arr = [];
      for (let i = 0; i < length; i++) {
        let _t = Math.floor(Math.random() * this.pages.length);
        if (this.pages[_t].title) {
          arr.push(this.pages[_t]);
        }
      }
      return arr;
    }
  }
};
</script>