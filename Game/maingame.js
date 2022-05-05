var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// context 시험에 나옴

class player
{
    constructor(position_x,position_y,radius,color)
    {
        this.position = position_x;
        this.position = position_y;        
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.position_x, this.position_y, this.radius, 0, 2*Math.PI);
        context.fillstyle = this.color;
        context.fill();
    }
}

var char_player = new player(100,100,20, 'skyblue');
char_player.draw();

canvas.onclick = function(event)
{ 
// 캔버스의 위치를 고려해 마우스 좌표를 취득
const x = event.clientX - context.canvas.offsetLeft; 
const y = event.clientY - context.canvas.offsetTop; 
// 마우스 클릭한 곳에 사각형 그리기 
context.fillRect(x-15, y-15, 30, 30); 
}

