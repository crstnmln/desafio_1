"use strict";

let admns = ["crstnmln", 93051410961, "gustavo", 30345, "ramirez", 1014];

const modifyAdmin = function (dataBase) {
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
                }else {
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






























/* 
let admName = 'gustavo';
let pssword = 30345;
let noAccess = true;
for (let i = 0, j = 1; i < admns.length && j < admns.length; i++, j++) {
    if (admName === admns[i] && pssword === admns[j]) {
        console.log("credenciales correctas");
        noAccess = false;
        console.log('tomo la opcion ' + admns[i]);
        break;
    } else {
        noAccess = true;
        console.log('salto la opcion ' + admns[i]);
    }
}


 */
