<template>
  <div class="about">
    <h1>This is an Message page</h1>
    <h1>{{state.count}}</h1>
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

      <!-- <div v-for="item in list" :key="item.userId" class="message-item">
        {{item.name}}
        <div :id="item.userId" class="identicon">
          {{ setAvatar(item.userId) }}

        </div>
      </div> -->

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item,index) in state.list" :key="index" class="message-item">
        
        <div class="left">
          <div :id="item.userId" :ref="item.userId" class="identicon">
            {{ setAvatar(item.userId) }}
          </div>
        </div>
        
        <div class="right">
          <div class="username">{{item.name}}</div>
          <div class="message-item-content">{{item.content}}</div>

        </div>

      </div>


    </van-list>


  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs, onMounted, ref } from 'vue'
import {getRandomAvatar} from '@/utils/utils'
export default defineComponent({
  setup() {
    const state:{
      count: number,
      list: Array<unknown>,
      loading:boolean,
      finished: boolean
    }= reactive({
      count: 0,
      list: [],
      loading:false,
      finished: true
    })

    const plus = ()=>{
      state.count++
      console.log(state.list.values)
      
    }
    const onLoad = ()=>{
      state.loading = false;
      state.finished = true;
      // console.log(setAvatar('754564654asa'))
    }
    const setAvatar = (id:string)=>{
      console.log('setAvatar', state.list)
      const dom = document.getElementById(id);
      dom && getRandomAvatar(dom)
      console.log('dom', dom, id)
    }
    const getMessages = () => {
      const list = [
          {content: '今天和几哈撒地方a开始减肥卡甲方,啊萨达萨达静安寺,啥的骄傲开始发了221大丰收',createTime: '1616987488726' , updateTime: '1616987488726', name: '萨阿迪王', userId: '3b212316fd'},
          {content: '今天和几哈撒地方a开始减肥卡甲方今天和几哈撒阿萨德地方开始减肥卡甲方asdas啊萨达萨达',createTime: '1616987488726' , updateTime: '1616987488726', name: '迪王', userId: '3b212316qwefd'},
          {content: '今天和几哈撒地方a开始减肥卡甲方',createTime: '1616987488726' , updateTime: '1616987488726', name: '阿迪ads 王', userId: '3b212378'},
          {content: '今天和几哈撒地方a开始减肥卡甲方',createTime: '1616987488726' , updateTime: '1616987488726', name: '阿asdqwr迪王', userId: '3b21231452asdq'},
          {content: '今天和几哈撒阿萨德地方开始减肥卡甲方asdas啊萨达萨达, ,啊萨达萨达很快就阿萨德看阿萨德后就开始', createTime: '1616981488726' , updateTime: '1616987481726', name: '万绮雯的', userId: '456'},
        ]
        state.list = list
        console.log('getMessage', state.list)
    }
    onMounted(() => {
      getMessages();
      console.log('monted')
    });
    return {
      state,
      plus,
      onLoad,
      setAvatar,
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
  min-height: 60px;
  display: flex;
  padding: 10px 16px;
  .left {
    
  }
  .right {
    flex: 1;
    text-align: left;
    padding-left: 6px;
    .username {
      color: #003a8c;
    }
    .message-item-content {
      padding: 6px;

    }
  }
}



</style>


