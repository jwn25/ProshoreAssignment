<template>
  <div>
    <div class="row mt-4">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h4>Keyword</h4>
            <div class="form-group">
              <input
                type="text"
                v-model="applied_filters.q"
                placeholder="Keyword"
                class="form-control"
              />
            </div>
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-body">
            <h4>Source</h4>
            <div class="form-group">
              <select name id class="form-control" v-model="applied_filters.sources">
                <option value>Select Source</option>
                <option :value="source.id" v-for="source in filters.sources">{{ source.name }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-body">
            <h4>Language</h4>
            <div class="form-group">
              <select name id class="form-control" v-model="applied_filters.language">
                <option value>Select Language</option>
                <option
                  :value="language"
                  v-for="language in filters.languages"
                >{{ language }}</option>
              </select>
            </div>
          </div>
        </div>

        <button class="mt-4 btn btn-primary btn-block" @click="fetchNews">Filter</button>
      </div>
      <div class="col-sm-9">
        <div class="row" v-if="!loading">
          <div class="col-sm-4" v-for="news in all_news">
            <NewsCard :news="news"></NewsCard>
          </div>
        </div>
        <div class="text-center" v-else>
          <img src="/images/loading.gif" alt="" width="150" style="padding: 150px 0px">
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-secondary" @click="prevPage" :disabled="this.applied_filters.page == 1">-- Previous</button>
          </div>
          <div class="col-6 text-right">
            <button class="btn btn-secondary my-0" @click="nextPage">Next --</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import NewsCard from "./../partials/NewsCard";
import NewsGrid from "./../partials/NewsGrid";

export default {
  components: { NewsCard, NewsGrid },

  data() {
    return {
      loading: true,
      filters: {
        categories: [],
        sources: [],
        languages: [],
      },
      applied_filters: {
        q: "Technology",
        sources: "",
        language: "",
        pageSize: 12,
        page: 1,
      },
      all_news: [],
      newsLikes: [],
    };
  },
  mounted() {
    this.fetchSources();
    this.fetchNews();
    this.fetchNewsLikes();
  },
  methods: {
    async fetchNews() {
      this.loading = true
      try {
        let response = await this.$newshttp.get("everything", {
          params: this.applied_filters,
        });
        this.all_news = response.data.articles;
      } catch (e) {
        console.log(e);
        console.log("Something went wrong!!");
      } finally {
        this.loading = false
      }
    },

    nextPage() {
      this.applied_filters.page = this.applied_filters.page + 1;
      this.fetchNews();
    },

    prevPage() {
      this.applied_filters.page = this.applied_filters.page - 1;
      this.fetchNews();
    },

    async fetchSources() {
      try {
        let response = await this.$newshttp.get("sources");
        this.filters.sources = response.data.sources;
        this.filters.languages = _.uniq(
          _.map(response.data.sources, "language")
        );
        this.filters.categories = _.uniq(
          _.map(response.data.sources, "category")
        );
      } catch (e) {
        console.log(e);
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