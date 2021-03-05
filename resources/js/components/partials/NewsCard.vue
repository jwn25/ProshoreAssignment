<template>
  <div class="card mb-3">
    <img :src="news.urlToImage" class="card-img-top" alt="..." />
    <div class="card-body">
      <small class="text-muted">Author: {{ news.author }} ({{ news.source.name }})</small>
      <h5 class="card-title">{{ news.title }}</h5>
      <small class="text-muted">
        <strong>Posted On:</strong>
        {{ news.publishedAt | date_format('MMMM Do YYYY, h:mm a') }}
      </small>
      <p class="card-text mt-2" v-if="news.description">{{ news.description.substring(0, 100) }}</p>
    </div>
    <div class="card-footer">
      <!-- -->
      <i class="bi-hand-thumbs-up react--icons"></i>
      <i class="bi-hand-thumbs-down react--icons"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>