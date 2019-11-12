<template>
    <div class="main-container">
        <div class="container">
            <SearchComponent
            >
            </SearchComponent>
            <ListComponent
                    :list="list"
                    :currentIndex="currentIndex"
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
      }
    },
    async created() {
      let data = (await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&limit=4`)).data.data
      this.$set(this, 'list', data)
    },
    methods: {
      async getMore() {
        let data = (await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&limit=4`)).data.data
        for(let item of data) {
          this.list.push(item)
        }
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