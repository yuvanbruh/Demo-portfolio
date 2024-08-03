
// gun=true;


function compute(){
    var number1 =document.getElementById("principal").value;
var rates=document.getElementById("rate").value;
var number2=document.getElementById("years").value;
// var gun =document.getElementById("gun") 
var results=document.getElementById("result")
   
//     // for(gun){

//     if(niga===""){
//         window.alert("enter the amount")
//     }
//     else if(year===""){
//         window.alert("enter the requried no of the years ")
//     }
//     // else if(gun=false){
//     //     window.alert("please press the compund interest button")
//     // }
//     // else{
//     //     gun=true
//     // }
//     else{
//         function output(){
//             results.value=add(niga+year)

         

//     }
//     output();

// }
// }
// compute();
// if(number1==="" || number2===""){
//     window.alert("plase enter both numbers");
//     return ;
// }
// var sum=parseFloat(number1)+parseFloat(number2)

// results.innerHTML="the inner sum is " +sum;
// }

if(number1==="" || number2==="" ){
    window.alert("enter both numbers")
    return
}
// var sum =parseFloat(number1)+parseFloat(number2)
// results.innerHTML="the inner sum is " +sum;
var multiply=parseFloat(number1)*parseFloat(rates)*parseFloat(number2)
results.innerHTML="the simple interesrt is " + multiply/100;
}









