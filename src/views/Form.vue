<template>
  <div class="form" >
    <input type="file" accept="image/*" @change="inputChange">
    <div class="imgPreview">
      <div ref="formDom">
        <img :src="imgUrl" alt="">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import {ref,reactive ,onMounted,defineComponent, toRefs} from 'vue'

export default defineComponent({
  setup(){

    const formDom = ref()
    let imgUrl:any = ref()
    onMounted(()=>{
      console.log(imgUrl)
    });
    const inputChange =  (e:any) => {
          let file = e.target.files[0]
          console.log(file, '文件上传', file.size)
          let img = new Image()
          imgUrl = img
          // fileReader 读取文件
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function(e:any){
            img.src = e ? e.target.result : ''
            if(img.complete){
                // 打印
                document.body.appendChild(img)
                alert('from:complete : width:'+img.width+',height:'+img.height);
           
            }else{
                // 加载完成执行
                img.onload = function(){
      
                  let { width, height} = img
                  // 计算宽高比 ...
      
                  // 创建canvas画布
                  const canvas = document.createElement('canvas')
                  const context = canvas.getContext('2d')
      
                  width = width/2
                  height = height/2
                  canvas.width = width
                  canvas.height = height
                  context?.clearRect(0,0, width, height)
                  context?.drawImage(img, 0,0 ,width, height)
       
                  // 转成blob
                  console.log(canvas,context, width, height)
      
                  canvas.toBlob((blob)=>console.log('size',blob?.size), 'image/png', 0.5)
                  // this.formDom.appendChild(canvas)
                  document.getElementsByClassName('imgPreview')[0].appendChild(img)
                  document.getElementsByClassName('imgPreview')[0].appendChild(canvas)

                };
            }
          }
          return file
        } 
    return {
      ...toRefs(formDom),
      ...toRefs(imgUrl),
      inputChange
    }

  },
  
})
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
.imgPreview {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>
