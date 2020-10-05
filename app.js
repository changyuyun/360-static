App({
  data: () => ({
	  "version": "1.0.0"
  }),
  onLoad () {console.log("load")},
  onReady () {console.log("ready")},
  onUnload () {console.log("unload")},
  onShow () {console.log("show")},
  onHide () {console.log("hide")}
})
