
var app = getApp()
Page({
  data: {
    share_href: null,
    song_name: null,
    singer: null,
    album_cover: null,
    lyric: null
  },
  save :function(){
    console.log("请求远程数据库");
    console.log(this.data.share_href);
    var that = this;
    wx.request({
      url: 'http://10.216.0.152/api/query/song?link=' + this.data.share_href,
      method: 'POST',
      success: function(res) {
        let music_info = res.data.data;
        that.setData({song_name: music_info.song_name})
        that.setData({singer: music_info.singer})
        that.setData({album_cover: music_info.album_cover})
        that.setData({lyric: music_info.lyric})
        wx.navigateTo({
          url: '/pages/label/label?song_name=' + that.data.song_name + '&singer=' + that.data.singer+'&album_cover='+that.data.album_cover+'&lyric='+that.data.lyric
          })
      },
      fail: function (e) {
        console.log('请求失败');
      }
    })
  },
  bindChangeText :function(e){
    var that = this;
    that.setData({
      share_href: e.detail.value
    })
  }
})
