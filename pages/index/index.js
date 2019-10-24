Page({
  data: {
    region: ['浙江省', '杭州市','余杭区'],
    now:''
  },
  handerchange:function(event){
    this.setData({
      region:event.detail.value
    })
    this.getWeater()
  },
  getWeater:function(){
    var that = this
    wx.request({
      url:'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:'962df967fd6a4e90b3c3cb515ce3075f'
      },
      success:function(res){
        that.setData({
          now:res.data.HeWeather6[0].now
        })
      }
    })
  },
  onLoad: function (options) {
    this.getWeater()
  },
})