/*
Micro desafío 1:

Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).

Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.
*/

let operacionesBancarias = [-6500,-2000,3000,500,-3000,-2500,2000,-1000];//Diferentes depositos y retiros

function obtenerSaldo (operacionesBancarias)//Retorna un array de la forma [totalDepositos,totalRetiros,saldoActual]
    {
        let saldo=[0,0,49500];
        for (let i=0; i<operacionesBancarias.length; i++)
            {
                if (operacionesBancarias[i]>0)
                    saldo[0] = saldo[0] + operacionesBancarias[i];
                else
                    saldo[1] = saldo[1] + operacionesBancarias[i];
            }
        saldo[2] = saldo[2] + saldo[0] + saldo[1];
        return saldo;
    }

function mensajito (nombre,apellido,CB)
    {
        return "\nEstimado/a "+nombre+" "+apellido+":\nEl monto total de los depositos es de: $"+CB[0]+".\n"+
        "El monto total de los retiros es de: $"+CB[1]+".\n"+"Por lo tanto, su saldo actual en la cuenta es de: $"+CB[2]+".\n";
    }

console.log(mensajito("Gloria","Medina",obtenerSaldo(operacionesBancarias)));