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
      <van-icon class="icon-right" size="20px" name="photograph" color="#fff" />
    </div>
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item,index) in state.list" :key="index" class="message-item">
        {{item.name}}
      </div>


    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state:{
      count: number,
      list: [
        {content: '今天和几哈撒地方a开始减肥卡甲方',createTime: '1616987488726' , updateTime: '1616987488726', name: '萨阿迪王', userId: '123', files: []},
        {content: '今天和几哈撒阿萨德地方开始减肥卡甲方', createTime: '1616981488726' , updateTime: '1616987481726', name: '万绮雯的', userId: '456', files: []},

      ],
      loading:boolean,
      finished: boolean
    }= reactive ({
      count: 0,
      list: [
        {content: '今天和几哈撒地方a开始减肥卡甲方',createTime: '1616987488726' , updateTime: '1616987488726', name: '萨阿迪王', userId: '123', files: []},
        {content: '今天和几哈撒阿萨德地方开始减肥卡甲方', createTime: '1616981488726' , updateTime: '1616987481726', name: '万绮雯的', userId: '456', files: []},
      ],
      loading:false,
      finished: false
    })

    const plus = ()=>{
      state.count++
      
    }
    const onLoad = ()=>{
      state.loading = false;
      state.finished = true;
    }


    return {
      state,
      plus,
      onLoad
    }
  },



})
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  padding-bottom: 40px;
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

.message-item {
  


}


</style>


