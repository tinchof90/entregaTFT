let enviosURL = "https://envios.develotion.com/";


const userRegistro = (datosUser) => {

    return fetch(`${enviosURL}/usuarios.php`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(datosUser),
    })
        .then((response) => {
            if (response.status === 200) {
                // En caso satisfactorio retorno una nueva promesa la cual es generada al hacer response.json()
                return response.json();
            } else {
                return Promise.reject(
                    `Ha ocurrido un error al intentar registrarse, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));
}

// const userSignIn = async (userData) => {

//     try {
//         const response = await fetch(`${urlBase}/usuarios.php`, {
//             // Indico el verbo correspondiente, en este caso POST
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });
//         if (response.status === 200) {
//             return response.json();
//         }
//     } catch (error) {
//         return Promise.reject({
//             message: 'Ha ocurrido un error al  querer registrarse, revise los datos e intente nuevamente',
//         });
//     }


// }


const userLogin = (datosUser) => {
    return fetch(`${enviosURL}/login.php`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        // Envío el cuerpo de mi request con la información que quiero almacenar
        body: JSON.stringify(datosUser),
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(
                    `Ha ocurrido un error al intentar guardar mi to-do, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));
}

export { userRegistro, userLogin};