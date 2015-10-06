// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
  if (typeof obj === 'number' || obj === true || obj === false || obj === null) {
    return string.concat(obj);
  }

// Stringify Array
  if (Array.isArray(obj)) {
    string = '[';
    obj.forEach(function(element, idx) {
      if (typeof element === 'string') {
        element = '\"' + element + '\"';
      } else if (Array.isArray(element)) {
        element = stringifyJSON(element);
      } else if (typeof element === 'object') {
        element = stringifyJSON(element);
      }
      if (idx > 0) {
        string = string.concat(',', element);
      } else {
        string  = string.concat(element);
      }
    });
    return string + (']');
  }

//Stringify Object
  if (typeof obj === 'object') {
    string = '{';
    var tempString;
    var idx = 0;
    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        obj[key] = '\"' + obj[key] + '\"';
      } else if (typeof obj[key] === 'object') {
        obj[key] = stringifyJSON(obj[key]);
      } else if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      if (idx > 0) {
        string = string.concat(',\"' + key + '\"', ':', obj[key]);
      } else {
        string = string.concat('\"' + key + '\"', ':', obj[key]);
      }
      idx++;
    }
      return string.concat('}');
    }

  return '\"' + obj + '\"';
};
