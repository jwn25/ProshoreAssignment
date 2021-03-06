<template>
  <div class="card mb-3">
    <a :href="news.url" target="_blank">
      <img
        :src="news.urlToImage ? news.urlToImage : '/images/placeholder.jpg'"
        class="card-img-top"
        alt="..."
      />
    </a>
    <div class="card-body">
      <small class="text-muted">Author: {{ news.author }} ({{ news.source.name }})</small>
      <a :href="news.url" target="_blank">
        <h5 class="card-title">{{ news.title }}</h5>
      </a>
      <small class="text-muted">
        <strong>Posted On:</strong>
        {{ news.publishedAt | date_format('MMMM Do YYYY, h:mm a') }}
      </small>
      <p class="card-text mt-2" v-if="news.description">{{ news.description.substring(0, 100) }}</p>
    </div>
    <div class="card-footer">
      <i
        class="bi-hand-thumbs-up react--icons"
        :class="action == 'like' ? 'text-success':''"
        @click="likeNews(true)"
      ></i>
      {{ likeCounts }}
      <i
        class="ml-3 bi-hand-thumbs-down react--icons"
        :class="action == 'dislike' ? 'text-danger':''"
        @click="likeNews(false)"
      ></i>
      {{ dislikeCounts }}
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: ["news"],
  data() {
    return {
      action: null,
    };
  },
  mounted() {
    this.checkLike();
  },
  computed: {
    likeCounts() {
      let context = this;
      let like_check = _.filter(this.$parent.newsLikes, function (like) {
        return like.news_title == context.news.title && like.type == "like";
      });

      return like_check.length;
    },

    dislikeCounts() {
      let context = this;
      let like_check = _.filter(this.$parent.newsLikes, function (like) {
        return like.news_title == context.news.title && like.type == "dislike";
      });

      return like_check.length;
    },
  },
  methods: {
    checkLike() {
      if (!this.$store.state.isUserLoggedIn()) {
        return;
      }
      let context = this;
      let like_check = _.filter(this.$parent.newsLikes, function (like) {
        return (
          like.user_id === context.$store.state.AppActiveUser.id &&
          like.news_title == context.news.title
        );
      });

      if (like_check[0]) {
        this.action = like_check[0].type;
      }
    },

    async likeNews(flag) {
      try {
        if (!this.$store.state.isUserLoggedIn()) {
          return this.$router.push("/login");
        }
        let response = await this.$http.post("/api/news/action", {
          like: flag,
          news: this.news.title,
        });

        if (response.data.success) {
          this.action = response.data.current_action.type;
          this.$parent.fetchNewsLikes();
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>