<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="nav-list">
      <div v-for="( item,index ) in navList" :key="index" class="nav-item" @click="toDetail">{{item.name}}</div>

    </div>
    <div>{{count}}</div>
    <button @click="plus">加</button>
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
        {name: 'WeChat朋友圈',path: '/message'}
      ],
      count: 1
    }
  }
  toDetail(){
    this.$router.push('/message')
  }
  plus(){
    return 1
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
