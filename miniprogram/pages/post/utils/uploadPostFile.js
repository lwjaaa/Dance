import {
  uploadImg,
  uploadVideo
} from "../../../network/file.js"
import {
  postVideo
} from "../../../network/video.js"

export async function uploadPostFile(video, imgurl,_this=null) {
  console.log(video, imgurl)
  // console.log(uploadImg)
  // console.log(uploadVideo)
  // console.log(postVideo)
  try {

    let imgRes = await uploadImg(imgurl)
    if (imgRes.statusCode !== 200){
      throw new Error("图片上传错误")
    }
    // console.log(imgRes)
    
    let videoRes = await uploadVideo(video, _this)
    if (videoRes.statusCode !== 200){
      throw new Error("视频上传错误")
    }
    // console.log(videoRes)
    let result = {
      imgurl: imgRes.fileID,
      fileid: videoRes.fileID
    }

    return result

  } catch (e) {

  }
}