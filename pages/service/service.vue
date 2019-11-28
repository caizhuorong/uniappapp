<template>
  <view class="service">
    <web-view :src="addUrl"></web-view>
  </view>
</template>

<script>
  export default {
    name: 'service',
   
    data: function () {
      return {
        addUrl:"http://orange.185sy.com/term_service.html?"
      }
    },
    
   
  }
</script>

<style scoped lang="scss">
  .service{
    width: 100%;
    height: 100%;
  }
</style>
