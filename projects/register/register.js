// projects/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  phoneNum: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  keyWord: function (e) {
    this.setData({
      key: e.detail.value
    })
  },
  register:function(e){
    wx.redirectTo({
      url: '../registerInfo/registerInfo',
      delta:3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5a743aefc3b9e4478002bb13/keyWord",
      success:(data)=>{
        this.setData({
          password: data.data.data.key
        })
      }
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