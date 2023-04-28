// const axios = require('axios');


// function getCharById (res, id){
    
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const character ={
//             id: response.data.id,
//             name: response.data.name,
//             gender: response.data.gender,
//             species: response.data.species,
//             origin: response.data.origin.name,
//             image: response.data.image,
//             status: response.data.status
//         }  
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(JSON.stringify(character));
//         })
//     .catch((error) => {
//         res.writeHead(500, {'Content-type': 'application/json'});
//         res.end(JSON.stringify(error.message));
//     });
// }

// module.exports = getCharById;


const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

function getCharById (req, res ){
  
    let { id } = req.params;
    axios(`${URL}${id}`)
    .then(response => response.data)
    .then(({status,name,species,origin,image,gender})=>{
        if(name){
            const character ={
                id,
                name,
                species,
                origin,
                image,
                gender,
                status
        }
        return res.status(200).json(character);
    }
    return res.status(404).send('Not found');
    })
    .catch (error => res.status(500).send(error.message));
}
    


module.exports = {getCharById};