// components/common/d-video/d-video.js
let video = null
let timer = null
let startPoint = {
  x:0,
  y:0
}
let endPoint = {
  x:0,
  y:0
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fileid:{
      type:String
    }
  },
  attached(){
    video = wx.createVideoContext("video", this)
    console.log(video)
    video.playing = true
  },
  
  data: {
    showMenu:false
  },
  methods: {
    startTouch(e){
      let start = {
        x : e.changedTouches[0].clientX,
        y : e.changedTouches[0].clientY,
        time : e.timeStamp
      }
      // timer = setTimeout(() => {
      //   this.setData({
      //     showMenu:true
      //   })
      // }, 801);
      startPoint = start
      console.log('start',e,start,startPoint)
      
    },
    moveTouch(e){
      let moveDis = {
        x:e.changedTouches[0].clientX - startPoint.x,
        y:e.changedTouches[0].clientY - startPoint.y,
      }
      console.log('move',moveDis.x/300)

    },
    endTouch(e){
      let end = {
        x : e.changedTouches[0].clientX,
        y : e.changedTouches[0].clientY,
        time : e.timeStamp
      }
      endPoint = end
      console.log('end',end,endPoint.time - startPoint.time)
      let deltTime = endPoint.time - startPoint.time

      // 弹出菜单
      // if(deltTime <=800){
      //   clearTimeout(timer)
      //   timer = null
      //   if(video.playing){
      //     video.pause()
      //     video.playing = false
      //   }else{
      //     video.play()
      //     video.playing = true
      //   }
      // }

    },
    handlePlay() {
      // console.log(video)
      if(video.playing){
        video.pause()
        video.playing = false
      }else{
        video.play()
        video.playing = true
      }
    },
    handleMenu(e){
      this.setData({
        showMenu:false
      })
    }
  }
})
