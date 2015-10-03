// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

  var result = [];
  var prev = arguments[1] || document.children[0].children[1];
  /*if (typeof className !== string) {
    console.log('Error! Input is not a string.');
    return;
  }*/

  if (prev.children.length === 0) {
    var arrayOfNames = prev.className.split(' ');
      if (arrayOfNames.indexOf(className) !== -1) {
        result.push(prev);
      }
      return result;
  }

  for (var i = 0; i < prev.children.length; i++) {
    var result2 = getElementsByClassName(className, prev.children[i]);
    if (result2.length > 0) {
      result = result2.concat(result);
    }
  }

  if (prev.className === className) {
      result.unshift(prev);
  }
  return result;
};
