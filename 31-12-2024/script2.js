function display(result){
    const msg=document.getElementById("result")
    msg.innerHTML="Result is : "+ result;
}
const add=(num1,num2)=> display(num1+num2);
const sub=(num1,num2)=> display(num1-num2);
const mul=(num1,num2)=> display(num1*num2);

const div=(num1,num2)=> display((num2==0) ? "Divisor is Zero" : num1/num2);

function calc(num1,num2,operation){
    operation(n1,n2);
}

const calculate = ()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    operation=document.getElementById("operation").value;

    calc(num1,num2,eval(operation))

}
