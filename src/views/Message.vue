<template>
  <div class="about">
    <h1>This is an Message page</h1>
    <h1>{{count}}</h1>
    <button @click="plus()">plus</button>
    <van-button type="primary">啊萨达萨达所</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
import { Button } from 'vant';
export default defineComponent({
  components:{
    // [Button.name]: Button,
  },
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


