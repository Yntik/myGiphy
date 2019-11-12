<template>
    <div class="list-container">
        <div class="item">Lala</div>
        <div class="item">Lala</div>
        <div class="item">Lala</div>
        <div class="item">Lala</div>
    </div>
</template>

<script>
  export default {
    name: "ListComponent"
  }
</script>

<style scoped lang="scss">
    .list-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1140px;
        margin: 0 auto;
    }
</style>