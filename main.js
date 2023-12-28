class Operacion {
    constructor(simbolo, numeroA, numeroB, resultado) {
        this.simbolo = simbolo;
        this.numeroA = numeroA;
        this.numeroB = numeroB;
        this.resultado = resultado;
    }
}

class CalculadoraEstadisticas {
    constructor() {
        this.operaciones = [];
        this.totalOperaciones = 0;
        this.sumaResultados = 0;
    }

    agregarOperacion(simbolo, numeroA, numeroB, resultado) {
        const operacion = new Operacion(simbolo, numeroA, numeroB, resultado);
        this.operaciones.push(operacion);
        this.totalOperaciones++;
        this.sumaResultados += resultado;
    }

    mostrarEstadisticas() {
        alert(`Estadísticas:\nTotal de operaciones: ${this.totalOperaciones}\nSuma de resultados: ${this.sumaResultados}`);
    }
}

const historial = [];
const calculadoraEstadisticas = new CalculadoraEstadisticas();

function sumar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado);

    const operacion = new Operacion("+", numeroA, numeroB, resultado);
    historial.push(operacion);
    calculadoraEstadisticas.agregarOperacion("+", numeroA, numeroB, resultado);
}

function restar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado);

    const operacion = new Operacion("-", numeroA, numeroB, resultado);
    historial.push(operacion);
    calculadoraEstadisticas.agregarOperacion("-", numeroA, numeroB, resultado);
}

function multiplicar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado);

    const operacion = new Operacion("*", numeroA, numeroB, resultado);
    historial.push(operacion);
    calculadoraEstadisticas.agregarOperacion("*", numeroA, numeroB, resultado);
}

function dividir() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado);

    const operacion = new Operacion("/", numeroA, numeroB, resultado);
    historial.push(operacion);
    calculadoraEstadisticas.agregarOperacion("/", numeroA, numeroB, resultado);
}

function verHistorial() {
    const simbolo = prompt("Elija un simbolo para filtrar historial: \n + sumas \n - restas \n * multipliciones \n / dividir");

    const filtrado = historial.filter((elemento) => {
        return elemento.simbolo == simbolo;
    });

    let mensaje = '';
    filtrado.forEach((operacion) => {
        mensaje = mensaje + operacion.numeroA + operacion.simbolo + operacion.numeroB + " = " + operacion.resultado + '\n';
    });
    alert(mensaje);
}

function verEstadisticas() {
    calculadoraEstadisticas.mostrarEstadisticas();
}

function calcularPromedio() {
    if (historial.length === 0) {
        alert("No hay operaciones en el historial");
        return;
    }

    const sumaTotal = historial.reduce((total, operacion) => total + operacion.resultado, 0);
    const promedio = sumaTotal / historial.length;

    alert(`Promedio de resultados: ${promedio}`);
}


let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Ver historial \n 6-Ver estadísticas \n 7-Promedio \n 8- Salir"));

while (opcion !== 8) {
    switch (opcion) {
        case 1:
            sumar();
            break;
        case 2:
            restar();
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            dividir();
            break;
        case 5:
            verHistorial();
            break;
        case 6:
            verEstadisticas();
            break;
        case 7:
            calcularPromedio();
            break
        default:
            alert("Opcion incorrecta");
            break;
    }

    opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Ver historial \n 6-Ver estadísticas \n 7-Promedio \n 8-Salir"));
}

alert("Finalizando programa, enter para cerrar");
