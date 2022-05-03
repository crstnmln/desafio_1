"use strict";

// Object constructor creation

class Products {
    constructor(name, price, stock) {
        this.price = price;
        this.stock = stock;
        this.name = name;
    };
    updateStcok(purchase) {
        // if(newStock)
        this.stock -= purchase;
        //return this.stock;
    };
};

//objects creation

const notebooks = new Products('Cuadernos', 4500, 25);
const pens = new Products('Bolígrafos', 1000, 50);
const pencils = new Products('Lápices', 800, 100);
const notepads = new Products('Libretas', 3500, 35);
const markers = new Products('Marcadores', 2300, 0);
let inventory = [notebooks, pens, pencils, notepads, markers];

let admns = ["crstnmln", 93051410961, "gustavo", 30345, "ramirez", 1014];

const modifyAdmin = (dataBase) => {
    let addDelete = prompt("para agregar un usuario, ingrese 1 \n" + "para eliminar un usuario, ingrese  2 \n" + "para agregar un nuevo item a la seccion de productos 3\n" + "para salir ingrese ESC ó 4"),
        check = parseInt(addDelete),
        isItNan = isNaN(addDelete);

    if (isItNan && check > 4) {
        addDelete = parseInt(prompt("ERROR!\n" + "para agregar un usuario, ingrese 1 \n" + "para eliminar un usuario, ingrese 2\n" + "para agregar un nuevo item a la seccion de productos 3\n" + "para salir ingrese ESC ó 4"));
        check = parseInt(addDelete);
        isItNan = isNaN(addDelete);
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
        case 3:
            inventory.push(actualizarInventario());
            break;
        default:
            alert("Saliendo de Sesión de administrador por default");
            break;
    };

};

const adminAcces = () => {
    let admName = prompt("Bienvenido al acceso de administrador por favor ingrese su usuario");
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

const checkout = (selection, itemStock, itemPrice) => {

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

const buyItem = () => {

    let listedItems = '';

    inventory.forEach((item, itemIndex) => {
        listedItems += `${itemIndex + 1}) ${item.name} \n`;
    });


    let userValue = prompt(
        `Bienvenido a nuestra tienda en linea!\n\nLea e ingrese el número de acuerdo al producto deseado.\n\n${listedItems}${inventory.length + 1}) Acceso administrador\n${inventory.length + 2}) salir`);

    let userChoice = parseInt(userValue);
    let isNotValid = isNaN(userChoice);

    if (userValue == null) {
        alert("Gracias por utilizar nuestros servicios - null");
    } else {


        while (isNotValid || userChoice < 1 || userChoice > 8) {
            userValue = prompt(`Opción inválida.\n\nLea e ingrese el número de acuerdo al producto deseado.\n\n${listedItems}${inventory.length + 1}) Acceso administrador\n${inventory.length + 2}) salir`);
            /* isNotValid(userValue); */
            userChoice = parseInt(userValue);
            isNotValid = isNaN(userChoice);
        };


        for (let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {

            if ((userChoice - 1) === itemIndex) {
                if (inventory[itemIndex].stock > 0) {
                    let newStock = checkout(inventory[itemIndex].name, inventory[itemIndex].stock, inventory[itemIndex].price);
                    inventory[itemIndex].updateStcok(newStock);
                    console.log(inventory[itemIndex].stock);
                    break;
                } else {
                    alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
                };
                break;
            } else if ((userChoice) === inventory.length + 1) {
                if (adminAcces()) {
                    modifyAdmin(admns);
                };
                break;
            } else if (userChoice === (inventory.length + 2)) {
                alert("Gracias por utilizar nuestros servicios - DEFAULT");
                break;
            };

        };

        /* inventory.forEach((eachObject, itemIndex) => {
    
            if((userChoice - 1) === itemIndex){
    
                if (eachObject.stock > 0) {
                    let newStock = checkout(eachObject.name, eachObject.stock, eachObject.price);
                    eachObject.updateStcok(newStock);
                    console.log(eachObject.stock);
                    
                } else {
                    alert("Sin disponibilidad de producto en bodega, disculpe las molestias.");
                };
            }else if((userChoice) === inventory.length+1){
                if (adminAcces()) {
                    modifyAdmin(admns);
                };
            }else if(userChoice === (inventory.length + 2)){
                alert("Gracias por utilizar nuestros servicios - DEFAULT");
            }; 
        }
    
        ); */

    };
};

function actualizarInventario() {

    let nombreDeItem = prompt("inserte el nombre del nuevo producto");
    let precio = parseFloat(prompt("inserte el precio"));
    let cantidad = parseFloat(prompt("ingrese la cantidad"));

    const nuevoElemento = new Products(nombreDeItem, precio, cantidad);

    let text = "";
    for (let propiedad in nuevoElemento) {
        text += `${propiedad.toUpperCase()}: ${nuevoElemento[propiedad]}\n`
    };
    alert(`Se ha agregado a la lista:\n${text}`);
    return nuevoElemento;
};

buyItem();