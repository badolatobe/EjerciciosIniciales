//ver 3, 6 y 9, 12; no funcionan

//1
// Ejercicio 1: Operaciones con Vectores
// Crea una función que tome un array de números y devuelva la suma de todos sus elementos. Luego,
// muestra el resultado en un elemento HTML.
const unArreglo = [1,5,9,8,7,3,12,4,22,11];

function sumarArreglo() {
    let suma = 0;
    for (let index = 0; index < unArreglo.length; index++) {
        suma+=unArreglo[index]
    }
    return suma
}
let sumaTotal = sumarArreglo(unArreglo);
console.log("la suma total es "+sumaTotal);
document.getElementById("resultado1").innerHTML=`La suma de un arreglo es: ${sumaTotal}`;

//2
// Ejercicio 2: Filtrar Números Pares
// Escribe una función que reciba un array de números y devuelva un nuevo array con solo los
// números pares. Muestra el array resultante en un elemento HTML.
function numPares(params) {
    let sonPares=[];
    for (let index = 0; index < unArreglo.length; index++) { //usa el array del ejercicio 1
        if (unArreglo[index]%2===0){
            sonPares.push(unArreglo[index]) ;
            }
    }
    return sonPares;
}

let sonPares=numPares(unArreglo);
console.log(sonPares);
document.getElementById("resultado2").innerHTML=`Los numeros pares de un arreglo son: ${sonPares}`;

//3
//Ejercicio 3: Contar Ocurrencias
// Crea una función que tome un array de strings y un string de búsqueda, y devuelva el número de
// veces que el string de búsqueda aparece en el array. Muestra el resultado en un elemento HTML.
let listaPalabras=["manzana", "banana", "naranja", "pomelo", "pera",];
let palabraBuscar="pomelo";

function buscarPalabra(params) {
    let contador=0;
    for (let index = 0; index < params.length; index++) {
        if (params===palabraBuscar) {
            contador++
        };
        
    };
    return contador;
};
let palabraGuardada=buscarPalabra(palabraBuscar);

let resultado3=document.getElementById("resultado3");
resultado3.innerHTML=`La palabra "${palabraBuscar}" aparece ${palabraGuardada} veces`;

//4
// Ejercicio 4: Información de Usuarios
// Crea una lista de objetos tipo JSON que representen a varios usuarios (nombre, edad, email).
// Escribe una función que reciba esta lista y devuelva una lista de emails de los usuarios mayores de
// edad. Muestra el resultado en un elemento HTML.
// const usuarios = [ { nombre: "Juan", edad: 25, email: "juan@example.com" }, { nombre: "María",
// edad: 17, email: "maria@example.com" }, { nombre: "Pedro", edad: 30, email:
// "pedro@example.com" } ];

const usuarios = [
    { nombre: "Juan", edad: 25, email: "juan@example.com" },
    { nombre: "María", edad: 17, email: "maria@example.com" },
    { nombre: "Pedro", edad: 30, email: "pedro@example.com" },
    { nombre: "Lucía", edad: 20, email: "lucia@example.com" },
    { nombre: "Ana", edad: 16, email: "ana@example.com" }
];

function obtenerEmail(usuarios) {
    let emailsMayores=[];
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].edad>=18) {
            emailsMayores.push(usuarios[index].email);
        }
        
    }
    return emailsMayores;
};
let emailMayoresEdad=obtenerEmail(usuarios);//creo variable para guardar la funcion
let listas ="";
for (let index = 0; index < emailMayoresEdad.length; index++) {
    listas+="<li>"+emailMayoresEdad[index]+"</li>";    
}
let listaEmails=document.getElementById("emailsMayores");//html
listaEmails.innerHTML=listas

//5
// Ejercicio 5: Calcular Promedio
// Crea una función que tome un array de números y devuelva el promedio de estos. Muestra el
// resultado en un elemento HTML.

function calcularPromedio(asd) {
    let suma = 0;
    let cantidad = asd.length;

    for (let i = 0; i < cantidad; i++) {
        suma += numeros[i];
    }
    let promedio = suma / cantidad;

    return promedio;
}
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
let resultadoElemento = document.getElementById("resultadoPromedio");
resultadoElemento.textContent = "El promedio de los números es: " + promedio;

//6
// Ejercicio 6: Verificar Palíndromo
// Crea una función que verifique si una palabra es un palíndromo (se lee igual de adelante hacia
// atrás). Muestra el resultado en un elemento HTML.
function esPalindromo(params) {
    let palabraInvertida="";
    for (let index = params.length-1 ; index >0 ; index--) {
        palabraInvertida +=params[index]
        
    };
    if (params===palabraInvertida) {
        return palabraInvertida;
    };
};

let palabra="anilina"
let resultado=esPalindromo(palabra);

let ressHtml=document.getElementById("verPalindromo");
if (resultado) {
    ressHtml.innerHTML=`la palabra "${palabra}" es palindromo`;
} else {
    ressHtml.innerHTML=`la palabra "${palabra}" no es palindromo`
};

//7
// Escribe una función que reciba un array de números y los ordene de forma ascendente. Muestra el
// resultado en un elemento HTML.

const numArray07=[99999, 12, 523, 32, 41, 33,123,6753 ,123 ,3123, 12,];

function ordenarAscendentes(params) {
    for (let index = 0; index < params.length; index++) {
        for (let i = index+1; i < params.length; i++) {
            if (params[index]>params[i]) {
                let asd=params[index];
                params[index]=params[i];
                params[i]=asd;
            }
            
        }
        
    }
    return params
}

