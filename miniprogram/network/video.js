import {deleteOneFile} from "./file.js"
const db = wx.cloud.database()
const videoCols = db.collection('videos')

export function removeVideo(_id,fileID) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '确定该删除？',
      content: '删除后无法恢复',
      success(res) {
        if (res.confirm) {

          console.log('用户点击确定',_id,fileID)

          // 删除云文件
          deleteOneFile(fileID).then(res => {
            console.log('删除云文件成功', res.fileList)

            // 删除数据库
            videoCols.doc(_id).remove()
              .then(res => {
                resolve(res)
              })
              .catch(err => {reject(err)})

          }).catch(error => { reject(err)})
          

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  })



}