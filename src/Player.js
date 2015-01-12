moodule.define('Player', ['keyListener', 'constants'], function (keyListener, constants) {
  return {
    x: null,
    y: null,
    w: null,
    h: null,
    f: null,
    s: null,
    score: null,
    init: init,
    update: update,
    draw: draw,
    reset: reset
  }

  var initialPos = null;

  function init (x, y, w, h, f, s) {
    this.score = 0;
    this.x = x || 1;
    this.y = y || 1;
    this.w = w || 1;
    this.h = h || 1;
    this.f = f || '#fff';
    this.s = s || 5;

    initialPos = {x: this.x, y: this.y};
  }

  function update () {
    if (keyListener.isKeyDown('Up')) {
      this.y -= this.s;
    }
    if (keyListener.isKeyDown('Down')) {
      this.y += this.s;
    }

    if (this.y <= 0)
      this.y = 0;
    if (this.y + this.h >= constants.HEIGHT)
      this.y = constants.HEIGHT - this.h;
  }

  function draw (ctx) {
    ctx.fillStyle = this.f;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  function reset() {
    this.x = initialPos.x;
    this.y = initialPos.y;
  }
});