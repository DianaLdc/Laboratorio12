// Ejercicio 3:  
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

// Ejercicio 4: 
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

// Ejercicio 5: 
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

// Ejercicio 6:  
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
// Ejercicio 7:  
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

// Ejercicio 8:  
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
// Ejercicio 9:  
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
// Ejercicio 10:  
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
// Ejercicio 11: 
const esPositivo = numero => numero > 0;

function verificarPositivo() {
    const num = document.getElementById("numPositivo").value;
    const resultadoPositivo = document.getElementById("resultadoPositivo");

    if (num === "") {
        resultadoPositivo.textContent = "Por favor, ingrese un número.";
        resultadoPositivo.style.color = "yellow";
        return;
    }

    const n = Number(num);

    if (esPositivo(n)) {
        resultadoPositivo.textContent = `El número ${n} es positivo.`;
        resultadoPositivo.style.color = "lightgreen";
    } else if (n === 0) {
        resultadoPositivo.textContent = "El número es cero.";
        resultadoPositivo.style.color = "orange";
    } else {
        resultadoPositivo.textContent = `El número ${n} es negativo.`;
        resultadoPositivo.style.color = "pink";
    }
}
// Ejercicio 12: 
const mayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => texto + "!";

// Función flecha que combina dos transformaciones
const componerTransformaciones = (f1, f2) => texto => f2(f1(texto));

function mostrarTransformacion() {
    const texto = document.getElementById("texto12").value.trim();
    const resultadoTransformacion = document.getElementById("resultadoTransformacion");

    if (texto === "") {
        resultadoTransformacion.textContent = "Por favor, ingrese un texto.";
        resultadoTransformacion.style.color = "yellow";
        return;
    }

    // Componer las funciones y aplicarlas
    const transformar = componerTransformaciones(mayusculas, agregarSigno);
    const resultado = transformar(texto);

    resultadoTransformacion.textContent = `${resultado}`;
    resultadoTransformacion.style.color = "lightgreen";
}
// Ejercicio 13:  
function procesarTexto(texto) {
    // Función interna: elimina espacios dobles y extremos
    function limpiarEspacios(cadena) {
        return cadena.trim().replace(/\s+/g, " ");
    }

    // Función interna: cuenta palabras separadas por espacio
    function contarPalabras(cadena) {
        if (cadena === "") return 0;
        return cadena.split(" ").length;
    }

    const limpio = limpiarEspacios(texto);
    const cantidad = contarPalabras(limpio);

    return `Texto limpio: "${limpio}" → Palabras: ${cantidad}`;
}

function mostrarProcesarTexto() {
    const texto = document.getElementById("texto13").value;
    const resultadoTexto13 = document.getElementById("resultadoTexto13");

    if (texto.trim() === "") {
        resultadoTexto13.textContent = "Por favor, ingrese un texto.";
        resultadoTexto13.style.color = "yellow";
        return;
    }

    const resultado = procesarTexto(texto);
    resultadoTexto13.textContent = resultado;
    resultadoTexto13.style.color = "lightgreen";
}
// Ejercicio 14:  
function operacionesMatemáticas(a, b) {
    // Funciones internas
    function sumar() { return a + b; }
    function restar() { return a - b; }
    function multiplicar() { return a * b; }
    function dividir() {
        if (b === 0) return "No se puede dividir entre cero.";
        return (a / b).toFixed(2);
    }

    // Construcción del resultado
    return `Suma: ${sumar()} | Resta: ${restar()} | Multiplicación: ${multiplicar()} | División: ${dividir()}`;
}

function mostrarOperaciones() {
    const numA = document.getElementById("opA").value;
    const numB = document.getElementById("opB").value;
    const resultadoOperaciones = document.getElementById("resultadoOperaciones");

    if (numA === "" || numB === "") {
        resultadoOperaciones.textContent = "Por favor, ingrese ambos números.";
        resultadoOperaciones.style.color = "yellow";
        return;
    }

    const a = Number(numA);
    const b = Number(numB);

    const resultado = operacionesMatemáticas(a, b);
    resultadoOperaciones.textContent = resultado;
    resultadoOperaciones.style.color = "lightgreen";
}
//Ejercicio 15

const crearContador = () => {
    let cuenta = 0;  

    const incrementar = () => ++cuenta;  
    const resetear = () => {
        cuenta = 0; 
        return cuenta;
    };

    return { incrementar, resetear };
};
 
const contador2 = crearContador();
 
function incrementarContador() {
    const resultado = document.getElementById("resultadoContador2");
    resultado.textContent = `Contador: ${contador2.incrementar()}`;
    resultado.style.color = "lightgreen";
}
 
