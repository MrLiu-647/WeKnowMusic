
var WxParse = require('../../lib/wxParse.js');
// pages/WTHome/WTHome.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuItems: ["开心", "伤心", "努力", "彷徨", "激动", "心碎", "感谢"],
    menuItemId:"item0",
    currentIndex:0,
    string:"0"
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
    var that = this;
    wx.request({
      url: 'https://weekly.75team.com',//奇舞周刊
      // url:'https://blog.csdn.net/ZVAyIVqt0UFji',//csdn
      // url:'https://www.zcfy.cc',//众城翻译数据可以看到
      // url:'https://testerhome.com/columns/Qtest',//Qtest不OK
      // url:'https://www.jianshu.com/u/3db23baa08c7',//qishare
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      },
      success: function (res) {
        var article = res.data;
        // console.log (String(res.data));
        // WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
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
  itemOnTap: function (e) {
    //当前点击的
    var index = e.currentTarget.dataset.index;
    var lastIndex = this.data.currentIndex;
    if (index == lastIndex) {
      return;
    }
    this.setData({
      currentIndex: index,
      menuItemId: `item${index == 0 ? 0 : index}`,
    })
    
  },
})