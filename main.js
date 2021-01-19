// let diamond = function(number) { 
//     let count = Math.floor(number / 2); //3
//     if (number % 2 === 0 || number < 1) {
//         console.log("kent, drakan tiv nermuceq");
//     }

//     for (let i = 1; i <= number; i += 2) { 
//         console.log(starSpace(i, count));
//         count--;
//     }

//     let count1 = 1;
//     for (let i = number - 2; i >= 1; i -= 2) {
//         if (i === 1) {
//             return starSpace(i, count1);
//         }
//         console.log(starSpace(i, count1));
//         count1++; 
//     }

// }
// let starSpace = function(numStar, numSpace) {
//     let str = "";
//     let space = "";
//     for (let i = 0; i < numStar; i++) {
//         str += "*";
//     }
//     for (let i = 0; i < numSpace; i++) {
//         space += " ";
//     }
//     return space + str;
// }
// console.log(diamond(9));



// function dimond(height){

// let text = '';
// let width = 1;
// let space = ' ';
// for ( let i = 1; i <= height; i++) {
//     for (let j = height; j >= 1; j--) {
//         text += ' '; 
//     } 
//    for (let k = 0; k < width; k++) { 
//              text += ' * ';
//  } 
//  text += "\n";
//  width = width + 2;
//  space--;
//  }
//  return text ;
// }
// console.log (dimond(6))
/*let arr = [1, -4, 4, -1];
let max = arr[0]; 
for (let i = 0; i < arr.length; i++) { 
   if (arr[i] > max){
        max = arr[i]
   }
}
console.log (max);*/


// let arr = [-5, 4, -3, -4, -1, 5, 7]

// for ( let i = 0; i < arr.length; i++) {
//    for ( let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp =  arr[j];
//             arr[j] =  arr [j + 1];
//             arr [j + 1] = temp;
//         }
//     }
// }
// console.log(arr);



//////////////////Objects ------------

/*
let obj = {
    key:value,
    key:value,
    key:value
}*/

// let user = {
//     id:1,
//     firstName:"John", 
//     lastName:"Smith",
//     age:25,
//     phone:"+37477454545"
// };


// console.log(user.firstName) 
// console.log(user.age) 


// let user = {
//     id:1,
//     firstName:"John", 
//     lastName:"Smith",
//     age:25,
//     phone:"+37477454545", 
//     getFullname:function() {
//         return this.id + " " + this.firstName + " " + this.lastName + " " + this.age + " " + this.phone;
//     }
// };


// console.log(user.getFullname()); 
// console.log(user.age)




let products = [
    {id:1, prodName:"Apranq1", price:2000},
    {id:2, prodName:"Apranq2", price:2500},
    {id:3, prodName:"Apranq3", price:2100},
    {id:4, prodName:"Apranq4", price:2200},
    {id:5, prodName:"Apranq5", price:2000}
];

let tab = "";
tab+= "<table border = '1' cellspadding='10'cellspadding='0'> <thead> <th>id</th> 
<th>prodName</th> <th>price</th> </tr> </thead> </tbody>";



// console.log(products[1].prodName); // paranq 2

//tpel 2000 dram gin unecox apranqner@

/*for(let i = 0; i < products.length; i++) {
    if(products[i].price == 2000) {
        console.log(products[i]);
    }
}*/

let myprice = prompt("Enter price");
function filtr(prods, pr) {
    for(let i = 0; i < prods.length; i++) {
        if(prods[i].price == pr) {
            console.log(prods[i]);
        }
    }
}

filtr(products, myprice)