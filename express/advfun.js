//First class citizen function

//defines the add() function and assign the function name to the variable sum
function add(a,b){
    return a+b;
}
let sum = add;
//passing a function to another function 
function ave(a,b, fnc){
    return fnc(a,b);
}
let result = ave(4,5, sum);
console.log(result);
//fnction returns a function that compares two objects by a property
function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  let products = [
      {name:'c iphone', price:900},
      {name:'a samsung', price:850},
      {name:'b Sony xperia' , price:700}
  ]
  console.log('product sorted by name :');
  products.sort(compareBy('name'));

  console.table(products);
  
  console.log('product sorted by price :');
  products.sort(compareBy('price'));

  console.table(products);

//   console.table(products);

