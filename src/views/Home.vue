<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="nav-list">
      <div v-for="( item,index ) in navList" :key="index" class="nav-item" >{{item.name}}</div>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {ref} from 'vue'

@Options({
  components: {
  },
})
export default class Home extends Vue {
  data(){
    return {
      navList: [
        {name: 'WeChat朋友圈',path: '/message'}
      ]
    }
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
