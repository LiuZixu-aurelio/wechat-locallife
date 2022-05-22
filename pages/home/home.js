// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    swiperList2: [
      {id:1,img:'/images/lunbo.png',link:'11'},
      {id:2,img:'/images/lunbo2.png',link:'2'}
    ],
    jiugong: [
      {id:1,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:2,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:3,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:4,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:5,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:6,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:7,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:8,name:"美食",icon:"../../images/tabs/light-select.png"},
      {id:9,name:"美食",icon:"../../images/tabs/light-select.png"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slodes',
      method:'GET',
      success: (res) => {
        console.log(res)
        this.setData ({
          swiperList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})