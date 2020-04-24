// components/common/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbar:[
      {index:0,text:"首页",url:"/pages/index/index"},
      {index:2,text:"发布",url:"/pages/post/post"},
      {index:1,text:"我的",url:"/pages/profile/profile"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e){
      const {index,url} = e.currentTarget.dataset
      console.log(index,url)
      wx.switchTab({
        url
      })
    }
  }
})
