// pages/WTMore/WTMore.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    maintitles: ['前端星计划','技术嘉年华','技术训练营','培训课程','技术招聘','公众号','关于'],
    titleImages: ['/images/more/wt_more_icon_star.png', '/images/more/wt_more_icon_skill.png', '/images/more/wt_more_icon_train.png', '/images/more/wt_more_icon_class.png', '/images/more/wt_more_icon_recruit.png', '/images/more/wt_more_icon_weixin.png', '/images/more/wt_more_icon_about.png'],
    links: ['http://study.qiyun.360.cn', 'https://code.360.cn/activity/detail?id=8', 'https://code.360.cn/activity/detail?id=6', 'https://code.360.cn/course','http://hr.360.cn/list','','']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      console.log("111")
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      console.log("222")
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      console.log("333")
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
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

  moreItemTap:function(e){
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
  /*updateTap:function(e){
    wx.navigateTo({
      url: `/pages/WTUpdate/WTUpdate?titleStr=${'二维码'}`
    })
  },*/

  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },

  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  }
})