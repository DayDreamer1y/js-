// 食物对象
function Food(){    
    // 属性
    this.x = 0;
    this.y = 0;
    this.elements = $('<div class="food"></div>').appendTo('#map');

}
// 方法
Food.prototype.randomLocation = function(){
    // 获取横向最大的格子数
    var maxXCount = $('#map').width()/20;
    var maxYCount = $('#map').height() / 20;
    
    // 随机横向范围内的一个格子数[0,maxXCount)
    var xNum =parseInt(Math.random() * maxXCount) ;
    var yNum =parseInt(Math.random() * maxYCount) ;

    // 计算位置的值
    this.x = xNum * 20;
    this.y = yNum * 20;

    //  把计算好的值给食物对象的元素样式
    this.elements.css({
        left:this.x,
        top:this.y
    })
}