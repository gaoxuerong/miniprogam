//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     top: '',
     all: ''
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success: (res) => {
        this.setData({
          "top": res.data.top_stories,
          "all": res.data.stories
        })
      }
    })
  }
  
})
