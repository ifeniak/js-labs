const FARMS = [
    { id:1, location: "Hiperborea", name: "Cadath", animals: 123, power: 500},
    { id:2, location: "Ukraine", name: "Thule", animals: 88, power: 324},
    { id:3, location: "Kimmeria", name: "Naerlith", animals: 5432, power: 23},
    { id:4, location: "Scytia", name: "Nezhegol", animals: 123, power: 500},
    { id:6, location: "Oriana", name: "Dead Can Dance", animals:7, power:400},
    { id:1, location: "Kujavia", name: "Annanerbe", animals: 123, power: 500},
    { id:8, location: "Sarmatia", name: "Black Sun", animals:5, power:180},
    { id:9, location: "Hiperborea", name: "Tottenkopf", animals:12, power:2000},
    { id:10, location: "Scytia", name: "Templ Victorae", animals:6, power:300},
    { id:11, location: "Turkey", name: "Kolibri Hotel", animals:7, power:450}
]

export const getAllFarms = () => {
    return FARMS;
};

export const postFarm = (body) => {
    FARMS.push(body);
}

export const updateFarm = (id, body) => {
    let index = FARMS.findIndex(idx => idx.id == id);
    FARMS[index].location = body.location;
    FARMS[index].name = body.name;
    FARMS[index].animals = body.animals;
    FARMS[index].power = body.power;
}