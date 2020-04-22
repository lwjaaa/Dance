// pages/profile/childComps/userVieos/user-videos.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videos:{
      type:Array,
      value:[
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
        {likes:250,id:""},
      ]
    },
    tabIndex:{
      type:Number,
      value:0
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
    switchTab(e){
      let index = e.currentTarget.dataset.index
      let type = e.currentTarget.dataset.type
      
      // console.log("tab",index)
      this.triggerEvent('switch-tab', {
        index,
        type
      }, {})
      
    }
  }
})
