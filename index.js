/*const PrimerValor = document.getElementById("Primer-valor");
const SegundoValor = document.getElementById("Segundo-valor");
const sumaBoton = document.getElementById("suma");
const resultado = document.getElementById("resultado");

function sum() {
    return parseFloat(PrimerValor.value) + parseFloat(SegundoValor.value);
}

sumButton.addEventListener("click", function() {
    let finalResult = sum();
    console.log("Total de la suma" + finalResult);
    result.textContent = "Total de la suma " + finalResult;
});*/

const firstValue = document.getElementById("first-value");
const secondValue = document.getElementById("second-value");
const sumButton = document.getElementById("sum-button");

function sum() {
    return parseFloat(firstValue.value) + parseFloat(secondValue.value);
}

sumButton.addEventListener("click", function() {
    let result = sum();
    console.log("The sum is " + result);
});

//----------------------------------------------------------------------


/*const PrimerValor = document.getElementsById("Primer-valor");
const SegundoValor = document.getElementById("Segundo-valor");
const sumaBoton = document.getElementById("suma-boton");

function sum() {
    return parseFloat(PrimerValor.value) + parseFloat(SegundoValor.value);
}

sumaBoton.addEventListener("click", function(){
    let result = sum();
    console.log("La sumatoria de los dos Valores es:" + result);
});*/


//---------------------------------------------------------------------------




/*const firstValue = document.getElementById("first-value");
const secondValue = document.getElementById("second-value");
const sumButton = document.getElementById("sum-button");
const result = document.getElementById("result");

function sum() {
    return parseFloat(firstValue.value) + parseFloat(secondValue.value);
}

sumButton.addEventListener("click", function() {
    result.textContent = "The sum is " + sum();
   
    console.log("The sum is " + result);

});*/





/*const sumButton = document.getElementById("sum-button");
const result = document.getElementById("result");

function sum(a, b) {
    return a + b;
}

sumButton.addEventListener("click", function() {
    let a = prompt("Enter a value:");
    let b = prompt("Enter another value:");
    result.textContent = "The sum is " + sum(a, b);
});*/

/*const sumButton = document.getElementById("sum-button");

function sum(a, b) {
    return a + b;
}

sumButton.addEventListener("click", function() {
    let a = prompt("Enter a value:");
    let b = prompt("Enter another value:");
    let result = sum(a, b);
    console.log("The sum is " + result);
});*/

/*

/*const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

 

 function getSuma(){
    const sumatoria = valor1 + valor2;
    return (sumatoria);
 }

 function getClik(){
    console.log(getSuma(valor1 + valor2));
 }
/*/