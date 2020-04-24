const db = wx.cloud.database()
const videoCols = db.collection('videos')
export function postVideo(video) {
  
  return videoCols.add({
    // data 字段表示需新增的 JSON 数据
    data: {
      ...video,
    }
  })
}