function resetearContador() {
    const resultado = document.getElementById("resultadoContador2");
    resultado.textContent = `Contador reiniciado: ${contador2.resetear()}`;
    resultado.style.color = "orange";
}

// Ejercicio 16:  
const acumulador = (valorInicial) => {
    let total = valorInicial;  
    return (nuevoValor) => total += nuevoValor;  
};


let miAcumulador = null;

function crearNuevoAcumulador() {
    const valorInicial = document.getElementById("valorInicial").value;
    const resultado = document.getElementById("resultadoAcumulador");

    if (valorInicial === "") {
        resultado.textContent = "Ingrese un valor inicial.";
        resultado.style.color = "yellow";
        return;
    }

    miAcumulador = acumulador(Number(valorInicial));
    resultado.textContent = `Acumulador creado con valor inicial ${valorInicial}.`;
    resultado.style.color = "lightgreen";
}

function sumarAcumulador() {
    const valorNuevo = document.getElementById("valorNuevo").value;
    const resultado = document.getElementById("resultadoAcumulador");

    if (!miAcumulador) {
        resultado.textContent = "Primero debe crear un acumulador.";
        resultado.style.color = "yellow";
        return;
    }

    if (valorNuevo === "") {
        resultado.textContent = "Ingrese un valor a sumar.";
        resultado.style.color = "yellow";
        return;
    }

    const nuevoTotal = miAcumulador(Number(valorNuevo));
    resultado.textContent = `Nuevo total acumulado: ${nuevoTotal}`;
    resultado.style.color = "lightgreen";
}
// Ejercicio 17:  
const generarSaludoPersonalizado = (nombre, edad) => {
    // función interna que recuerda nombre y edad
    return () => `¡Hola, ${nombre}! Tienes ${edad} años. ¡Qué gusto verte!`;
};

let saludoPersonalizado = null;

function crearSaludo() {
    const nombre = document.getElementById("nombreSaludo").value.trim();
    const edad = document.getElementById("edadSaludo").value;
    const resultado = document.getElementById("resultadoSaludoPersonalizado");

    if (nombre === "" || edad === "") {
        resultado.textContent = "Por favor, ingrese nombre y edad.";
        resultado.style.color = "yellow";
        return;
    }

    saludoPersonalizado = generarSaludoPersonalizado(nombre, edad);
    resultado.textContent = saludoPersonalizado(); // ejecuta la función retornada
    resultado.style.color = "lightgreen";
}
// Ejercicio 18: 
function media(...numeros) {
    if (numeros.length === 0) return 0;  
    const suma = numeros.reduce((acum, num) => acum + num, 0);
    return suma / numeros.length;
}

function calcularMedia() {
    const entrada = document.getElementById("numerosMedia").value;
    const resultado = document.getElementById("resultadoMedia");

    if (entrada.trim() === "") {
        resultado.textContent = "Por favor, ingrese al menos un número.";
        resultado.style.color = "yellow";
        return;
    } 
    const numeros = entrada.split(",").map(n => Number(n.trim()));
 
    if (numeros.some(isNaN)) {
        resultado.textContent = "Ingrese solo números separados por comas.";
        resultado.style.color = "pink";
        return;
    }
 
    const promedio = media(...numeros);
    resultado.textContent = `El promedio es ${promedio.toFixed(2)}.`;
    resultado.style.color = "lightgreen";
}


// Ejercicio 19: 
function mostrarDatos(nombre, edad, ...hobbies) {
    let hobbiesTexto = hobbies.length > 0 
        ? hobbies.join(", ") 
        : "sin hobbies especificados";
    return `Nombre: ${nombre} | Edad: ${edad} | Hobbies: ${hobbiesTexto}`;
}

function ejecutarMostrarDatos() {
    const nombre = document.getElementById("nombreDatos").value.trim();
    const edad = document.getElementById("edadDatos").value;
    const hobbiesEntrada = document.getElementById("hobbiesDatos").value;
    const resultado = document.getElementById("resultadoDatos");

    if (nombre === "" || edad === "") {
        resultado.textContent = "Por favor, ingrese nombre y edad.";
        resultado.style.color = "yellow";
        return;
    }

    const hobbies = hobbiesEntrada.trim() === "" 
        ? [] 
        : hobbiesEntrada.split(",").map(h => h.trim());

    const mensaje = mostrarDatos(nombre, edad, ...hobbies);
    resultado.textContent = mensaje;
    resultado.style.color = "lightgreen";
}  

// Ejercicio 20 
function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}

// Operaciones disponibles
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "No se puede dividir entre cero." : (a / b).toFixed(2);

