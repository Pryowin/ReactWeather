var names = ['David', 'Amber','Maria'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('David'));

  // var person = {
  //   name: 'David',
  //   greet: function () {
  //       names.forEach( (name) => console.log(this.name + ' says hi to ' + name));
  //   }
  // };
  //
  // person.greet();

  // function add (a, b) {
  //   return a + b
  // };
  //
  // console.log(add(1,3));
  // console.log(add(9,0));

var addStatement =(a,b) => {
  return a+b;
};

var addExpression = (a,b) =>  a+b;

console.log(addStatement(2,2));
console.log(addStatement(4,5));

console.log(addExpression(2,3));
console.log(addExpression(5,7));
