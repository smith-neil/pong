(function (window, document, moodule) {

  var Player = moodule.require('Player');
  var Ai = moodule.require('Ai');
  var Ball = moodule.require('Ball');
  var constants = moodule.require('constants');
  var collider = moodule.require('collider');
  
  var canvas,
      ctx,
      keystate;

  var player,
      ai,
      ball;

  function init () {
    canvas = document.getElementById('pongGame');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext('2d');
    constants.WIDTH = canvas.width;
    constants.HEIGHT = canvas.height;

    createPlayer();
    createAi();
    createBall();

    function createPlayer() {
      var w = 20,
          h = 100,
          x = w,
          y = (constants.HEIGHT - h) / 2;

      player = Object.create(Player);
      player.init(x, y, w, h);
    }

    function createAi() {
      var w = 20,
          h = 100,
          x = constants.WIDTH - w * 2,
          y = (constants.HEIGHT - h) / 2;

      ai = Object.create(Ai);
      ai.init(x, y, w, h);
    }

    function createBall() {
      var w = 20,
          h = 20,
          x = (constants.WIDTH - w) / 2,
          y = (constants.HEIGHT - h) / 2;

      ball = Object.create(Ball);
      ball.init(x, y, w, h);
    }
  }

  function main() {
    init();

    var loop = function () {
      update();
      draw();

      window.requestAnimationFrame(loop, canvas);
    }

    window.requestAnimationFrame(loop, canvas);
  }

  function update() {
    player.update();
    ai.update({x: ball.x + ball.x / 2, y: ball.y + ball.h / 2});
    ball.update();

    if (collider.check(player, ball))
      ball.reverseX();
    if (collider.check(ai, ball))
      ball.reverseX();

    if (ball.x <= 0) {
      awardPoint(ai);
    }
    if (ball.x >= constants.WIDTH - ball.w) {
      awardPoint(player);
    }

    function awardPoint(winner) {
      winner.score++;
      ai.reset();
      player.reset();
      ball.reset();
    }
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, constants.WIDTH, constants.HEIGHT);

    player.draw(ctx);
    ai.draw(ctx);
    ball.draw(ctx);

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(player.score + ' : ' + ai.score, constants.WIDTH / 2, 30);

    ctx.save();
  }

  main();

})(window, document, moodule);