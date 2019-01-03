const WxParse = require('../../wxParse/wxParse.js')
Page({
  data: {
    art: {},
    content: "",
    id: ''
  },
  onLoad: function(options) {
    wx.request({
      url: "http://news-at.zhihu.com/api/4/news/" + options.id,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        this.setData({
          "art": res.data,
          "content": WxParse.wxParse('content','html',res.data.body,this,0)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})