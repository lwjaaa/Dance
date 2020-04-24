export function deleteOneFile(filePath){
  return wx.cloud.deleteFile({
    fileList: [filePath]
  })
}

export function uploadImg(imgPath){

  const timeStamp = new Date().getTime()
  const tempFilePath = imgPath
  const fileType = imgPath.replace(/.+\./, "").toLowerCase()

  return wx.cloud.uploadFile({
    cloudPath: `videos/${timeStamp}.${fileType}`,
    filePath: tempFilePath, // 文件路径
    config: {
      env: 'dev-pd62p'
    },
  })
}