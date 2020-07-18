var t = getApp();

Page({
  data: {
    images: t.globalData.introduce.images,
    shortName: t.globalData.introduce.shortName,
    mapCopyright: t.globalData.introduce.mapCopyright,
    imgCDN: t.imgCDN,
    isShowToast: !1
  },
  onLoad: function (o) {
  },
  onShareAppMessage: function (o) {
    return "button" === o.from && console.log(o.target), {
      title: t.globalData.introduce.name + " - 校园导览",
      path: "/pages/index",
      imageUrl: t.imgCDN + t.globalData.introduce.share,
      success: function (t) { },
      fail: function (t) { }
    };
  },
  showToast: function () {
    var t = this;
    t.data.count = parseInt(t.data.count) ? parseInt(t.data.count) : 3e3, t.setData({
      isShowToast: !0
    }), setTimeout(function () {
      t.setData({
        isShowToast: !1
      });
    }, t.data.count);
  }
});