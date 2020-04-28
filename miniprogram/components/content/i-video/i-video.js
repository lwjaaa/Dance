// components/content/i-video/i-video.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    video:{
      type:Object,
      value:{}
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
    routeToDetail(){
      wx.navigateTo({
        url: '/pages/detail/detail',
        success:(res) => {
          res.eventChannel.emit('getVideoDetail', {
            video:this.data.video
          })
        }
      })
      
      
    }
  }
})
