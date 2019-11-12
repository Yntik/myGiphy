<template>
    <div class="search-container">
        <input class="search-input" v-model.lazy="searchQuery"/>
        <button class="search-button"> Search</button>
        <img :src="url"/>
    </div>
</template>

<script>
  import axios from 'axios'
  import apiGiphyConfig from '../../apiGiphyConfig.json'

  export default {
    name: "SearchComponent",
    data() {
      return {
        searchQuery: '',
        url: ''
      }
    },
    async created() {
      let data = await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&limit=25`)
      this.url = data.data.data[0].images['fixed_height']['url']
    }
  }
</script>

<style scoped lang="scss">
    .search-container {
        display: grid;
        grid-template-columns: 1fr 200px;
    }

    .search-input {
        width: auto;
    }
</style>