<template>
  <div class="about">
    <h1>This is an Message page</h1>
    <h1>{{count}}</h1>
    <van-button type="primary" @click="plus()">plus</van-button>

    <div class="header">
      <van-image
        class="img"
        fit="cover"
        :src="require('../assets/bg.jpg')"
      />

      <van-icon class="icon-left" size="20px" name="arrow-left" color="#fff" />
      <van-icon class="icon-right" size="20px" name="upgrade" color="#fff" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state:{
      count: number
    }= reactive ({
      count: 0
    })

    const plus = ()=>{
      state.count++
      
    }
    return {
      ...toRefs(state),
      plus
    }
  },



})
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  .img {
    width: 100%;
  }
  .icon-left {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .icon-right {
    position: absolute;
    right: 10px;
    top: 10px;
  }

}
</style>


