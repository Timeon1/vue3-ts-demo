// 引入vue
import {App as VM} from 'vue'
import {
  Button
} from 'vant'

const plugins = [
  Button
]

export const vantPlugins = {
  install(vm:VM){
    plugins.forEach(item=>{
      vm.component(item.name, item)
    })
  }

}