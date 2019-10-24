// components/one/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 页面想组件传递数据
    // title:String  第一种写法
    title:{
      type:String,
      value:'我是默认数据',
      // 监听数据发生改变执行的函数
      observer:(newVal, oldVal) => {
        console.log(newVal,oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
