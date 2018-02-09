// projects/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconUrl: ["/images/mc.png", "/images/scanCode-holding.png", "/images/my.png"],
    isChange: [false, true, false],
    avatarUrl: '',
    nickName: '未登录',
    score: {
      all: 100,
      leave: 5
    },
    gapScore:0,
    btnChecked:true
  },
  menu: function () {
    if (this.data.iconUrl[0] == "/images/mc-holding.png") {
    } else {
      wx.redirectTo({
        url: '../index/index'
      })
      this.setData({
        iconUrl: ["/images/mc-holding.png", "/images/scanCode.png", "/images/my.png"],
        isChange: [true, false, false]
      })
    }
  },
  scanCode: function () {
    if (this.data.iconUrl[0] == "/images/scanCode-holding.png") {

    } else {
      wx.redirectTo({
        url: '../scanCode/scanCode'
      })
      this.setData({
        iconUrl: ["/images/mc.png", "/images/scanCode-holding.png", "/images/my.png"],
        isChange: [false, true, false]
      })
    }
  },
  my: function () {
    if (this.data.iconUrl[0] == "/images/my-holding.png") {

    } else {
      wx.redirectTo({
        url: '../my/my'
      })
      this.setData({
        iconUrl: ["/images/mc.png", "/images/scanCode.png", "/images/my-holding.png"],
        isChange: [false, false, true]
      })
    }
  },
  scoreStore: function () {
    wx.navigateTo({
      url: '../scoreStore/scoreStore',
    })
  },
  login:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'avatarUrl',
      success: (res) => {
        this.setData({
          avatarUrl: res.data,
          gapScore:39,
          btnChecked:false
        })
      },
      fail : (res)=>{
        wx.showModal({
          title: '警告',
          content: '点击头像框进行登录/注册',
        })
      }
    },
      wx.getStorage({
        key: 'nickName',
        success: (res) => {
          this.setData({
            nickName: res.data
          })
        },
      })
    )
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