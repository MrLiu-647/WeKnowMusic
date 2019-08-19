// components/findListItem/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    detail: {
      type: String,
      value: ''
    },
    imageSrc: {
      type: String,
      value: ''
    },
    link: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /** 此处可以itemOntap:function(e)；itemOntap(e) 但是不能 itemOntap:e => */
    itemOntap:function(e) {
      console.log(e);
      var that = this;
      var link = e.currentTarget.dataset.link;
      var title = e.currentTarget.dataset.title;
      that.triggerEvent('findItemTap', {
        link, title
      }, {});
    }
  }
})