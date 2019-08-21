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
    maintitles: ['蝴蝶眨几次眼睛才学会飞行。夜空洒满了星星，但几颗会落地。我飞行，但你坠落之际。很靠近，还听见呼吸。对不起，我却没捉紧你。你不知道我为什麽离开你。我坚持不能说放任你哭泣。你的泪滴像倾盆大雨，碎了满地。在心里清晰。你不知道我为什麽狠下心。盘旋在你看不见的高空里。多的是，你不知道的事。', '012345678910', 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', 'abcdefgabcdefgabcdefgabcdefg', '000000000000000000000000000000000000000000000000000000000000000000000000','测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试','关于'],
    titleImages: ['/images/more/wt_more_icon_star.png', '/images/more/wt_more_icon_skill.png', '/images/more/wt_more_icon_train.png', '/images/more/wt_more_icon_class.png', '/images/more/wt_more_icon_recruit.png', '/images/more/wt_more_icon_weixin.png', '/images/more/wt_more_icon_about.png'],
    secondTitleImages: ['/images/more/wt_more_icon_skill.png', '/images/more/wt_more_icon_star.png', '/images/more/wt_more_icon_class.png', '/images/more/wt_more_icon_train.png', '/images/more/wt_more_icon_weixin.png', '/images/more/wt_more_icon_about.png', '/images/more/wt_more_icon_recruit.png'],
    links: ['http://study.qiyun.360.cn', 'https://code.360.cn/activity/detail?id=8', 'https://code.360.cn/activity/detail?id=6', 'https://code.360.cn/course','http://hr.360.cn/list','',''],
    // dates: ['2019-06-13 77:77:77', '2019-06-13 66:66:66', '2019-06-13 55:55:55', '2019-06-13 44:44:44', '2019-06-13 33:33:33', '2019-06-13 22:22:22', '2019-06-13 11:11:11']
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
      data: { id: wx.getStorageSync('UserData').weapp_openid},
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
      },
      fail: function() {
        wx.showToast({
          title: '个人中心请求服务器错误',
          duration: 2000
        });
      },
      complete: function() {
        var tmpMaintitles = [];
        var tmpTitleImages = [];
        var tmpSecondTitleImages = [];
        var tmpDates = [];

        for (var i = 0; i < that.data.response.length; i++) {
          var obj = that.data.response[i];
          tmpMaintitles.push(obj.lyric);
          tmpTitleImages.push(obj.images);
          // tmpSecondTitleImages.push(obj.updated_at);
          tmpDates.push(obj.updated_at);
        }
        that.setData({
          maintitles: tmpMaintitles,
          titleImages: tmpTitleImages,
          secondTitleImages: tmpSecondTitleImages,
          dates: tmpDates,
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