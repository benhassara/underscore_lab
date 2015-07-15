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
    //shuffle array elements, return shuffled version of the array
    var workArray = array.slice(0); //shallow copy
    var shuffled = [];
    while (workArray.length > 0) {
      if (workArray.length === 1) {
        shuffled.push(workArray[0]);
        break;
      }
      else {
        var i = Math.floor(Math.random() * workArray.length);
        shuffled.push(workArray.splice(i, 1)[0]);
        // console.log('i: ' + i);
        // console.log('workArray: ' + workArray);
        // console.log('shuffled: ' + shuffled);
      }
    }
    return shuffled;
  },
  sample: function(array, n) {
    if (array.length === 1) {
      //if given array only has 1 element, only 1 to return
      return array[0];
    }
    if (n === undefined) {
      //if n isn't given, slice out a single random element
      var i = Math.floor(Math.random() * array.length);
      return array.slice(i, i + 1)[0];
    }
    else {
      //if n is given, have to return n random selections
      //algorithm below does it without repeating element selections
      var wrk = array.slice(0);
      var count = 0;
      var out = [];
      while (count < n && count < array.length) {
        var i = Math.floor(Math.random() * wrk.length);
        out.push(wrk.splice(i, 1)[0]);
        count++;
      }
      return out;
    }
  },
  difference: function(arr, comp) {
    //return elements in arr that aren't in comp
    var out = [];
    for (var i = 0; i < arr.length; i++) {
      if (!(this.contains(comp, arr[i])))
        out.push(arr[i]);
    }
    return out;
  },
  indexOf: function(array, val) {
    //return index of val in array
    //if not found, return -1
    if (this.contains(array, val)) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === val)
          return i;
      }
    }
    else {
      return -1;
    }
  },
  pluck: function(objarray, prop) {
    var out = [];
    for (var i = 0; i < objarray.length; i++) {
      out.push(objarray[i][prop]);
    }
    return out;
  },
  each: function(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
  },
  compact: function(array) {
    var wrk = array.slice(0);
    if (this.contains(array, undefined)) {
      while (this.contains(wrk, undefined)) {
        var i = wrk.indexOf(undefined);
        wrk.splice(i, 1);
      }
      return wrk;
    }
    else return array;
  }
};
