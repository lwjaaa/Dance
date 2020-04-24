// pages/post/post.js
import {
  upload
} from "./utils/upload.js"
import {postVideo} from "./utils/video.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postImg:""
  },

  chooseVideo() {

    wx.chooseVideo({
      sourceType: ['album'],
      compressed: true,
      maxDuration: 60,
      // camera: 'back',
      success:(res) => {
        if (res.duration > 60) {
          return
        } else {
          console.log(res)
          let file = res
          console.log('封面图片',file.thumbTempFilePath)
          this.setData({
            postImg: file.thumbTempFilePath
          })
          upload(file)
            .then(res => {
              console.log('上传成功', res)
              let fileID = res.fileID

              postVideo({
                fileID,
                title:"",
                tags:[],
                imgurl:"",
                time: new Date().getTime(),
              }).then(res => {
                console.log('添加视频成功',res)
              }).catch(err => console.log('添加失败',err))

            })
            .catch(err => console.log('上传文件失败', err, file))






        }
      },
      fail(err) {
        console.log(err)
      },

    })
    console.log('post')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})