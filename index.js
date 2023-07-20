
// Q1....

function display(){
    console.log("hello")

}
display();

// Q.2.....

function add(a,b){
    return a+b;  
}
let a=add(3,4);
console.log(a)


// Q3......

let b=()=>{
    console.log("I am arrow function")
}
b();


// Q.4.....
   var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    }
    girl();

// Q.5...... 

var x = 21;
girl2 ();
console.log(x)
function girl2() {
    console.log(x);
    var x = 20;
};


// Q6.....
var x = 21;
p();
r();

  function p() {
    
   x = 20;
  console.log(x);
};
 function r() {
    
    x = 40;
   console.log(x);
};


// Q7.....

let num=8;

function fact(n){
    let factorial=1;
    for(let i=1;i<=n;i++){
  factorial=factorial*i;
  }
    return factorial;
}
let finalans=fact(num);

console.log("factoraial of",num,"is",finalans);



           // ********************************************************************************
              //                              Day 2
           // ********************************************************************************      
                   
           
// Q.2......
   
    const Abc = function(){
        let value = 20;
        console.log(value);
    }
    Abc();


// Q.3.....
var w = 10;
(function (){
    console.log(w);
    var w = 20;
})();

// Q.4........
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")



Abb();
    const Abb = function(){
        let value = 20;
        console.log(value);
    }


  console.log("hii")



    async function fetchData(){
        const response= await fetch("https")
    }