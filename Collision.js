function isTouching(obj1, obj2) {
    if (obj1.position.x - obj2.position.x < 5 + 200
      && obj2.position.x - obj1.position.x < 5 + 200
      && obj1.position.y - obj2.position.y < 5 + 10
      && obj2.position.y - obj1.position.y < 5 + 10) {
      return true;
      }
    else {
      return false;
    }
}
