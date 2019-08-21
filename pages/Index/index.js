//获取应用实例
const app = getApp()

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            lang: "zh_CN",
            success: function (response) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.switchTab({
                url: '/pages/WTHome/WTHome',
              })
              wx.login({
                success: res => {
                  // console.log(res)
                  let data = {
                    code: res.code,
                    nickname: response.userInfo.nickName,
                    avatar: response.userInfo.avatarUrl,
                    country: response.userInfo.country ? response.userInfo.country : '',
                    province: response.userInfo.province ? response.userInfo.province : '',
                    city: response.userInfo.city ? response.userInfo.city : '',
                    gender: response.userInfo.gender ? response.userInfo.gender : '',
                    language: response.userInfo.language ? response.userInfo.language : '',
                  }
                  wx.request({
                    url: 'http://10.216.0.152/api/login',
                    method: 'POST',
                    data: data,
                    // header: {
                    //   'Content-Type': 'application/x-www-form-urlencoded'
                    // },
                    success: function (res) {
                      if (res.statusCode != '200') {
                        return false;
                      }
                      wx.setStorageSync('access_token', res.data.access_token)
                      wx.setStorageSync('UserData', res.data.data ? res.data.data : '')
                      // console.log(wx.getStorageSync('UserData'))
                    },
                    
                    fail: function (e) {
                      wx.showToast({
                        title: '服务器错误',
                        duration: 2000
                      });
                      that.setData({
                        isClick: false
                      })
                    },
                  });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      // console.log(e.detail.userInfo);
      app.globalData.userInfo = e.detail.userInfo;
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
      wx.switchTab({
        url: '/pages/WTHome/WTHome',
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})
