let firtsValue = document.getElementById("first-value");
let operator = document.getElementById("operator")
let secondValue = document.getElementById("second-value");
let result = document.getElementById("resultado")


let  operador = [
    function somar(){
        total = Number(firtsValue.value) + Number(secondValue.value);
        return total},

    function subtrai(){
        total = Number(firtsValue.value) - Number(secondValue.value);
        return total},

    function multipla(){
        total = Number(firtsValue.value) * Number(secondValue.value);
        return total},

    function divide(){
        total = Number(firtsValue.value) / Number(secondValue.value);
        return total}
]

function calculo(){
    if(operator.value == '+'){
        result.innerText = `${operador[0]()}.`
    }else if(operator.value == '-'){
        result.innerHTML = `${operador[1]()}.`
    }else if(operator.value == 'x'){
        result.innerHTML = `${operador[2]()}.`
    }else if(operator.value == '/'){
        result.innerHTML = `${operador[3]()}.`
    }else if(operator.value == ''){
        result.innerHTML = "Falta de operador, não pude efetuar o cálculo"
    }
}

document.getElementById("sum").addEventListener("click", () =>{
    operator.value = ("+")
})
document.getElementById("subtraction").addEventListener("click", () =>{
    operator.value = ("-")
})
document.getElementById("multiplication").addEventListener("click", () =>{
    operator.value = ("x")
})
document.getElementById("division").addEventListener("click", () =>{
    operator.value = ("/")
})








