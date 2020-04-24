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
      const _id = e.currentTarget.dataset.id
      const fileID = e.currentTarget.dataset.file
      removeVideo(_id, fileID)
        .then(res => {
          console.log('删除成功', res)
          wx.showToast({
            title: '删除成功',
          })
        })
        .catch(err => {
          console.log('删除失败', err)
        })

    }
  }
})