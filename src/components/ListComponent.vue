<template>
    <div>
        <div class="list-container">
            <div v-for="(item, index) in list" :data-atr="item.id + index" :key="item.id + index ">
                <img :src="item.images['original']['url']"/>
            </div>
            <button @click="getMore">More</button>
        </div>
    </div>
</template>

<script>

  export default {
    name: "ListComponent",
    props: ['list', 'currentIndex'],
    methods: {
      getMore() {
        this.$emit('getMore')
      },
    }
  }
</script>

<style scoped lang="scss">
    .list-container {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        max-width: 1140px;
        margin: 0 auto;

        img {
            width: 100%;
            object-fit: cover
        }
    }
</style>