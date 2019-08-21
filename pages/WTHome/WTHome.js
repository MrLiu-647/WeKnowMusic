
var WxParse = require('../../lib/wxParse.js');
// pages/WTHome/WTHome.js

Page({
  userInfo: {},
  /**
   * 页面的初始数据
   */
  data: {
    menuItems: ["周杰伦", "林俊杰", "王力宏", "李荣浩", "陈奕迅", "毛不易", "五月天", "梁博", "邓紫棋", "许嵩", "汪苏泷", "王菲" , "..."],
    menuItemId:"item0",
    currentIndex:0,
    string:"0",
    arrayList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://10.216.0.152/api/list',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          arrayList: res.data.data,
        })
        console.log(that.data.arrayList)
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