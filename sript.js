// Ejercicio 3: esPar(num)
function esPar(num) {
    return num % 2 === 0;
}

function verificarPar() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.textContent = "Por favor, ingrese un número.";
        resultado.style.color = "yellow";
        return;
    }

    const n = Number(numero);

    if (esPar(n)) {
        resultado.textContent = `El número ${n} es par.`;
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = `El número ${n} es impar.`;
        resultado.style.color = "pink";
    }
}

// Ejercicio 4: áreaRectangulo(base, altura)
function areaRectangulo(base, altura) {
    return base * altura;
}

function calcularArea() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const resultadoArea = document.getElementById("resultadoArea");

    if (base === "" || altura === "") {
        resultadoArea.textContent = "Ingrese ambos valores: base y altura.";
        resultadoArea.style.color = "yellow";
        return;
    }

    const b = Number(base);
    const h = Number(altura);

    //que no sean negativos ni cero
    if (b <= 0 || h <= 0) {
        resultadoArea.textContent = "La base y la altura deben ser mayores que cero.";
        resultadoArea.style.color = "pink";
        return;
    }

    const area = areaRectangulo(b, h);
    resultadoArea.textContent = `El área del rectángulo es ${area}.`;
    resultadoArea.style.color = "lightgreen";
}

// Ejercicio 5: esMultiplo(a, b)
function esMultiplo(a, b) {
    return a % b === 0;
}

function verificarMultiplo() {
    const numA = document.getElementById("numA").value;
    const numB = document.getElementById("numB").value;
    const resultadoMultiplo = document.getElementById("resultadoMultiplo");

    if (numA === "" || numB === "") {
        resultadoMultiplo.textContent = "Ingrese ambos valores.";
        resultadoMultiplo.style.color = "yellow";
        return;
    }

    const a = Number(numA);
    const b = Number(numB);

    // Validar que sean positivos y no cero
    if (a <= 0 || b <= 0) {
        resultadoMultiplo.textContent = "Ambos valores deben ser mayores que cero.";
        resultadoMultiplo.style.color = "pink";
        return;
    }

    if (esMultiplo(a, b)) {
        resultadoMultiplo.textContent = `${a} es múltiplo de ${b}.`;
        resultadoMultiplo.style.color = "lightgreen";
    } else {
        resultadoMultiplo.textContent = `${a} no es múltiplo de ${b}.`;
        resultadoMultiplo.style.color = "pink";
    }
}

// Ejercicio 6: mayorDeTres(a, b, c)
function mayorDeTres(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

function verificarMayor() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;
    const resultadoMayor = document.getElementById("resultadoMayor");

    if (num1 === "" || num2 === "" || num3 === "") {
        resultadoMayor.textContent = "Ingrese los tres valores.";
        resultadoMayor.style.color = "yellow";
        return;
    }

    const a = Number(num1);
    const b = Number(num2);
    const c = Number(num3);

    const mayor = mayorDeTres(a, b, c);
    resultadoMayor.textContent = `El número mayor es ${mayor}.`;
    resultadoMayor.style.color = "lightgreen";
}
// Ejercicio 7: promedio (función expresada)
const promedio = function (n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
};

function calcularPromedio() {
    const n1 = document.getElementById("nota1").value;
    const n2 = document.getElementById("nota2").value;
    const n3 = document.getElementById("nota3").value;
    const resultadoPromedio = document.getElementById("resultadoPromedio");

    if (n1 === "" || n2 === "" || n3 === "") {
        resultadoPromedio.textContent = "Ingrese las tres notas.";
        resultadoPromedio.style.color = "yellow";
        return;
    }

    const a = Number(n1);
    const b = Number(n2);
    const c = Number(n3);

    if (a < 0 || b < 0 || c < 0 || a > 20 || b > 20 || c > 20) {
        resultadoPromedio.textContent = "Las notas deben estar entre 0 y 20.";
        resultadoPromedio.style.color = "pink";
        return;
    }

    const prom = promedio(a, b, c);
    resultadoPromedio.textContent = `El promedio es ${prom.toFixed(2)}.`;
    resultadoPromedio.style.color = "lightgreen";
}

// Ejercicio 8: convertirAMayusculas (función expresada)
const convertirAMayusculas = function (texto) {
    return texto.toUpperCase();
};

function mostrarMayusculas() {
    const texto = document.getElementById("texto").value;
    const resultadoTexto = document.getElementById("resultadoTexto");

    if (texto.trim() === "") {
        resultadoTexto.textContent = "Ingrese un texto.";
        resultadoTexto.style.color = "yellow";
        return;
    }

    const textoMayus = convertirAMayusculas(texto);
    resultadoTexto.textContent = `Resultado: ${textoMayus}`;
    resultadoTexto.style.color = "lightgreen";
}
// Ejercicio 9: calcularDescuento (función expresada)
const calcularDescuento = function (precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
};

function mostrarDescuento() {
    const precio = document.getElementById("precio").value;
    const porcentaje = document.getElementById("porcentaje").value;
    const resultadoDescuento = document.getElementById("resultadoDescuento");
 
    if (precio === "" || porcentaje === "") {
        resultadoDescuento.textContent = "Ingrese el precio y el porcentaje de descuento.";
        resultadoDescuento.style.color = "yellow";
        return;
    }

    const p = Number(precio);
    const d = Number(porcentaje);
 
    if (p < 0) {
        resultadoDescuento.textContent = "El precio no puede ser negativo.";
        resultadoDescuento.style.color = "pink";
        return;
    }

    if (d < 0 || d > 100) {
        resultadoDescuento.textContent = "El descuento debe estar entre 0% y 100%.";
        resultadoDescuento.style.color = "pink";
        return;
    }
 
    const precioFinal = calcularDescuento(p, d);
    resultadoDescuento.textContent = `Precio final: S/ ${precioFinal.toFixed(2)}`;
    resultadoDescuento.style.color = "lightgreen";
}
// Ejercicio 10: saludo (función flecha)
const saludo = nombre => `¡Hola, ${nombre}! Bienvenido.`;

function mostrarSaludo() {
    const nombre = document.getElementById("nombre").value;
    const resultadoSaludo = document.getElementById("resultadoSaludo");

    if (nombre.trim() === "") {
        resultadoSaludo.textContent = "Por favor, ingresa tu nombre.";
        resultadoSaludo.style.color = "yellow";
        return;
    }

    const mensaje = saludo(nombre.trim());
    resultadoSaludo.textContent = mensaje;
    resultadoSaludo.style.color = "lightgreen";
}

