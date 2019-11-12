<template>
    <div class="search-container">
        <input class="search-input" v-model.lazy="searchQuery"/>
        <button class="search-button"> Search </button>
    </div>
</template>

<script>

  export default {
    name: "SearchComponent",
    data() {
      return {
        searchQuery: ''
      }
    },
    watch: {
      searchQuery() {
        this.$emit('search', {
          searchQuery: this.searchQuery
        })
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
        height: 40px;
        font-size: 25px;
        margin: 10px 0;
    }

    .search-button {
        -webkit-appearance: none;
        padding: 0;
        margin: 10px 0;
        background: aqua;
        outline: none;
    }

    @media (max-width: 768px) {
        .search-container {
            display: grid;
            grid-template-columns: 1fr 25%;
        }

        .search-input {
            width: auto;
            height: 20px;
            font-size: 15px;
            margin: 5px 0;
        }
        .search-button {
            -webkit-appearance: none;
            padding: 0;
            margin: 5px 0;
            background: aqua;
            outline: none;
        }
    }
</style>