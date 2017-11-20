import Vue from 'vue'

Vue.directive('drag', {
  bind: function (el, binding, vnode) {
    var isChangeSize;
    if (binding.arg !== undefined) {
      isChangeSize = true
    } else {
      isChangeSize = false
    }
    var offsetX = 0;
    var offsetY = 0;
    var barStyle = '';
    var boxStyle = '';
    var width = 0;
    var height = 0;
    el.addEventListener('mousedown', down)
    function down(e) {
      offsetX = (e.pageX - el.offsetLeft);//鼠标到被移动元素的距离
      offsetY = (e.pageY - el.offsetTop);
      console.log('down',offsetX);
      if (isChangeSize) {
        barStyle = el.firstChild.firstChild.currentStyle
          ? el.firstChild.firstChild.currentStyle
          : window.getComputedStyle(el.firstChild.firstChild, null);
        boxStyle = el.currentStyle
          ? el.currentStyle
          : window.getComputedStyle(el, null);

        width = Number(boxStyle.getPropertyValue("width").replace("px", ""));
        height = Number(boxStyle.getPropertyValue("height").replace("px", ""));
        var left = Math.floor(el.firstChild.firstChild.getBoundingClientRect().left);
        var right = left + Number(barStyle.getPropertyValue("width").replace("px", ""));
        var top = Math.floor(el.firstChild.firstChild.getBoundingClientRect().top);
        var bottom = top + Number(barStyle.getPropertyValue("height").replace("px", ""));
        if (e.clientX <= right && e.clientX >= left && e.clientY >= top && e.clientY <= bottom) {
          addEventListener('mousemove', changeSize);
          addEventListener('mouseup', up);
        }else {
          addEventListener('mousemove', move);
          addEventListener('mouseup', up);
        }
      }
      else {
        addEventListener('mousemove', move);
        addEventListener('mouseup', up);
      }
    }
    function move(e) {
      el.style.left = (e.pageX - offsetX) + 'px';
      el.style.top = (e.pageY - offsetY) + 'px';
    }
    function up() {
      removeEventListener('mousemove', move);
      removeEventListener('mousemove', changeSize);
      removeEventListener('mouseup', up);
    }
    function changeSize(e) {
      // console.log(width);
      // console.log(e.pageX - offsetX);
      // console.log(el.offsetLeft);
      el.style.width = width + (e.pageX - offsetX) - el.offsetLeft + 'px';
      el.style.height = height + (e.pageY- offsetY) - el.offsetTop + 'px';
    }
  }
})
