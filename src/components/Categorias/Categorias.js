let enviosURL = "https://envios.develotion.com/";


const obtenerCategorias = (dato) => {
    return fetch(`${enviosURL}/categorias.php`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'apikey': dato.apiKey,
        },
    })
        .then((response) => {
            if (response.status === 200) {
                // En caso satisfactorio retotno una nueva promesa la cual es generada al hacer response.json()
                return response.json();
            } else {
                return Promise.reject(
                    `Ha ocurrido un error al intentar guardar mi to-do, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));

};

export { obtenerCategorias };