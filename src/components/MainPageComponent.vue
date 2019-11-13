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
  import apiMixin from '../mixin/apiMixin'


  export default {
    name: "MainPageComponent",
    mixins: [apiMixin],
    components: {
      ListComponent,
      SearchComponent
    },
    data() {
      return {
        list: [],
        limit: 24,
        numberLoadedGif: 0

      }
    },
    async created() {
      try {
        let data = await this.trending(this.limit, this.numberLoadedGif)
        this.numberLoadedGif += data.length
        this.limit += data.length
        this.$set(this, 'list', data)
      } catch (e) {
        console.log(e)
      }

    },
    methods: {
      async getMore() {
        try {
          let data = await this.trending(this.limit, this.numberLoadedGif)
          for (let item of data) {
            this.list.push(item)
          }
        } catch (e) {
          console.log(e)
        }
      },
      async search(e) {
        try {
          let data
          if (e.searchQuery) {
            data = await this.querySearch(e.searchQuery, this.limit - this.numberLoadedGif)
          }
          else {
            data = await this.trending(this.limit, this.numberLoadedGif)
            this.numberLoadedGif += data.length
            this.limit += data.length
          }
          this.$set(this, 'list', data)
        } catch (e) {
          console.log(e)
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