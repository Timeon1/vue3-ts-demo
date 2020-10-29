# vue3-ts-demo

## Vue3.0 + Typescript + Vant
```javascript
//创建
vue create vue3-ts-demo //选择Vue3.0 空格选择 enter确认

vue add typescript
```

### data

```javascript
// 1 reactive将state 包起来实现state数据的响应式
    import { reactive } from 'vue'

    // 响应式状态
    const state = reactive({
      count: 0
    })
// 2 ...toRefs可以把响应式对象转换成普通对象 相当于深拷贝一份出来 新对象无响应关系 老对象保持响应关系
    const state = reactive({
      foo: 1,
      bar: 2,
    })
    const stateAsRefs = toRefs(state)


```



### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
