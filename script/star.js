window.onload = function () {
    // 屏幕的尺寸
    var screenW = document.documentElement.clientWidth;
    var screenH = document.documentElement.clientHeight;
    var htmlH = document.body.scrollHeight;
    var times = htmlH / screenH;

    // 2. 动态创建多个星星
    for(var i=0; i<(100*times); i++){
        var span = document.createElement('span');
        document.body.appendChild(span);

        //位置随机
        var x = parseInt(Math.random() * screenW);
        var y = parseInt(Math.random() * htmlH);
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.zIndex = "0";

        //大小随机
        var scale = Math.random() * 1.5;
        span.style.transform = 'scale('+ scale + ', ' + scale + ')';

        //频率随机
        var rate = Math.random() * 1.5;
        span.style.animationDelay = rate + 's';
    }
}
