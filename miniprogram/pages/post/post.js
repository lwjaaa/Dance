// pages/post/post.js

import {
  postVideo
} from "../../network/video.js"
import {
  uploadVideo
} from "../../network/file.js"
import {
  uploadPostFile
} from "./utils/uploadPostFile.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress: 0,
    postImg: "",
    video: null,
    title: "",
    des: "",
    
    geo: {},
    tags: ['舞蹈'],
    typeRange:[
      '舞蹈',
      '街舞',
      '民族舞'
    ],
    typeIndex:0,
  },
  _post(){
    let postData = {
      // fileid: "",
      // imgurl: "",
      title: this.data.title,
      des: this.data.des,
      type: this.data.typeRange[this.data.typeIndex],
      time: new Date().getTime(),
      // 位置信息
      geo: this.data.geo,
      tags: this.data.tags,
    }
    console.log(postData)
    
  },
  post() {

    let postData = {
      fileid: "",
      imgurl: "",
      title: this.data.title,
      des: this.data.des,
      type: this.data.typeRange[this.data.typeIndex],
      time: new Date().getTime(),
      // 位置信息
      geo: this.data.geo,
      tags: this.data.tags,
    }
    let video = this.data.video
    let imgurl = this.data.postImg
    // console.log('文件信息', video, imgurl)
    console.log('发布数据', postData)

    // 上传视频文件和封面图
    if (!video || !imgurl) {
      wx.showModal({
        title: '请先上传视频',
        content: '不允许发布空内容',
        showCancel:false
      })
      return
    }
    wx.showLoading({
      title: `上传中...`,
      mask:true
    })
    uploadPostFile(video, imgurl, this).then(res => {

      // console.log('上传回调结果', res)
      postData.fileid = res.fileid
      postData.imgurl = res.imgurl

      console.log("post数据", postData)

      postVideo(postData)
        .then(post => {
          // console.log("上传成功", post, res)
          wx.showToast({
            title: '上传成功',
          })
          wx.hideLoading()
        })
        .catch(err => {
          console.log("上传失败",err)
          wx.showToast({
            title: '上传失败',
            icon:'fail'
          })
        })

    })
  },

  chooseVideo() {

    wx.chooseMedia({
      count: 1,
      mediaType: ['video'],
      sourceType: ['album'],
      compressed: true,
      maxDuration: 60,
      success: (media) => {
        // 判断视频长度
        console.log('选择媒体', media.tempFiles[0])
        let res = media.tempFiles[0]
        if (res.duration > 60) {
          wx.showModal({
            title: '视频长度太长',
            content: '暂时只允许上传60s以内的视频',
            showCancel: false
          })
          return
        } else {

          const imgurl = res.thumbTempFilePath
          const file = res
          console.log(file, imgurl)

          this.setData({
            postImg: imgurl,
            video: file
          })

        }
      },
    })

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