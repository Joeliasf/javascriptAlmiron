let numero = parseInt(prompt("Ingrese su numero"));

for (let i = 1; i <= 50; i+=4) {
    let resultado = numero * i;
    alert(numero +" X "+ i +" = "+ resultado)
}