var _ = {
  average: function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total / array.length;
  },
  contains: function(array, n) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === n)
        return true;
    }
    return false;
  },
  first: function(array) {
    return array[0];
  },
  last: function(array) {
    return array[array.length - 1];
  },
  max: function(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max)
        max = array[i];
    }
    return max;
  },
  min: function(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min)
        min = array[i];
    }
    return min;
  },
  shuffle: function(array) {
    var workArray = array.slice(0);
    var shuffled = [];
    while (workArray.length > 0) {
      if (workArray.length === 1) {
        shuffled.push(workArray[0]);
        break;
      }
        // shuffled.push(workArray[0]);
      else {
        var i = Math.floor(Math.random() * workArray.length);
        shuffled.push(workArray.splice(i, 1)[0]);
        // console.log('i: ' + i);
        // console.log('workArray: ' + workArray);
        // console.log('shuffled: ' + shuffled);
      }
    }
    return shuffled;
  }
};
