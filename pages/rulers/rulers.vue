<template>
    <view class="rulers">
      <web-view :src="addUrl"></web-view>
    </view>
</template>

<script>
    export default {
        name: 'agreement',
        data: function () {
            return {
              addUrl:"http://orange.185sy.com/bonus_rule.html?"
            }
        },
        onLoad(){
          this.addUserId()
        },
    }
</script>

<style scoped lang="scss">
  .rulers{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
