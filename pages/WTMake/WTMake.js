// pages/WTOpen/WTOpen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArray:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadListData();
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
  loadListData(){
   var that = this;
    wx.request({
      url: 'https://code.360.cn/api/opensource/list',
      header:{
        'Content-Type': 'application/json'
      },
      success:function(res){
        console.log(res);
        that.setData({
          listArray: res.data.data
        })
      },
      fail:function(error){

      }

    })
  },
  openItemTap: e => {
    var link = encodeURIComponent(e.detail.link);
    var title = e.detail.title;
    console.log(link);
    if (link.length > 0) {
      wx.navigateTo({
        url: `/pages/WTWebView/WTWebView?link=${link}&titleStr=${title}`
      })
    }
  }
})