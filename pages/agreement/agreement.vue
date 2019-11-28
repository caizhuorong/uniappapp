<template>
    <view class="agreement">
      <web-view :src="addUrl" ></web-view>
    </view>
</template>

<script>
    export default {
        name: 'agreement',
        data: function () {
            return {
              addUrl:"http://orange.185sy.com/user_agreement.html"
            }
        },
    }
</script>

<style scoped lang="scss">
  .agreement{
    width: 100%;
    height: 100%;
  }
</style>
