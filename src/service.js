const urlBase = 'https://destinos.develotion.com';



// POST REGISTRO USUARIO

const userSignIn = (userData) => {

    fetch(`${urlBase}/usuarios.php`, {
        // Indico el verbo correspondiente, en este caso POST
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((response) => {
            if (response.status === 200) {
                // En caso satisfactorio retotno una nueva promesa la cual es generada al hacer response.json()
                return response.json();
            } else {
                Promise.reject(
                    `Ha ocurrido un error al intentar registrarse, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));


}




//POST LOGIN

const userLogin = (userData) => {

    fetch(`${urlBase}/login.php`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        // Envío el cuerpo de mi request con la información que quiero almacenar
        body: JSON.stringify(userData),
    })
        .then((response) => {
            if (response.status === 200) {
                // En caso satisfactorio retotno una nueva promesa la cual es generada al hacer response.json()
                return response.json();
            } else {
                Promise.reject(
                    `Ha ocurrido un error al intentar guardar mi to-do, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));

}


export {userSignIn, userLogin};