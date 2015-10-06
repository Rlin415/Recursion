// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var string = '';
  if (typeof obj === 'number' || obj === true || obj === false || obj === null) {
    return string.concat(obj);
  }

  if (Array.isArray(obj)) {
    string = '[';
    obj.forEach(function(element, idx) {
      if (typeof element === 'string') {
        element = '\"' + element + '\"';
      } else if (Array.isArray(element)) {
        element = stringifyJSON(element);
      }
      if (obj.length > 1 && idx !== 0) {
        string = string.concat(',', element);
      } else {
        string  = string.concat(element);
      }
    });
    return string + (']');
  }

  return '\"' + obj + '\"';
};
