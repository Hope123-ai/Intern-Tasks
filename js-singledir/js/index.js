

let canvas, ctx, gravity, ball, friction, ball2

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');


    canvas.width = 800
    canvas.height = 800


    gravity = 0
    friction = 0.5

    ball = {
        bounce: 0.75,
        radius: 30,
        x: canvas.width / 2,
        y: canvas.height / 2,
        velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
        velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
    }

    ball2 = {
        bounce: 0.95,
        radius: 50,
        x: canvas.width / 2,
        y: canvas.height / 2,
        velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
        velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
    }


    window.requestAnimationFrame(update)
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)


    ctx.beginPath()

    ctx.fillStyle = 'red'
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";

    ctx.arc(
        ball.x, ball.y,
        ball.radius,
        0, Math.PI * 2
    )
    ctx.stroke();
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'black';


    ctx.arc(
        ball2.x, ball2.y,
        ball2.radius,
        0, Math.PI * 2
    )
    ctx.stroke();
    ctx.fill()
}


function update() {

    window.requestAnimationFrame(update)




    if (ball.y + ball.radius >= canvas.height) {
        ball.velY *= -ball.bounce
        ball.y = canvas.height - ball.radius
        ball.velX *= friction
    }

    if (ball.y - ball.radius <= 0) {
        ball.velY *= -ball.bounce
        ball.y = ball.radius
        ball.velX *= friction
    }


    if (ball.x - ball.radius <= 0) {
        ball.velX *= -ball.bounce
        ball.x = ball.radius
    }

    if (ball.x + ball.radius >= canvas.width) {
        ball.velX *= -ball.bounce
        ball.x = canvas.width - ball.radius
    }


    if (ball.velX < 0.01 && ball.velX > -0.01) {
        ball.velX = 0
    }
    if (ball.velY < 0.01 && ball.velY > -0.01) {
        ball.velY = 0
    }


    ball.velY += gravity


    ball.x += ball.velX
    ball.y += ball.velY


    if (ball2.y + ball2.radius >= canvas.height) {
        ball2.velY *= -ball2.bounce
        ball2.y = canvas.height - ball2.radius
        ball2.velX *= friction
    }

    if (ball2.y - ball2.radius <= 0) {
        ball2.velY *= -ball2.bounce
        ball2.y = ball2.radius
        ball2.velX *= friction
    }


    if (ball2.x - ball2.radius <= 0) {
        ball2.velX *= -ball2.bounce
        ball2.x = ball2.radius
    }

    if (ball2.x + ball2.radius >= canvas.width) {
        ball2.velX *= -ball2.bounce
        ball2.x = canvas.width - ball2.radius
    }


    if (ball2.velX < 0.01 && ball2.velX > -0.01) {
        ball2.velX = 0
    }
    if (ball2.velY < 0.01 && ball2.velY > -0.01) {
        ball2.velY = 0
    }


    ball2.velY += gravity

    ball2.x += ball2.velX
    ball2.y += ball2.velY


    draw()
}

document.addEventListener('DOMContentLoaded', init);