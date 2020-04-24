export function deleteOneFile(filePath){
  return wx.cloud.deleteFile({
    fileList: [filePath]
  })
}
// 上传图片
export function uploadImg(imgPath){

  const timeStamp = new Date().getTime()
  const tempFilePath = imgPath
  const fileType = imgPath.replace(/.+\./, "").toLowerCase()

  return wx.cloud.uploadFile({
    cloudPath: `post_img/${timeStamp}.${fileType}`,
    filePath: tempFilePath, // 文件路径
    config: {
      env: 'dev-pd62p'
    },
  })
}

// 上传视频
export function uploadVideo(file,_this=null){
  console.log('this',_this)

  
  return new Promise((resolve, reject) => {
    const timeStamp = new Date().getTime()
    const tempFilePath = file.tempFilePath
    const fileType = file.tempFilePath.replace(/.+\./, "").toLowerCase()

    const uploadTask = wx.cloud.uploadFile({
      cloudPath: `videos/${timeStamp}.${fileType}`,
      filePath: tempFilePath, // 文件路径
      config: {
        env: 'dev-pd62p'
      },
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })

    uploadTask.onProgressUpdate((res) => {
      // console.log('上传进度', res.progress)
      let pc = res.progress
      if(pc === 20 || pc === 40 || pc === 60 || pc === 80){
        console.log('上传进度', res.progress)
        
        _this.setData({
          progress:res.progress
        })
      }
    })

  })
}