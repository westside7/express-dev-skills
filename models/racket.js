const rackets =  [
    {    
    id: 1234,
    name: 'Yonex Arcsaber 7 Pro',
    beginner: true
},
{
    id: 2345, 
    name: 'Yonex Astrox 77', 
    beginner: true
},
{
    id: 3456,  
    name: 'Yonex Nanoflare 700', 
    beginner: true
},
{
    id: 4567, 
    name: 'Yonex Duora Z-Strike', 
    beginner: false
},
{
    id: 5678, 
    name: 'Victor Thruster Ryuga', 
    beginner: false
},
]

module.exports = {
    getAll,
    getOne,
    update,
    create,
    delete: deleteIt,
}

function getAll() {
    return rackets;
}

function getOne(id) {
    id = parseInt(id);
    return rackets.find(racket => car.id === id);
}

function update(id, updatedRacket) {
    id = parseInt(id);
    const rackets = racket.find(racket => racket.id === id);
    Object.assign(racket, updatedRacket);
}

function create(car) {
    racket.id = Date.now() % 1000000;
    racket.beginner = false;
    rackets.push(racket);
}

function deleteIt(id) {
    id = parseInt(id);
    const idx = rackets.findIndex(racket => racket.id === id)
    cars.splice(idx, 1);
}