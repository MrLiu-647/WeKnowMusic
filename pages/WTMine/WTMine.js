// pages/WTMore/WTMore.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    response: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    maintitles: [],
    lyrics: [],
    titleImages: [],
    links: [],
    moods: [],
    dates: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight + "px",
        })
      },
    })
    wx.request({
      url: 'http://10.216.0.152/api/record/list',
      data: { id: wx.getStorageSync('UserData').user_id},
      method: 'POST',
      // header: {
        // 'content-type': 'application/json'
      // },
      success: function(res) {
        if (res.statusCode != 200) {
          return false;
        }
        // todo
        that.setData({
          response: res.data.data
        })
        console.log(res.data)
      },
      fail: function() {
        wx.showToast({
          title: '服务器出错啦',
          duration: 2000
        });
      },
      complete: function() {
        var tmpMaintitles = [];
        var tmpLyrics = [];
        var tmpTitleImages = [];
        var tmpSecondTitleImages = [];
        var tmpMoods = [];
        var tmpDates = [];
        var tmpLinks = [];
        var res = that.data.response;
        for (var i = 0; i < res.length; i++) {
          var obj = res[i];
          tmpMaintitles.push(obj.singer + " - " + obj.song_name);
          tmpLyrics.push(obj.lyric);
          tmpTitleImages.push(obj.images);
          tmpMoods.push(obj.mood);
          tmpDates.push(obj.updated_at);
          tmpLinks.push(obj.big_image);
        }
        that.setData({
          maintitles: tmpMaintitles,
          lyrics: tmpLyrics,
          titleImages: tmpTitleImages,
          moods: tmpMoods,
          dates: tmpDates,
          links: tmpLinks
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

  },

  moreItemTap:function(e){
    var link = encodeURIComponent(e.detail.link);
    var title = e.detail.title;
    // console.log(link);
    if(link.length > 0){
      wx.navigateTo({
        url: `/pages/WTWebView/WTWebView?link=${link}&titleStr=${title}`
      })
    }
  },

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
  },

  lower: function(e) {
    if (this.data.loadmoreData) {
      this.setData({
        loadmore: 'true',
      })
      this.loadmorenav();
    } else {
      this.setData({
        loadmore: 'false',
      })
    }
  }


})