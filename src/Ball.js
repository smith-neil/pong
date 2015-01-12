moodule.define('Ball', ['constants'], function (constants) {
  return {
    x: null,
    y: null,
    w: null,
    h: null,
    f: null,
    s: null,
    init: init,
    update: update,
    draw: draw,
    reset: reset,
    reverseX: reverseX
  }

  var speed,
      initialPos;

  function init (x, y, w, h, f, s) {
    this.x = x  || 1;
    this.y = y  || 1;
    this.w = w  || 1;
    this.h = h  || 1;
    this.f = f  || '#fff';
    this.sX = s || 5; 
    this.sY = s || 5;

    speed = s || 5;
    initialPos = {x: this.x, y: this.y};
  }

  function update () {
    if (this.y <= 0)
      this.sY = speed;
    else if (this.y + this.h >= constants.HEIGHT)
      this.sY = speed * -1;

    this.x += this.sX;
    this.y += this.sY;
  }

  function draw (ctx) {
    ctx.fillStyle = this.f;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  function reset() {
    this.x = initialPos.x;
    this.y = initialPos.y;
  }

  function reverseX() {
    this.sX *= -1;
  }
});