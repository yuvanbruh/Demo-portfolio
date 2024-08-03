// function compute(){
//     var name=document.getElementById("texter").value 
//     var message=document.getElementById("message").value 
//     if(name==="" || message===""){
//         window.alert("please enter the required values")
//     }
// else{
//     window.alert("thanks for writng the message")
// }

// }
function compute() {
    var name = document.getElementById("texter").value.trim(); 
    var message = document.getElementById("message").value.trim();
    
    if (name === "" || message === "") {
        window.alert("Please enter both name and message.");
    } else {
        window.alert("Thanks for writing the message!");
    }
}
