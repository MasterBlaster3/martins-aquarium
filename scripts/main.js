// import { getFish, getMostHolyFish, getSoldierFish, getUnworthyFish } from "./fishes/fishData.js";
import { getFish } from './fish/FishData.js'
import { FishList } from './fish/FishList.js'
import { tipList } from './tips/TipList.js'
import { locationLister } from './locations/LocationList.js'
//var name of the array of fishCollection
const allTheFish = getFish()



// var
// let 
// const

//These two lines are trying to utilize getFish() Independently of FishList(), both must be removed now that 
// getFish() is not be imported
//for..of loop
for (const fish of allTheFish) {
    console.log("single fish is", fish)
}

// const arr1 = [23, 324, 583, 1493]

// for (const num of arr1){
//     console.log(num + arr1[0])
// }


// Import the FishList here
FishList()
tipList()
locationLister()
