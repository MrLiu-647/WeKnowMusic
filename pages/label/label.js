var app = getApp();     // 取得全局App
Page({
  data: {
    song_name: null,
    singer: null,
    album_cover: null,
    lyric: null,
    hidden: false,
    checkboxItems: null,
    hidden: false,
    changed_detail: null,
    share_href: null,
    checkedd: null
  },

  chooseSpliceLongImg() {
    wx.navigateTo({
      url: '../WTMake/WTMake'
    })
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      song_name: options.song_name,
      singer: options.singer,
      album_cover: options.album_cover,
      lyric: options.lyric.split('|'),
    });
    var checkboxitems = []
    for (var i = 0; i < this.data.lyric.length; i++) {
      if (i == 2 | i == 1 | i == 3) {
        checkboxitems.push({ "name": this.data.lyric[i], "value": this.data.lyric[i], "checked": true });
      }
      else {
        checkboxitems.push({ "name": this.data.lyric[i], "value": this.data.lyric[i] });
      }
    }
    that.setData({
      checkboxItems: checkboxitems
    })
    console.log('checkboxItems:', checkboxItems)
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
    console.log("changed:", changed);
    this.setData({checkedd:checked})
    app.globalData.checked = this.data.checkedd;
    // this.setData({changed_detail:changed})
    console.log("checked checked:",e.detail.value);
  },
  save: function () {
    console.log("跳转到MTmake页");
    app.globalData.song_name = this.data.song_name;
    app.globalData.singer = this.data.singer;
    app.globalData.album_cover = this.data.album_cover;
    console.log("checked song_name:", this.data.song_name);
    console.log("checked singer:", this.data.singer);
    console.log("checked album_cover:", this.data.album_cover);
    // console.log("checked checked:", app.globalData.checked);
    wx.switchTab({
      url: '/pages/WTMake/WTMake'
    })
  },
    bindChangeText: function (e) {
    var that = this;
    that.setData({
      share_href: e.detail.value
    })
  }
})

