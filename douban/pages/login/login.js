var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

   //监听输入的帐号
  usernameInput: function (e) {
    this.data.username = e.detail.value;
  },
  //监听输入的密码
  passwordInput: function (e) {
    this.data.password = e.detail.value;
  },

    loginBtnClick:function(){

      console.log('帐号：' + this.data.username);
      console.log('密码：' + this.data.password);

      //用户名和密码验证的过程
      app.appData.userinfo={ username:this.data.username,password:this.data.password }
      if (this.data.username.length == 0 || this.data.password.length == 0) {
        wx.showToast({
          title: '用户名和密码不能为空',
          icon: 'none',
          duration: 2000
        })
      } 
      else if (this.data.username == "wangmengmeng" && this.data.password == "asdf123") {
        wx.switchTab({
          url: '../profile/profile',
          success: function (res) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      } else{
    wx.showToast({
      title: '用户名或密码不正确',
      icon: 'none',
      duration: 2000
    })
      }
    },
  usernameInput:function(event){
    this.setData({
      username:event.detail.value
    })
  },
  passwordInput: function (event) {
    this.setData({
      password:event.detail.value
    })
  }
})