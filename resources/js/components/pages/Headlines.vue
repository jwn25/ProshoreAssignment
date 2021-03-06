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
            <h4>Country</h4>
            <div class="form-group">
              <select name id class="form-control" v-model="applied_filters.country">
                <option value>Select Country</option>
                <option
                  :value="country"
                  v-for="country in filters.countries"
                >{{ countries[country] }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-body">
            <h4>Categories</h4>
            <div class="form-group" v-for="category in filters.categories">
              <input
                type="checkbox"
                v-model="applied_filters.categories"
                :value="category"
                :id="`category-`+category"
              />
              <label :for="`category-`+category">{{ category }}</label>
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
          <img src="/images/loading.gif" alt width="150" style="padding: 150px 0px" />
        </div>
        <div class="row">
          <div class="col-6">
            <button
              class="btn btn-secondary"
              @click="prevPage"
              :disabled="this.applied_filters.page == 1"
            >-- Previous</button>
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
        countries: [],
      },
      applied_filters: {
        q: "",
        country: "us",
        pageSize: 12,
        categories: [],
        page: 1,
      },
      all_news: [],
      countries: {
        us: "United States",
        no: "Norway",
        au: "Australia",
        it: "Italy",
        sa: "Saudi Arabia",
        pk: "Pakistan",
        gb: "United Kingdom",
        de: "Germany",
        br: "Brazil",
        ca: "Canada",
        es: "Spain",
        ar: "Argentina",
        fr: "France",
        in: "India",
        is: "Island",
        ru: "Russia",
        se: "Sweden",
        za: "South Africa",
        ie: "Ireland",
        nl: "Netherlands",
        zh: "Singapore",
      },
      newsLikes: [],
      
    };
  },
  mounted() {
    this.fetchSources();
    this.fetchNews();
    this.fetchNewsLikes();
  },
  methods: {
     async fetchNewsLikes() {
      try {
        let response = await this.$http.get("/api/news-likes");
        this.newsLikes = response.data.data;
      } catch (e) {
        console.log("Something went wrong!!");
      }
    },
    async fetchNews() {
      this.loading = true;
      try {
        let payload = {
          category: this.applied_filters.categories.join(","),
          q: this.applied_filters.q,
          country: this.applied_filters.country,
          pageSize: this.applied_filters.pageSize,
          page: this.applied_filters.page,
        };
        
        let response = await this.$newshttp.get("top-headlines", {
          params: payload,
        });
        this.all_news = response.data.articles;
      } catch (e) {
        console.log("Something went wrong!!");
      } finally {
        this.loading = false;
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
        this.filters.countries = _.uniq(
          _.map(response.data.sources, "country")
        );
        this.filters.categories = _.uniq(
          _.map(response.data.sources, "category")
        );
      } catch (e) {
        console.log(e);
        console.log("Something went wrong!!");
      }
    },
  },
};
</script>