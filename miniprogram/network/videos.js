const db = wx.cloud.database()
const videoCols = db.collection('videos')
export function getUserVideos(_openid,skip=0){
  return videoCols.where({
    _openid
  }).get()
  
}