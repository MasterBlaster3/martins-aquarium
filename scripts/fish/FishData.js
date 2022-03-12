/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

//variable   object
const fishCollection = [
    {// key:  value
        name: "Frodo",
        diet: "crustaceans",
        species: "Yellow Tang",
        length: 5,
        saltwater: true,
        image: "yellatang.jpg",
        location: "Honolulu, HI"
    },
    {
        name: "Samwise",
        diet: "everything",
        species: "Chonky Shark",
        length: 30,
        saltwater: true,
        image: "sharky.jpg",
        location: "Cape Cod"
    },
    {
        name: "Nemo",
        diet: "Minnows",
        species: "Clown Fish",
        length: 3,
        saltwater: true,
        image: "clownfish.jpg",
        location: "Fiji"
    }
]

export const getFish = () => {
    return fishCollection
}

// export const addFish = () => {
//     return 
// }

// export const eatFish = () => {
//     return 
// }

console.log()