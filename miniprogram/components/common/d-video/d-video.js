// components/common/d-video/d-video.js
let video = null
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  attached(){
    video = wx.createVideoContext("video", this)
    video.playing = true
  },
  
  data: {

  },
  methods: {
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
  }
})
