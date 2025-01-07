function ctof(num1){
    const msg=document.getElementById("result")

    msg.innerHTML="Result is : "+ ((num1*1.8) + 32);
}
function ftoc(num1){
    const msg=document.getElementById("result")
    msg.innerHTML="Result is : "+ (num1-32)*(5/9);
}

function calc(num1,operation){
    let n1=parseInt(num1)
    operation(n1);
}

const calculate = ()=>{
    let num1=document.getElementById("num1").value;
    operation=document.getElementById("operation").value;

    calc(num1,eval(operation))

}
