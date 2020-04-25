import {
  deleteOneFile
} from "./file.js"
const db = wx.cloud.database()
const videoCols = db.collection('videos')

// 添加
export function postVideo(postData) {

  return videoCols.add({
    // data 字段表示需新增的 JSON 数据
    data: {
      ...postData,
    }
  })
}

export async function removeVideo(videoData) {
  wx.showModal({
    title: '确定该删除？',
    content: '删除后无法恢复',
    success: async function(res) {
      if (res.confirm) {
        let imgurl = videoData.imgurl
        let fileid = videoData.fileid
        let _id = videoData._id


        console.log('用户点击确定', _id)
        console.log(fileid)
        console.log(imgurl)

        // 删除云文件
        let res1 = await deleteOneFile(fileid)
        let res2 = await deleteOneFile(imgurl)
        console.log('删除云文件成功', res1, res2)
        let res3 = await videoCols.doc(_id).remove()
        console.log('删除数据库成功', res3)
        if (res1, res2, res) {
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })
        }


      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
  return {
    status:200
  }





}