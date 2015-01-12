moodule.define('keyListener', function () {
  var keys = [];

  init();

  return {
    isKeyDown: isKeyDown,
    isKeyUp: isKeyUp
  }

  function init() {
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
  }

  function isKeyDown(key) {
    return keys.indexOf(key) > -1;
  }

  function isKeyUp(key) {
    return keys.indexOf(key) === -1; 
  }

  function onKeyDown(e) {
    var key = e.keyIdentifier;
    var idx = keys.indexOf(key);

    if (idx === -1)
      keys.push(e.keyIdentifier);
  }

  function onKeyUp(e) {
    var idx = keys.indexOf(e.keyIdentifier);

    if (idx > -1)
      keys.splice(idx, 1);
  }
});