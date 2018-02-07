// projects/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listImgUrl: ["/images/index_wallet.png", "/images/index_tag.png", "/images/index_smile.png", "/images/index_clown.png","/images/index_gift.png"],
    iconUrl: ["/images/mc-holding.png", "/images/scanCode.png", "/images/my.png"],
    isChange: [true,false,false]
  },
  menu:function(){
    if (this.data.iconUrl[0] == "/images/mc-holding.png"){
    }else{
      wx.redirectTo({
        url: '../index/index'
      })
      this.setData({
        iconUrl: ["/images/mc-holding.png", "/images/scanCode.png", "/images/my.png"],
        isChange: [true, false, false]
      })
    }
  },
  scanCode:function(){
    if (this.data.iconUrl[0] == "/images/scanCode-holding.png"){

    }else{
      wx.redirectTo({
        url: '../scanCode/scanCode'
      })
      this.setData({
        iconUrl: ["/images/mc.png", "/images/scanCode-holding.png", "/images/my.png"],
        isChange: [false, true, false]
      })
    }
  },
  my:function(){
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
  myScore:function(){
    wx.getStorage({
      key: 'nickName',
      success:  (res) =>{ 
          wx.redirectTo({
            url: '../scanCode/scanCode',
          })
      },
      fail:(res)=>{
        wx.navigateTo({
          url: '../scoreLogin/scoreLogin',
        })
      }
    })
  },
  scoreStore:function(){
    wx.navigateTo({
      url: '../scoreStore/scoreStore',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


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