// components/moreListItem/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   title:{
     type:String,
     value:'前端星计划'
   },
   imageSrc:{
     type: String,
     value: ''
   },
   link:{
     type:String,
     value:''
   }

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
    itemOntap(e){
      var link = e.currentTarget.dataset.link;
      var title = e.currentTarget.dataset.title;
      this.triggerEvent('moreItemTap',{
        link,title
        },{});
    }
  }
})
