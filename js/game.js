function Game() {
    this.snake = new Snake();
    this.food = new Food();

    this.snake.showSnake();
    this.food.randomLocation();
    this.score = 0;
}

// 游戏开始
var dsq;
Game.prototype.start = function () {
    var that = this;
    clearInterval(dsq);
    // 蛇要不断移动
    dsq = setInterval(function () {
        that.snake.move();

        var dead = that.snake.isDead();
        if (dead) {
            clearInterval(dsq);
            $('.dead').show(500);
        }
         var eat = that.snake.isEat(that.food);
         if(eat){
            
            that.food.randomLocation();
            that.snake.insertNewHead();
            that.updateScroe();
            
         }   

    }, 200)

    $(document).keydown(function (e) {
        var code = e.keyCode;
        switch (code) {
            case 37:
                that.snake.direction = 'left';
                
                break;
            case 38:
                that.snake.direction = 'top';
                
                break;
            case 39:
                that.snake.direction = 'right';
               
                break;
            case 40:
                that.snake.direction = 'bottom';
              
                break;
        }
    })
}



// 重新开始
Game.prototype.reStart = function(){
    // 刷新页面
    location.reload();
}

// 停止
Game.prototype.stop = function(){
    clearInterval(dsq);
}

// 更新分数
Game.prototype.updateScroe = function(){
    this.score += 100;
    $('#input').val('分数是：'+this.score)
}