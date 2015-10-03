// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

  var elementsWithClassName = [];
  var prev = arguments[1] || document.children[0].children[1];

  if (typeof className !== "string") {
    console.log('Error! Input is not a string.');
    return;
  }

  if (prev.children.length === 0) {
    var arrayOfName = prev.className.split(' ');
    if (arrayOfName.indexOf(className) !== -1) {
      elementsWithClassName.push(prev);
    }
    return elementsWithClassName;
  }

  for (var i = 0; i < prev.children.length; i++) {
    var tempArrayOfElementsWithClassName = getElementsByClassName(className, prev.children[i]);
    if (tempArrayOfElementsWithClassName.length > 0) {
      elementsWithClassName = tempArrayOfElementsWithClassName.concat(elementsWithClassName);
    }
  }

  if (prev.className === className) {
      elementsWithClassName.unshift(prev);
  }
  return elementsWithClassName;
};
