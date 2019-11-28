<template>
  <view class="privacy">
    <web-view :src="addUrl"></web-view>
  </view>
</template>

<script>
  export default {
    name: 'privacy',
  
    data: function () {
      return {
        addUrl:"https://tg.vutq7.com/privacy_policy.html"
      }
    },
  }
</script>

<style scoped lang="scss">
  .privacy{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
