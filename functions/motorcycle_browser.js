// funcion para consultar informacion de una motocicleta en base a la marca y modelo
const consultMotorcycle = async (brand, model, apiKey) => {
    try{
        // consulta a la API de motocicletas
        const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${brand}&model=${model}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            },
            contentType: 'application/json'
        });
        if(!response.ok) throw new Error('Network response was not ok');
        // convertir el resultado a json
        const result = await response.json();
        return result;
    }catch (error){ // en caso de error
        console.error('Error:', error);
        return null;
    }
}

// funcion que llama a la funcion anterior (esto se indica en la documentacion de la API)
const getMotorcycle = async (brand, model, APIKEY) => {
    try{
        // resultado
        let motorcycle = await consultMotorcycle(brand, model, APIKEY);
        // en caso de no encontrar nada
        if(motorcycle === null || motorcycle.length === 0){ // manejar errores
            throw new Error(`El buscador no arroja ningun resultado para: Marca: ${brand}, Modelo: ${model}`);
            return -1;
        }else{
            return motorcycle[0];
        }
    }catch(error){
        console.error('Error:', error);
        return -1;
    }
}

// let brand = 'Italika';
// let model = 'DM200';
// const APIKEY = 'reYE6P5VdYgStLWxkKRxuw==9INg4zu6A1cFfSqS';

// getMotorcycle(brand, model, APIKEY);

export default getMotorcycle;