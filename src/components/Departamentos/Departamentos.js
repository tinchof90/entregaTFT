let enviosURL = "https://envios.develotion.com/";


const departamentos = (apiKey) => {
    return fetch(`${enviosURL}/departamentos.php`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'apikey': apiKey,
        },
    })
        .then((response) => {
            if (response.status === 200) {
                // En caso satisfactorio retorno una nueva promesa la cual es generada al hacer response.json()
                return response.json();
            } else {
                return Promise.reject(
                    `Ha ocurrido un error al intentar guardar mi to-do, con status code: ${response.status}`
                );
            }
        })
        .catch((e) => console.log(e));

};

export { departamentos };
