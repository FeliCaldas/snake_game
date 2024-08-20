const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;

let snake = [{ x: gridSize * 5, y: gridSize * 5}];
let direction = { x: 1, y: 0 };

let food = { x: gridSize * 10, y: gridSize * 10};

let gameInterval;


function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, gridSize, gridSize)
    });
}