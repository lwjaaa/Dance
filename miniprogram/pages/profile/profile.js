// miniprogram/pages/profile/profile.js
const app = getApp()
const _openid = app.globalData._openid
import {getUserVideos} from "../../network/videos.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    userVideos:[]

  },
  changeVideos(op){
    let type = op.detail.type
    let index = op.detail.index
    // console.log(type,index)
    this.setData({
      tabIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(_openid)
    getUserVideos(_openid).then(res =>{
      console.log('用户视频',res.data)
      this.setData({
        userVideos:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})