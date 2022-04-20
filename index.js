"use strict";

/* 
let userValue = prompt('Please enter a number between 10 and 30 to be analyzed');
let userChoice = parseFloat(userValue);
let isNotValid = isNaN(userChoice); 



while (isNotValid && (userChoice < 10 || userChoice > 30)) {
    userValue = prompt('Please enter a valid number to be analyzed ');
    userChoice = parseFloat(userValue);
    isNotValid = isNaN(userChoice); 
}


(userChoice > 10 && userChoice < 20) ? (console.log(`the number ${userChoice} is greater than 10`), alert(`the number ${userChoice} is greater than 10`)) 
: (userChoice > 20 && userChoice < 30) ? (console.log(`the number ${userChoice} is greater than 20 but less than 30`), alert(`the number ${userChoice} is greater than 20 but less than 30`)): console.log("this option should not be visible")

    

let quantity = parseInt(prompt('Inserte la cantidad de veces a repetir la palabra'));
isNotValid = isNaN(quantity); 

while (isNotValid) {
    quantity = prompt('Please enter a valid number to be analyzed');
    isNotValid = isNaN(quantity); 
}

for(let i = 1; i <= quantity; i++){
    if(i === 1){
        console.log('Hola! ' + i  + ' vez');
    } else {
        console.log('Hola! ' + i  + ' veces');
    }
}
 */

// Object constructor creation

class Products {
    constructor(price, stock) {
        this.price = price;
        this.stock = stock;
    }
    updateStcok(purchase) {
        // if(newStock)
        this.stock -= purchase;
        //return this.stock;
    }
}

//objects creation

const cuadernos = new Products(4500, 25);
const boligrafos = new Products(1000, 50);
const lapices = new Products(800, 100);
const libretas = new Products(3500, 35);
const marcadores = new Products(2300, 0);

// function that asks for amount of items user will purchase  - returns alert with total price and the total items purchased as it will be used later to update products stock.

let checkout = (selection, itemStock, itemPrice) => {
    // ask if it is better if I gather any info from a global or external variable or property or if I should use parameters instead.

    let items = prompt(
        "Usted ha seleccionado " +
        selection +
        ".\n\n" +
        "Actualmente tenemos " +
        itemStock +
        " disponibles\n" + //preguntar lo de item stock
            "ingrese la cantidad de " +
            selection +
            " que desea comprar:"
    );
    let parsedValue = parseInt(items),
        isNan = isNaN(parsedValue);

    /* while (isNan) {
        items = prompt('Lo sentimos, no ha ingresado una cantidad válida.\n\n' +
            'Actualmente tenemos ' + itemStock + ' disponibles\n' +
            'ingrese nuevamente la cantidad de ' + selection + ' que desea comprar:');
            parsedValue = parseInt(items);
            isNan = isNaN(parsedValue);

    }; */

    while (parsedValue > itemStock || isNan) {
        items = prompt("Lo sentimos, cantidad no disponible.\n\n" + "Actualmente tenemos " + itemStock + " disponibles\n" + "Ingrese nuevamente la cantidad de " + selection + " que desea comprar:");
        parsedValue = parseInt(items);
        isNan = isNaN(parsedValue);
    }

    /* https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
    https://www.javascripttutorial.net/javascript-return-multiple-values/
    */
    let pay = parsedValue * itemPrice;

    alert("el valor total de su compra es: " + pay + ".\n\n" + "GRACIAS POR PREFERIRNOS");

    return parsedValue;
};

let userValue = prompt(
    "Bienvenido a nuestra tienda en linea!\n\n" + "Lea e ingrese el número de acuerdo al producto deseado.\n\n" + "1. Cuadrenos\n" + "2. Bolígrafos\n" + "3. Lápices\n" + "4. Libretas\n" + "5. Marcadores\n" + "6. Salir del menú"
);
/* isNotValid(userValue); */
let userChoice = parseInt(userValue);
let isNotValid = isNaN(userChoice);

//crear funcion para validar si es numero

while (isNotValid || userChoice < 1 || userChoice > 6) {
    userValue = prompt("Opción inválida!\n\n" + "Por favor, ingrese el número de acuerdo al producto deseado.\n\n" + "1. Cuadrenos\n" + "2. Bolígrafos\n" + "3. Lápices\n" + "4. Libretas\n" + "5. Marcadores\n" + "6. Salir del menú");
    /* isNotValid(userValue); */
    userChoice = parseInt(userValue);
    isNotValid = isNaN(userChoice);
}

switch (userChoice) {
    case 1:
        //preguntar lo del ternary con multiples lineas

        if (cuadernos.stock > 0) {
            let newStock = checkout("Cuadernos", cuadernos.stock, cuadernos.price);
            cuadernos.updateStcok(newStock);
            console.log(cuadernos.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        }
        break;
    case 2:
        if (boligrafos.stock > 0) {
            let newStock = checkout("Bolígrafos", boligrafos.stock, boligrafos.price);
            boligrafos.updateStcok(newStock);
            console.log(boligrafos.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        }
        break;
    case 3:
        if (lapices.stock > 0) {
            let newStock = checkout("Lápices", lapices.stock, lapices.price);
            lapices.updateStcok(newStock);
            console.log(lapices.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        }
        break;
    case 4:
        if (libretas.stock > 0) {
            let newStock = checkout("Libretas", libretas.stock, libretas.price);
            libretas.updateStcok(newStock);
            console.log(libretas.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        }
        break;
    case 5:
        if (marcadores.stock > 0) {
            let newStock = checkout("Marcadores", marcadores.stock, marcadores.price);
            marcadores.updateStcok(newStock);
            console.log(marcadores.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        }
        break;
    /* case 6: 
        alert('Gracias por utilizar nuestros servicios');
        break; */
    default:
        alert("Gracias por utilizar nuestros servicios - DEFAULT");
}
