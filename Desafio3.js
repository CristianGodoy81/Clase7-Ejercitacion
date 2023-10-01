/*
Desafío extra (opcional):

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones:

En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
desarrolles.
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/

let numerosPositivos=[24,58,64,12,57,46,88,651,115,46,32,54,48,62,1,5,2];
function soloPares(arrayDeNumeros)
    {
        let arrayDePares=[];
        for (let i=0;i<arrayDeNumeros.length;i++)
            {
                if (arrayDeNumeros[i]%2==0)
                    arrayDePares.push(arrayDeNumeros[i]);
            }
        return arrayDePares;
    }
console.log(soloPares(numerosPositivos));