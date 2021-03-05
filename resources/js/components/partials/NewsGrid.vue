<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-5">
          <img
            :src="news.urlToImage ? news.urlToImage : '/images/placeholder.jpg'"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="col-sm-7">
          <small class="text-muted">Author: {{ news.author }} ({{ news.source.name }})</small>
          <h5>{{news.title}}</h5>
          <small class="text-muted">
            <strong>Posted On:</strong>
            {{ news.publishedAt | date_format('MMMM Do YYYY, h:mm a') }}
          </small>
          <p class="card-text mt-2" v-if="news.description">{{ news.description.substring(0, 100) }}</p>

          <div class="react--buttons">
            <i class="bi-hand-thumbs-up react--icons"></i>
            <i class="bi-hand-thumbs-down react--icons"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>