// projects/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/images/turnPage1.png', '/images/turnPage2.png', '/images/turnPage3.png'],
    info: ['9元购买菠萝派（1个）+香芋派（1个）', '11元购买菠萝派（1个）+薯条（中 ）（1份）','12元购买菠萝派（1个）+麦旋风奥利奥口味(1个)'],
    index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index);
    this.setData({
      index: options.index
    })
  },
  charge:function(){
    wx.showModal({
      content: '对不起，您的积分不足',
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