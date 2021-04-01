<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-cell-group class="nav-list">
      <!-- <div v-for="( item,index ) in navList" :key="index" class="nav-item" @click="toDetail">{{item.name}}</div> -->
      <van-cell v-for="( item,index ) in navList" :key="index" :title="item.name" :value="内容" :label="item.desc" border="true" clickable is-link :path="item.path" @click="toDetail($event, item.path)" />
    </van-cell-group>
      
    <van-button type="primary" @click="plus()">加</van-button>
    <div>{{count}}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {useRouter} from 'vue-router'

@Options({
  components: {
  },
})
export default class Home extends Vue {
  data(){
    return {
      navList: [
        {name: 'WeChat朋友圈',path: '/message',desc: '微信朋友圈'},
        {name: '上传',path: '/form',desc: '上传'},
      ],
      count: 1
    }
  }
  toDetail(e:any, path:string){
    this.$router.push(path)
  }
  plus(){
    return  1
  }
  
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
}
.nav-item {
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #ccc;
}
</style>
