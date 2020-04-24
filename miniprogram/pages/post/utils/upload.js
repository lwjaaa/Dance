export function upload(file) {
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
      console.log('上传进度', res.progress)
    })

  })
}