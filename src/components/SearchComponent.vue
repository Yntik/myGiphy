<template>
    <div class="search-container">
        <input class="search-input" v-model.lazy="searchQuery"/>
        <button class="search-button"> Search</button>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "SearchComponent",
    data() {
      return {
        searchQuery: '',
      }
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