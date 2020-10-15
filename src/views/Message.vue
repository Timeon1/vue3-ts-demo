<template>
  <div class="about">
    <h1>This is an Message page</h1>
    <h1>{{count}}</h1>
    <van-button type="primary" @click="plus()">plus</van-button>
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


