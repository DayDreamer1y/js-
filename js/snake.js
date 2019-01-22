// 蛇构造函数
function Snake() {
  // 属性
  this.elements = [];   // 蛇组（蛇头和蛇身），存放的一组jQuery对象格式div,蛇头存放在蛇组的最前面。
  this.direction = 'right';   // 蛇移动的方向 left 、right、bottom、top

}

// 方法
Snake.prototype.getNewHeadLocation = function () {
    // 1.如何计算新蛇头位置
    // 检测是否有旧的蛇头，没有蛇头，位置就是0，0
    // 获取旧蛇头
    var oldHead = this.elements[0];
    if (oldHead == undefined) {
        // 若将来返回多个值时，可以返回数组字面量
        // 若返回的值时有意义的，则建议返回一个对象字面量
        return {
            left: 0,
            top: 0
        };
    } else {
        var x = oldHead.position().left;
        var y = oldHead.position().top;
        // 有蛇头 判断方向
        // 就在旧蛇头的基础上 更改left 和 top 的值
        //         右 left + 20
        if (this.direction == 'right') {
            x = x + 20;
          } else if (this.direction == 'left') {
            x = x - 20;
          } else if (this.direction == 'top') {
            y = y - 20;
          } else if (this.direction == 'bottom') {
            y = y + 20;
          }
      
          return { left: x, top: y };
    }
}

//  增加新蛇头
Snake.prototype.insertNewHead = function () {
    // 获取将来新蛇头的位置
    var location = this.getNewHeadLocation();
    // 检测是否㓟旧的蛇头，吧旧蛇头的类名更改为 snake-body 
    var oldHead = this.elements[0];
    if (oldHead != undefined) {
        oldHead.removeClass().addClass('snake-body')
    }
    // 动态创建新蛇头把他追加到地图中
    var newHead = $('<div class="snake-head"></div>').appendTo('#map');
    // 吧新蛇头放入蛇组的最前面
    this.elements.unshift(newHead);
    // 吧计算好的位置给新蛇头
    newHead.css({
        left:location.left,
        top:location.top
    })
}

// 显示一条蛇
Snake.prototype.showSnake = function () {
    for (var i = 1; i < 5; i++) {
        this.insertNewHead();
    }
}

// 蛇移动
Snake.prototype.move = function () {
    // 删除蛇尾
    var last = this.elements.pop();
   
    last.remove();
    // 增加蛇头
    this.insertNewHead();
}

// 蛇死没死
Snake.prototype.isDead = function () {
    // 检测蛇头的位置
    var oldHead = this.elements[0];
    var x = Math.round(oldHead.position().left);
    var y = Math.round(oldHead.position().top);

    if (x < 0 || x >= $('#map').width() || y < 0 || y >= $('#map').height()) {
        return true;
    } else {
        return false;
    }
}
// 蛇是否吃掉食物
Snake.prototype.isEat = function(food){
     var head = this.elements[0];
     var headx =Math.round(head.position().left) ; 
     var heady =Math.round(head.position().top) ;
     if(headx == food.x && heady == food.y){
         return true;
     }else{
         return false;
     }

}