// Closure function with the use of currying
// Closure provides data security.It is created every time a function is created.
// A closure having access to the parent scope, even after the parent function has closed.
// Curried functions are also an important application of closure. They split a function with many parameters into functions with only one parameter each. 


// example
function curry(a){
    return (b)=>{
        return (c)=>{
            const result=a+b+c;
            console.log("the sum is " ,result);
            return result;
        }
}
}
curry(2)(3)(4);