let numerosOrdenados=ordenarAscendentes(numArray07);

let numOrd=document.getElementById("numOrdenado");
numOrd.textContent=`El array ordenado quedaría así: ${numerosOrdenados}`;

//8
// Eliminar Duplicados: Crea una función que tome un array de números y elimine los elementos
// duplicados. Muestra el array resultante en un elemento HTML.

const numArray8= [142,123,154,123,213,412,123,412,123,123,123,123,123,32,122]

function eliminarDuplicados(params) {
    let arraySinDuplicados=[];
    for (let index = 0; index < params.length; index++) {
        let numActual=params[index];

        let yaEsta=false;
        for (let i = 0; i < arraySinDuplicados.length; i++) {
            if (arraySinDuplicados[i]===numActual) {
                yaEsta=true;
                break;
            }            
        }
        if (!yaEsta) {
            arraySinDuplicados.push(numActual);            
        }
    }
    return arraySinDuplicados;
};

const resultado8=eliminarDuplicados(numArray8);
const elementoResultado8=document.getElementById("duplicado8");
elementoResultado8.textContent=`el array sin duplicados sería: ${resultado8}`;

//9
// //Capitalizar Palabras: Escribe una función que reciba una cadena de texto y devuelva la misma
// cadena con la primera letra de cada palabra en mayúscula. Muestra el resultado en un elemento
// HTML.
let textoej9= "compro plomo, bronce, cobre, aluminio, puerta de heladeras, motores viejos, todo lo que no le sirva estamos comprando señora";
function transformatTexto(params) {
    let palabras=params.split("");
    let palabrasGuardadas=[];

    for (let index = 0; index < palabras.length; index++) {
        let textoPalabra=palabras[index];
        palabrasGuardadas.push(textoPalabra.charAt(0).toUpperCase()+textoPalabra.slice(1));
    }
    return palabrasGuardadas.join("");
}
let resulej9= transformatTexto(textoej9);
let enlaceEj9=document.getElementById("ej09");
enlaceEj9.innerHTML=resulej9;

//10
// Contar Vocales: Desarrolla una función que cuente el número de vocales en una cadena de texto.
// Muestra el resultado en un elemento HTML.

function contarVocales(params) {
    let contador=0;
    let vocales= "aeiouAEIOU";
    for (let index = 0; index < params.length; index++) {
        if (vocales.includes(params[index])){
            contador++
        };
        
    };
    return contador;
}

let ej10=contarVocales(textoej9);//paso param del ejercicio anterior
let ej10elemnt=document.getElementById("ej10");
ej10elemnt.textContent=`El nùmer de vocales es: ${ej10}`;

//11
// Convertir Temperatura: Crea una función que convierta grados 
// Celsius a Fahrenheit y viceversa.  Muestra el resultado en un elemento HTML. 

function convertirTemp(){
    const temperatura=parseFloat(document.getElementById("numTemp").value);
    const convertidor=document.getElementById("tempSelector").value;
    let resul=0;

    if (convertidor==="caf") {
        resul = (temperatura * 9/5) + 32;
        document.getElementById("ej11").innerHTML=`${temperatura}ºC serían ${resul}ºF`;
    }
    else{
        resul = (temperatura - 32) * 5/9;
        document.getElementById("ej11").innerHTML=`${temperatura}ºF serían ${resul}ºC`;
    }
}

//12 
// Buscar el Elemento más Frecuente: Escribe una función que encuentre el elemento que más se  repite en un array. Muestra el resultado en un elemento HTML. 

function elMasFrecuente(params) {
    let frecuencia =[];
    let maxFrecuencia=0;
    let elemMasFrecuente;

    for (let index = 0; index < params.length; index++) {
        
        const elemento=params[index];

        if (frecuencia[elemento]===undefined) {
            frecuencia[elemento]=1;
        }
        else {
            frecuencia[elemento]++;
            }
        }
        if (frecuencia[elemento]>maxFrecuencia) {
            maxFrecuencia=frecuencia[elemento];
            elemMasFrecuente=elemento;
        }
        return elemMasFrecuente;
    }

const arrayElementos = [1, 3, 3, 2, 1, 3, 4, 1, 3, 3, 2, 1];
const resulej12 = elMasFrecuente(arrayElementos);

document.getElementById("ej12").innerText=`El elemento mas frecuente del array es: ${resulej12}`;

// 13
// Validar Dirección de Correo Electrónico: Desarrolla una función que valide si una cadena de texto  es una dirección de correo electrónico válida. Muestra el resultado en un elemento HTML. 

function validarCorreo() {
    const correo=document.getElementById("correo").value;
    const rej13=document.getElementById("ej13");
    const regCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Expresión regular para validar el formato de correo

    if (regCorreo.test(correo)) {
        rej13.textContent="La dirección es válida";
    }
    else{
        rej13.textContent="Dirección inválida";
    }
}

//14
// Generador de Contraseñas: Crea una función que genere una contraseña aleatoria de una longitud  especificada por el usuario, incluyendo letras mayúsculas, minúsculas, números y símbolos.
function generarContraseña() {
    const longitud=parseInt(document.getElementById("longitud").value);
    const caracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";
    let contraseña="";

    for (let index = 0; index < longitud; index++) {
        const indiceAleatoreo=Math.floor(Math.random()*caracteres.length);
        contraseña+=caracteres.charAt(indiceAleatoreo);
        
    }
    document.getElementById("ej14").textContent=`tu contraseña será ${contraseña}`;
}
