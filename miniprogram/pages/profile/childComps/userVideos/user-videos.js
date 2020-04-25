// pages/profile/childComps/userVieos/user-videos.js
import {
  removeVideo
} from "../../../../network/video.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videos: {
      type: Array,
      value: []
    },
    tabIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    routeToDetail(e){
      const videoData = e.currentTarget.dataset.video
      console.log('视频数据',videoData)
      wx.navigateTo({
        url: '/pages/detail/detail?id=1',
        // events: {
        //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        //   acceptDataFromOpenedPage: function(data) {
        //     console.log(data)
        //   },
        //   someEvent: function(data) {
        //     console.log(data)
        //   }
        // },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('routeToDetail', { videoData: videoData })
        }
      })
      
    },
    switchTab(e) {
      let index = e.currentTarget.dataset.index
      let type = e.currentTarget.dataset.type

      // console.log("tab",index)
      this.triggerEvent('switch-tab', {
        index,
        type
      }, {})

    },
    remove(e) {
      const videoData = e.currentTarget.dataset.video
      console.log(videoData)
      
      removeVideo(videoData).then(res =>{
        console.log(res)
        
      })
      //   .then(res => {
      //     console.log('删除成功', res)
      //     wx.showToast({
      //       title: '删除成功',
      //     })
      //   })
      //   .catch(err => {
      //     console.log('删除失败', err)
      //   })

    }
  }
})