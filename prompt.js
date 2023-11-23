//let num1 = prompt("Digite o primeiro numero");
//let num2 = prompt("Digite o segundo numero");

//alert(Number(num1) + Number(num2));


function imc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
console.log(imc(62, 1.56));