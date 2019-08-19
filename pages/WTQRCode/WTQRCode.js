// pages/WTQRCode/WTQRCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:'viewId0',
    maintitles: ['360技术', '起舞周刊', 'HULK一线技术杂谈', 'Qtest之道', 'QiShare'],
    titleImages: ['/images/more/wt_wechat_image_360.png', '/images/more/wt_wechat_image_qiwu.png', '/images/more/wt_wechat_image_hulk.png', '/images/more/wt_wechat_image_qtest.png', '/images/more/wt_wechat_image_qishare.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (String(options.titleStr).length > 0) {
      wx.setNavigationBarTitle({
        title: options.titleStr
      })
    }
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

  },
  scrollChange:function(e){
   console.log(e);
  },
})