// pages/WTMore/WTMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maintitles: ['前端星计划','技术嘉年华','技术训练营','培训课程','技术招聘','公众号','关于'],
    titleImages: ['/images/more/wt_more_icon_star.png', '/images/more/wt_more_icon_skill.png', '/images/more/wt_more_icon_train.png', '/images/more/wt_more_icon_class.png', '/images/more/wt_more_icon_recruit.png', '/images/more/wt_more_icon_weixin.png', '/images/more/wt_more_icon_about.png'],
    links: ['http://study.qiyun.360.cn', 'https://code.360.cn/activity/detail?id=8', 'https://code.360.cn/activity/detail?id=6', 'https://code.360.cn/course','http://hr.360.cn/list','','']
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

  },
  moreItemTap:function(e){
    /** encodeURIComponent编码 decodeURIComponent 解码 防止link中带有？字样*/
    var link = encodeURIComponent(e.detail.link);
    var title = e.detail.title;
    console.log(link);
    if(link.length > 0){
      wx.navigateTo({
        url: `/pages/WTWebView/WTWebView?link=${link}&titleStr=${title}`
      })
    } else {
     if(title == '公众号'){
       wx.navigateTo({
         url: `/pages/WTQRCode/WTQRCode?titleStr=${title}`
       })
     } else if (title == '关于') {
       wx.navigateTo({
         url: '/pages/WTAbout/WTAbout'
       })
     }

    }
  },
  updateTap:function(e){
    wx.navigateTo({
      url: `/pages/WTUpdate/WTUpdate?titleStr=${'二维码'}`
    })
  }
})