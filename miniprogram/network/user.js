const db = wx.cloud.database()
const userCols = db.collection('users')
let userModel = {
  openid: '',
  username:'用户名',
  uid:'',
  inittime: 0,
  des: '请输入你的简介',
  school: '大学',
  city: '厦门',
  birthday: '2020-1-1',
  age: 0,
  sex: 1,
  videos: [],
  fans: [],
  follows: [],
  like_videos: [],
  col_videos: [],
  likes: 0,
  wechat_infor: {}
}

function getUserInfor(_openid) {
  return userCols.where({
    _openid,
  }).get()
}

function initUser(_openid) {
  let user = userModel
  user.openid = _openid
  user.uid = new Date().getTime().toString().slice(3)
  user.inittime = new Date().getTime()
  console.log(user)
  return userCols.add({
    data:user
  })
}


export async function getUserAllData(_openid) {
  
  let userInfor = await getUserInfor(_openid)
  if (userInfor.data.length === 0) {
    console.log('还未注册', _openid)
    let newUser = await initUser(_openid)
    await getUserInfor(_openid)
    return newUser.data[0]
  } else {
    // console.log('获取用户信息', _openid, userInfor.data[0])
    wx.setStorageSync('user', userInfor.data[0])
    return userInfor.data[0]

  }


}