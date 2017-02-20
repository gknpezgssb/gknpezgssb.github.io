function resize() {
  var _width = window.innerWidth
  var _height = window.innerHeight
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}


window.addEventListener("resize", resize)
