//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    id: '北京',
    future:{},
    sk: {},
    today: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    this.getResult()
  },
  getCityId: function(event) {
    this.setData({
      id: event.detail.value === '' ? '北京' : event.detail.value
    })
    this.getResult()
  },
  getResult: function() {
    wx.request({
      url: 'http://v.juhe.cn/weather/index',
      data: {
        cityname: this.data.id,
        key: 'f6853b2d7ded18a5eeab1baa2779759f'
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          future: res.data.result.future,
          sk: res.data.result.sk,
          today: res.data.result.today
        })
      },
      fail: () => {

      }
    })
  }
})