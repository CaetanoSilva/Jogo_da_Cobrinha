let convas = document.getElementById("snake");
let context = convas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "rigth";

function criarBG(){
    context.fillStyle ="lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX =snake[0].x;
    let snakey =snake[0].y;

        if(direction == "right") snakeX += box;
        if(direction == "left")snakeX -= box;
        if(direction == "up")snakeY -= box;
        if(direction == "down")snakeY += box;
        
        snake.pop();

        let newHead = {
            x:snakeX,
            y:snakey
        }
        snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo,100);

