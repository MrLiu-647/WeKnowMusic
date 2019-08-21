//获取应用实例
const app = getApp()

// components/homeListItem/homeListItem.js
Component({

  ready: function () {
    console.log(11111);
  },
  /**
   * 组件的属性列表
   */
  properties: {
    lyric:{
      type:String,
      value: '蝴蝶眨几次眼睛才学会飞行。夜空洒满了星星，但几颗会落地。我飞行，但你坠落之际。很靠近，还听见呼吸。对不起，我却没捉紧你。你不知道我为什麽离开你。我坚持不能说放任你哭泣。你的泪滴像倾盆大雨，碎了满地。在心里清晰。你不知道我为什麽狠下心。盘旋在你看不见的高空里。多的是，你不知道的事。'
    },
    date:{
      type:String,
      value:'2019-06-13 19:28:50'
    },
    images:{
      type:String,
      value:''
    },
    nickname:{
      type: String,
      value: ''
    },
    avatar: {
      type: String,
      value: ''
    },
    singer: {
      type: String,
      value: ''
    },
    song_name: {
      type: String,
      value: ''
    },
    data: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    data: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    homeOntap(e) {
      var link = e.currentTarget.dataset.link;
      var title = e.currentTarget.dataset.title;
      this.triggerEvent('homeItemTap', {
        link, title
      }, {});
    }
  },
  // onLoad() {
  //   console.log("123123")
  // },
})
