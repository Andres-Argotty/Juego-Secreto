let numeroSecreto =0;
// El ámbito de la variable nos permite nombrar una variable aunque dentro de la función ya tengamos la variable definida.

let intentos=0;

let listaNumerosSorteados=[];
let numeroMaximo=10;


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    // // Un input tiene un tipo de dato String, por eso debemos cambiar el tipo de dato a entero.
    // console.log(numeroUsuario);
    // console.log(numeroSecreto);
    // console.log(numeroUsuario === numeroSecreto); //El === nos valida tanto los valores como los tipos de datos de los mismos.
    // console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${ (intentos>1)?"veces":"vez" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");

        
    }else{
        //El usuario no acertó.
        

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
            
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCampos(); 
    }



}


function asignarTextoElemento(elemento, texto) {
    let objeto=document.querySelector(elemento);
    objeto.innerHTML=texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los números.
    if (listaNumerosSorteados.length== numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

        // si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            // Debemos generar una condición de salida adecuada, para que la recursividad de la función no tenga problemas una vez que la lista este llena y no exista otro número que cumpla la función.    
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}
function limpiarCampos() {
document.getElementById("valorUsuario").value="";
}
function condicionesIniciales() {
asignarTextoElemento('h1','Juego del número secretosss');
asignarTextoElemento('p',`Indica un número del 1 a ${numeroMaximo}`);
numeroSecreto= generarNumeroSecreto();
intentos=1;


}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCampos();

    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled",'true');


}

condicionesIniciales();

// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function calculoIMC(altura,peso) {
//     let imc= Math.floor( (peso)/(altura)**2)
//     return console.log(imc);
    
// }
// calculoIMC(1.80,55);
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function valorFactorial(numeroFactorial) {
//     if (numeroFactorial==0 || numeroFactorial ==1) {
//         return console.log(1) ;
//     }

//     let resultado= numeroFactorial;
//     while (numeroFactorial>1) {
//         numeroFactorial--;
//     resultado= resultado * numeroFactorial;
//     }
//     return console.log(resultado);
//  /* 
//                     num           num--      var result      result *= num         
//     1ª iteración:   5             4            5             20 = 5 * 4      
//     2ª iteración:   4             3           20             60 = 20 * 3
//     3ª iteración:   3             2           60            120 = 60 * 2
//     4ª iteración:   2             1          120            120 = 120 * 1
//     5ª iteración:   1             0          120
//     Fin del bucle WHILE
//     */
// }

// valorFactorial(5);


// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// function convertirDolaresAReales(dolar) {

//     TRMDolar= 4.80;

//     let DolarEnReales= dolar * TRMDolar;

//     return console.log(DolarEnReales);
// }
// convertirDolaresAReales(5);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

// function area(base, altura) {
//     let area = base*altura;
//     return console.log(area);
// }

// function perimetro(base, altura) {
//     let perimetro= 2*(base+altura);
//     return console.log(perimetro);
// }


// area(5,3)
// perimetro(5,3)

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.


// function areaCirculo(radio) {
//     let pi= 3.14;
//    let area= pi*radio**2;
//    return console.log(area);

// }

// function perimetroCirculo(radio) {
//     let pi= 3.14;
//     let perimetro = 2*pi*radio;
//     return console.log(perimetro);

    
// }

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaMultiplicar(numero) {
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero*i} `);
        
//     }
// }
// tablaMultiplicar(7);

// function tablaMultiplicar(numero) {
//     let contador = 0;

//     while (contador<=10) {
        
//         console.log(`${numero} x ${contador} = ${numero*contador} `);
//         contador++;
//     }
// }

// tablaMultiplicar(1);


// Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion=['JavaScript','C','C++','Kotlin','Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java','Ruby','Golang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// function mostrarLenguajes(lista) {
//     for (let i = 0; i < lista.length; i++) {
//         console.log(lista[i]);
        
//     }
// }
// mostrarLenguajes(lenguajesDeProgramacion);

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// function mostrarInverso(lista) {
//     for (let i = lista.length-1; i >= 0; i--) {
        
//         console.log(lista[i]);
        
//     }
// }
// mostrarInverso(lenguajesDeProgramacion);

// // Crea una función que calcule el promedio de los elementos en una lista de números.
// let numeros=[1,5,6,8,6,7,5,2,3,4];
// let listaPrueba=[5,5,5];

// function promedioLista(lista) {
//     let sumaNumeros=0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaNumeros+= lista[i];
//     }
//     let promedio=(sumaNumeros)/lista.length;
//     return console.log(promedio);
// }
// promedioLista(numeros)

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function mayorYMenor(lista) {

//     lista.sort((a,b)=> a-b);
//     // Este metódo hace parte de arrays, se utiliza la función comparativa en dónde simplemente se mira cual es mayor o menor.
//     let minimo= lista[0];
//     let máximo = lista[lista.length-1];
//     console.log(`El número más grande es ${máximo}`);
//     console.log(`El número más pequeños es ${minimo}`);
    
// }
// let listaPrueba=[7,5,4,20,25,3];


// mayorYMenor(listaPrueba);


// // Crea una función que devuelva la suma de todos los elementos en una lista.
// let listaPrueba= [5,5,5];

// function sumaLista(lista) {
//     sumaLista=0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista+=lista[i];   
//     }
//     return console.log(sumaLista);
    
// }

// sumaLista(listaPrueba);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// let listaPrueba=[5,4,8,9,11,2];

// function posicionLista(elementoBusqueda,lista) {

//     // for (let i = 0; i < lista.length; i++) {
//     //     if(elementoBusqueda==lista[i]){
//     //         return console.log(i);
//     //     }
        
//     // }
//     // return console.log("-1");

//     let posicion = lista.indexOf(elementoBusqueda);
//     if (posicion!= -1) {
//         console.log(posicion);
//     }else{
//         console.log(posicion);
//     }
    
// }

// posicionLista(20,listaPrueba);

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

//  function sumaListas(lista1,lista2) {
//     sumaListas=0;
//     let nuevaLista =[];
//     for (let i = 0; i < lista1.length && i<lista2.length; i++) {
//         sumaListas=lista1[i]+lista2[i];
//         nuevaLista.push(sumaListas);
        
//     }   
//     return console.log(nuevaLista);
//  }  

//  let lista1=[2,5,6]
//  let lista2=[3,1,6]

//  sumaListas(lista1,lista2);

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let lista =[2,3,4,5,6];

function listaCuadrada(lista) {
    let cuadrados=0;
    let listaCuadrada=[];
    for (let i = 0; i < lista.length; i++) {
        cuadrados= lista[i]**2;
        listaCuadrada.push(cuadrados);
    }
    return console.log(listaCuadrada);
    
}

listaCuadrada(lista);