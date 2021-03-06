<template>
  <div>
    <div class="mt-4">
      <h1>Top news in India</h1>
      <div class="row">
        <div class="col-md-6" v-for="(topNewsChunk, chunk) in topNews" :key="`chunk`+chunk">
          <div class="row">
            <div
              :class="(chunk === 0 && news_key === 0) || (chunk === 1 && news_key === 2)?'col-md-12':'col-md-6'"
              v-for="(news, news_key) in topNewsChunk"
              :key="`top-news-`+news_key"
            >
              <NewsCard :news="news"></NewsCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="mt-4">
      <div class="row">
        <div class="col-sm-9">
          <h1>Latest News</h1>
          <NewsGrid
            :news="latest_news"
            v-for="(latest_news, latest_news_key) in latestNews"
            :key="`latest-news-`+latest_news_key"
          ></NewsGrid>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h3>Top news in US</h3>
              <div class="row">
                <div class="col-sm-12">
                  <NewsCard
                    :news="top_us"
                    v-for="(top_us, top_us_key) in topNewsUs"
                    :key="`latest-news-us`+top_us_key"
                  ></NewsCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "./../partials/NewsCard";
import NewsGrid from "./../partials/NewsGrid";

import _ from "lodash";
export default {
  components: { NewsGrid, NewsCard },
  data() {
    return {
      topNews: [],
      topNewsUs: [],
      latestNews: [],
      newsLikes: [],
    };
  },

  mounted() {
    this.fetchTopNewsUs();
    this.fetchTopNews();
    this.fetchLatestNews();
    this.fetchNewsLikes();
  },
  methods: {
    async fetchTopNews() {
      try {
        let response = await this.$newshttp.get(
          "top-headlines?country=in&pageSize=6"
        );
        this.topNews = _.chunk(response.data.articles, 3);
      } catch (e) {
        console.log("Something went wrong!!");
      }
    },
    async fetchTopNewsUs() {
      try {
        let response = await this.$newshttp.get(
          "top-headlines?country=us&pageSize=3"
        );
        this.topNewsUs = response.data.articles;
      } catch (e) {
        console.log("Something went wrong!!");
      }
    },

    async fetchLatestNews() {
      try {
        let response = await this.$newshttp.get(
          "top-headlines?category=technology&pageSize=10"
        );
        this.latestNews = response.data.articles;
      } catch (e) {
        console.log("Something went wrong!!");
      }
    },
    async fetchNewsLikes() {
      try {
        let response = await this.$http.get("/api/news-likes");
        this.newsLikes = response.data.data;
      } catch (e) {
        console.log("Something went wrong!!");
      }
    },
  },
};
</script>