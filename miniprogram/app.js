//app.js
App({
  onLaunch: function() {
    wx.setTabBarStyle({
      color: '#888',
      selectedColor: '#f40',
      // backgroundColor: '#0000FF',
      // borderStyle: 'white'
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'dev-pd62p',
        traceUser: true,
      })
    }

    try {
      let _openid = wx.getStorageSync('_openid')
      
      if (!_openid) {
        wx.cloud.callFunction({
          name: 'login',
          success: res => {
            console.log("登陆", res.result.openid, res.result)
            this.globalData = {
              _openid: res.result.openid,
            }
            try {
              wx.setStorageSync('_openid', res.result.openid)
            } catch (e) {
              console.log("set设置缓存失败")
            }
          }
        })
      }else{
        this.globalData = {
          _openid,
        }
        console.log("之前登录过", this.globalData._openid)

      }

    } catch (e) {

    }




  }
})