function ejecutarOperacionHandler() {
    const x = document.getElementById("valorX").value;
    const y = document.getElementById("valorY").value;
    const operacion = document.getElementById("operacion").value;
    const resultado = document.getElementById("resultadoOperacion");

    if (x === "" || y === "") {
        resultado.textContent = "Por favor, ingrese ambos valores.";
        resultado.style.color = "yellow";
        return;
    }

    const a = Number(x);
    const b = Number(y);
    let fn;

    switch (operacion) {
        case "sumar": fn = sumar; break;
        case "restar": fn = restar; break;
        case "multiplicar": fn = multiplicar; break;
        case "dividir": fn = dividir; break;
    }

    const resultadoFinal = ejecutarOperacion(fn, a, b);
    resultado.textContent = `Resultado: ${resultadoFinal}`;
    resultado.style.color = "lightgreen";
}
 // Ejercicio 21: 
function filtrarArreglo(arr, callback) {
  return arr.filter(callback);
} 
const esParNum = n => n % 2 === 0;
const esImparNum = n => n % 2 !== 0;
const mayorQue5Num = n => n > 5;

function aplicarFiltro() {
  const entrada = document.getElementById("numerosFiltro").value;
  const tipo = document.getElementById("tipoFiltro").value;
  const resultado = document.getElementById("resultadoFiltro");

  if (entrada.trim() === "") {
    resultado.textContent = "Por favor, ingrese al menos un número.";
    resultado.style.color = "yellow";
    return;
  }

  const numeros = entrada.split(",").map(n => Number(n.trim()));
  if (numeros.some(isNaN)) {
    resultado.textContent = "Ingrese solo números separados por comas.";
    resultado.style.color = "pink";
    return;
  }

  let callback;
  switch (tipo) {
    case "pares":    callback = esParNum; break;
    case "impares":  callback = esImparNum; break;
    case "mayores5": callback = mayorQue5Num; break;
  }

  const filtrados = filtrarArreglo(numeros, callback);
  resultado.textContent = `Resultado: [ ${filtrados.join(", ")} ]`;
  resultado.style.color = "lightgreen";
}
// Ejercicio 22:  
function descargarArchivo(url, callback) {
    const resultado = document.getElementById("resultadoDescarga");
    resultado.textContent = "Descargando...";
    resultado.style.color = "yellow";
 
    setTimeout(() => {
        callback(url);
    }, 2000); 
}

function mostrarDescargaCompleta(url) {
    const resultado = document.getElementById("resultadoDescarga");
    resultado.textContent = `Descarga completa de ${url}`;
    resultado.style.color = "lightgreen";
}

function simularDescarga() {
    const url = document.getElementById("urlDescarga").value.trim();
    const resultado = document.getElementById("resultadoDescarga");

    if (url === "") {
        resultado.textContent = "Por favor, ingrese una URL.";
        resultado.style.color = "pink";
        return;
    }

    descargarArchivo(url, mostrarDescargaCompleta);
}
// Ejercicio 23:  
function potencia(base, exponente) {
  if (exponente === 0) return 1;
  if (exponente < 0) return 1 / potencia(base, -exponente);
  return base * potencia(base, exponente - 1);
}

function calcularPotencia() {
  const base = document.getElementById("basePot").value;
  const exponente = document.getElementById("exponentePot").value;
  const resultado = document.getElementById("resultadoPotencia");

  if (base === "" || exponente === "") {
    resultado.textContent = "Ingrese ambos valores: base y exponente.";
    resultado.style.color = "yellow";
    return;
  }

  const b = Number(base);
  const e = Number(exponente);

  const res = potencia(b, e);
  resultado.textContent = `${b} elevado a ${e} = ${res}`;
  resultado.style.color = "lightgreen";
}
// Ejercicio 24:  
function crearSecuencia(inicio, paso) {
  let actual = inicio;
  return () => {
    const valor = actual;
    actual += paso;
    return valor;
  };
}

let miSecuencia = null;

function crearNuevaSecuencia() {
  const inicio = document.getElementById("inicioSec").value;
  const paso = document.getElementById("pasoSec").value;
  const resultado = document.getElementById("resultadoSecuencia");

  if (inicio === "" || paso === "") {
    resultado.textContent = "Por favor, ingrese el inicio y el paso.";
    resultado.style.color = "yellow";
    return;
  }

  miSecuencia = crearSecuencia(Number(inicio), Number(paso));
  resultado.textContent = `Secuencia creada: inicia en ${inicio}, paso ${paso}.`;
  resultado.style.color = "lightgreen";
}

function siguienteNumero() {
  const resultado = document.getElementById("resultadoSecuencia");

  if (!miSecuencia) {
    resultado.textContent = "Primero debe crear una secuencia.";
    resultado.style.color = "yellow";
    return;
  }

  const siguiente = miSecuencia();
  resultado.textContent = `Siguiente número: ${siguiente}`;
  resultado.style.color = "lightgreen";
}
