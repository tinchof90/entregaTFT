let enviosURL = "https://envios.develotion.com/";

const nuevoEnvio = (envioDatos) => {
    return fetch(`${enviosURL}/envios.php`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apikey': envioDatos.apiKey,
        },
        // Envío el cuerpo de mi request con la información que quiero almacenar
        body: JSON.stringify(envioDatos.body),
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
}

const eliminarEnvio = (envioDatos) => {
    return fetch(`${enviosURL}/envios.php`, {
        method: 'DEL',
        headers: {
            'Content-type': 'application/json',
            'apikey': envioDatos.apiKey,
        },
        // Envío el cuerpo de mi request con la información que quiero almacenar
        body: JSON.stringify(envioDatos.idEnvio),
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
}

export { nuevoEnvio, eliminarEnvio };