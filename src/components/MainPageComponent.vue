<template>
    <div class="main-container">
        <SearchComponent>
        </SearchComponent>
        <ListComponent>
        </ListComponent>
    </div>
</template>

<script>
  import ListComponent from './ListComponent.vue'
  import SearchComponent from './SearchComponent.vue'

  export default {
    name: "MainPageComponent",
    components: {
      ListComponent,
      SearchComponent
    },
  }
</script>

<style scoped lang="scss">
    .main-container {
        max-width: 1140px;
        margin: 0 auto;
    }
</style>