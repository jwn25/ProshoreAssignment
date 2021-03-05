<template>
  <h1>HOM</h1>
</template>

<script>
export default {
  mounted() {
    this.fetchTopNews()
  },
  methods: {
    async fetchTopNews() {
      let response = await this.$http.get('top-headlines?country=us');
      console.log(response)
    }
  }
  
}
</script>