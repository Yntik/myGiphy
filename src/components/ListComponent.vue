<template>
    <div>
        <div class="list-container" v-if="list.length">
            <div v-for="(item, index) in list" :data-atr="item.id + index" :key="item.id + index ">
                <img :src="item.images['original']['url']"/>
            </div>
            <button class="more" @click="getMore">More</button>
        </div>
        <div class="list-container" v-else>
            <h1 class="warning"> Search don't result </h1>
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
    .warning {
        color: red;
        text-align: center;
    }
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

        .more{
            -webkit-appearance: none;
            padding: 0;
            margin: 10px 0;
            background: aqua;
            outline: none;
            grid-column: 2/span 1;
            height: 40px;

        }
    }

    @media (max-width: 768px) {
        .list-container {
            max-width: 768px;
            grid-template-columns: auto;
            .more{
                grid-column: 1/span 1;

            }
        }
    }
</style>