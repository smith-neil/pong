moodule.define('collider', function () {
  return {
    check: check
  }

  function check(obj1, obj2) {
    return obj1.x < obj2.x + obj2.w &&
           obj1.x + obj1.w > obj2.x &&
           obj1.y < obj2.y + obj2.h &&
           obj1.h + obj1.y > obj2.y;
  }
})