// 引入vue
import {App as VM} from 'vue'
import {
  Button,
  Cell, 
  CellGroup,
  Image as VanImage,
  Icon
} from 'vant'

const plugins = [
  Button,
  Cell, 
  CellGroup,
  VanImage,
  Icon
]

export const vantPlugins = {
  install(vm:VM){
    plugins.forEach(item=>{
      vm.component(item.name, item)
    })
  }

}