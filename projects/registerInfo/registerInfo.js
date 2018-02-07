// projects/registerInfo/registerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    nickName:'未登录',
    sex: ['男', '女'],
    constellation: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    sexIndex: 0,
    coIndex: 0
  },
  sex: function (e) {
    this.setData({
      sexIndex: e.detail.value
    })
    wx.setStorage({
      key: 'sexIndex',
      data: e.detail.value,
    })
  },
  constellation:function(e){
    this.setData({
      coIndex: e.detail.value
    })
    wx.setStorage({
      key: 'coIndex',
      data: e.detail.value,
    })
  },
  save:function(){
    wx.showModal({
      title: '保存成功',
      content: '',
      showCancel:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            wx.setStorage({
              key: 'avatarUrl',
              data: res.userInfo.avatarUrl
            })
            wx.setStorage({
              key: 'nickName',
              data: res.userInfo.nickName
            })
            this.setData({
              avatarUrl: res.userInfo.avatarUrl,
              nickName: res.userInfo.nickName,
              province: res.userInfo.province
            })
          }
        })
      }
    })
    wx.getStorage({
      key: 'sexIndex',
      success: (res)=> {
        this.setData({
          sexIndex:res.data
        })
      },
    })
    wx.getStorage({
      key: 'coIndex',
      success: (res)=> {
        this.setData({
          coIndex: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})