 // sort function is used to sort the array elements with compare function for numeric array sorting
 let arr=[1,11,8,7,6,5];
 console.log("original array is: ",arr);
 arr.sort(sortFunction);
 function sortFunction(a,b){
     return a-b;
 }
 console.log("array after sort: ",arr);

 // Sort the string

 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits);
 fruits.sort();
 console.log(fruits);

 // sort the string array in reverse order

const fruitReverse = ["Banana", "Orange", "Apple", "Mango"];
fruitReverse.reverse();
 console.log(fruitReverse);