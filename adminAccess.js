"use strict";

// Object constructor creation

class Products {
    constructor(price, stock) {
        this.price = price;
        this.stock = stock;
    };
    updateStcok(purchase) {
        // if(newStock)
        this.stock -= purchase;
        //return this.stock;
    };
};

//objects creation

const cuadernos = new Products(4500, 25);
const boligrafos = new Products(1000, 50);
const lapices = new Products(800, 100);
const libretas = new Products(3500, 35);
const marcadores = new Products(2300, 0);

const modifyAdmin = (dataBase) => {
    let addDelete = prompt("para agregar un usuario, ingrese 1 \n" + "para eliminar un usuario, ingrese  2 \n" + "para salir ingrese ESC ó 3"),
        check = parseInt(addDelete),
        isItNan = isNaN(addDelete);

    if (isItNan && check > 3) {
        addDelete = parseInt(prompt("ERROR!\n" + "para agregar un usuario, ingrese 1 \n" + "para eliminar un usuario, ingrese  2 \n" + "para salir ingrese ESC ó 3"));
        (check = parseInt(addDelete)), (isItNan = isNaN(addDelete));
    } else if (addDelete === "ESC") {
        alert("Saliendo de Sesión de administrador");
    };

    switch (check) {
        case 1:
            let usr = prompt("por favor ingrese el nombre de usuario");
            let pass = prompt("Por favor ingrese contraseña numérica");
            check = parseInt(pass);

            while (!check) {
                let pass = prompt("Error, su contraseña debe ser solo numerica, \n Por favor ingrese contraseña numérica");
                check = parseInt(pass);
            };
            dataBase.push(usr, check);
            alert('se ha guardado ' + usr + pass);
            console.log(dataBase);
            break;
        case 2:
            if (dataBase.length <= 3) {
                alert("Error, no esta permitido eliminar al Administrador Principal");
            } else {
                let deletedPass = dataBase.pop();
                let deletedUser = dataBase.pop();

                alert("Se ha eliminado el usuario " + deletedUser);
                console.log(" se eliminó " + deletedUser + " y " + deletedPass);
                console.log(dataBase);
            };
            break;
        default:
            alert("Saliendo de Sesión de administrador ha seleccionado la opcion 3");
            break;
    };

};

const adminAcces = function () {
    let admName = prompt("Bienbenido al acceso de administrador por favor ingrese su usuario");
    let noAccess = true;


    if (admName === "ESC") {
        alert("Saliendo de Sesion de administrador");
        return false;
    } else {
        let pssword = parseInt(prompt("Ingrese su contraseña"));

        while (noAccess) {
            /* for (let i = 0, j = 1; i < admns.length && j < admns.length; i++, j++) {
                if (admName === admns[i] && pssword === admns[(j)]) { */
            for (let i = 0; i < admns.length; i++) {
                if (admName === admns[i] && pssword === admns[i + 1]) {
                    alert("credenciales correctas");
                    console.log("credenciales correctas");
                    noAccess = false;
                    console.log("tomo la opcion " + admns[i]);
                    break;
                } else {
                    noAccess = true;
                    console.log("salto la opcion " + admns[i]);
                };
            };

            if (noAccess) {
                console.log("f");
                admName = prompt("Error de credenciales, por favor ingrese su usuario");
                pssword = parseInt(prompt("Ingrese su contraseña"));
            };

            if (admName === "ESC") {
                alert("Saliendo de Sesion de administrador");
                return false;
            }
        };

        return true;
    };
};


// function that asks for amount of items user will purchase  - returns alert with total price and the total items purchased as it will be used later to update products stock.

const checkout = (selection, itemStock, itemPrice) => {
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

    while (parsedValue > itemStock || isNan) {
        items = prompt("Lo sentimos, cantidad no disponible.\n\n" + "Actualmente tenemos " + itemStock + " disponibles\n" + "Ingrese nuevamente la cantidad de " + selection + " que desea comprar:");
        parsedValue = parseInt(items);
        isNan = isNaN(parsedValue);
    };

    /* https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
    https://www.javascripttutorial.net/javascript-return-multiple-values/
    */

    let pay = parsedValue * itemPrice;

    alert("el valor total de su compra es: " + pay + ".\n\n" + "GRACIAS POR PREFERIRNOS");

    return parsedValue;
};

let admns = ["crstnmln", 93051410961, "gustavo", 30345, "ramirez", 1014];

let userValue = prompt(
    "Bienvenido a nuestra tienda en linea!\n\n" + "Lea e ingrese el número de acuerdo al producto deseado.\n\n" + "1. Cuadrenos\n" + "2. Bolígrafos\n" + "3. Lápices\n" + "4. Libretas\n" + "5. Marcadores\n" + "6. acceso de administrador\n" + "7. Salir.");

let userChoice = parseInt(userValue);
let isNotValid = isNaN(userChoice);

//crear funcion para validar si es numero

while (isNotValid || userChoice < 1 || userChoice > 8) {
    userValue = prompt("Opción inválida!\n\n" + "Por favor, ingrese el número de acuerdo al producto deseado.\n\n" + "1. Cuadrenos\n" + "2. Bolígrafos\n" + "3. Lápices\n" + "4. Libretas\n" + "5. Marcadores\n" + "6. acceso de administrador\n" + "7. Salir.");
    /* isNotValid(userValue); */
    userChoice = parseInt(userValue);
    isNotValid = isNaN(userChoice);
};

switch (userChoice) {
    case 1:

        if (cuadernos.stock > 0) {
            let newStock = checkout("Cuadernos", cuadernos.stock, cuadernos.price);
            cuadernos.updateStcok(newStock);
            console.log(cuadernos.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        };
        break;
    case 2:
        if (boligrafos.stock > 0) {
            let newStock = checkout("Bolígrafos", boligrafos.stock, boligrafos.price);
            boligrafos.updateStcok(newStock);
            console.log(boligrafos.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        };
        break;
    case 3:
        if (lapices.stock > 0) {
            let newStock = checkout("Lápices", lapices.stock, lapices.price);
            lapices.updateStcok(newStock);
            console.log(lapices.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        };
        break;
    case 4:
        if (libretas.stock > 0) {
            let newStock = checkout("Libretas", libretas.stock, libretas.price);
            libretas.updateStcok(newStock);
            console.log(libretas.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        };
        break;
    case 5:
        if (marcadores.stock > 0) {
            let newStock = checkout("Marcadores", marcadores.stock, marcadores.price);
            marcadores.updateStcok(newStock);
            console.log(marcadores.stock);
        } else {
            alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
        };
        break;
    case 6:
        if (adminAcces()) {
            modifyAdmin(admns);
        };
        break;
    default:
        alert("Gracias por utilizar nuestros servicios - DEFAULT");
};


let inventory = [cuadernos, boligrafos, lapices, libretas, marcadores];

inventory.forEach(element => {
    
    
});

function actualizarInventario() {

    let nombreDeItem = prompt("inserte el nombre del nuevo producto");
    let precio = prompt("inserte el precio");
    let cantidad = prompt("ingrese la cantidad");

    const nuevoElemento = new Products(nombreDeItem, precio, cantidad);
    return nuevoElemento;
};

// inventory.push(actualizarInventario());