<template>
    <div class="main-container">
        <div class="container">
            <SearchComponent
                    @search="search"
            >
            </SearchComponent>
            <ListComponent
                    :list="list"
                    @getMore="getMore">
            </ListComponent>
        </div>
    </div>
</template>

<script>
  import ListComponent from './ListComponent.vue'
  import SearchComponent from './SearchComponent.vue'
  import axios from 'axios'
  import apiGiphyConfig from '../../apiGiphyConfig.json'


  export default {
    name: "MainPageComponent",
    components: {
      ListComponent,
      SearchComponent
    },
    data() {
      return {
        list: [],
        currentIndex: 1,
        limit: 24,

      }
    },
    async created() {
      let data =
        (await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&limit=${this.limit * this.currentIndex}`)).data.data
      this.$set(this, 'list', data)
    },
    methods: {
      async getMore() {
        this.currentIndex++
        let data = (await
          axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&offset=${this.limit * (this.currentIndex- 1) }&limit=${this.limit * this.currentIndex}&rating=R&lang=th`)).data.data
        for(let item of data) {
          this.list.push(item)
        }
      },
      async search(e) {
        let data
        if (e.searchQuery) {
          data = (await axios.get(`${apiGiphyConfig.search}?api_key=${apiGiphyConfig.apiKey}&q=${e.searchQuery}&limit=24`)).data.data
        }
        else {
          data = (await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&limit=${this.limit * this.currentIndex}`)).data.data
        }
        this.$set(this, 'list', data)
      }
    }
  }
</script>

<style scoped lang="scss">
    .main-container {
        height: 100vh;
        .container {
            max-width: 1140px;
            margin: 0 auto;
        }
    }
</style>