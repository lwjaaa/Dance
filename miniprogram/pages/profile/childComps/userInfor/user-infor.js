// pages/profile/childComps/userInfor/user-infor.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    userInfor:{
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
    editUserInfor(e){
      console.log(this.data.userInfor)
      let _openid = this.data.userInfor._openid
      wx.navigateTo({
        url: `/pages/profile_edit/profile_edit?openid=${_openid}`,
      })
      wx.showLoading({
        title: '加载中',
      })
      
    }
  }
})
