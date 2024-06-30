// 获取当前日期的星期几
function getDayOfWeek() {
  var today = new Date();
  var dayOfWeek = today.getDay();
  // getDay() 返回0-6，其中0是周日，6是周六
  // 根据你的需求调整星期的对应关系
  return dayOfWeek;
}

// 设置背景图片
function setBackground() {
  var day = getDayOfWeek();
  var imagePath = 'images/back0' + day + '.jpg'; // 因为getDay()返回的0是周日，所以需要+1
  document.body.style.backgroundImage = 'url(' + imagePath + ')';
}

// 页面加载时设置背景
window.onload = setBackground;
