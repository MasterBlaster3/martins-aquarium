export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishArr) {
        if(fish.length % 3 === 0){
            holyFishArray.push(fish);
        }
    }
    return holyFishArray
}

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFishArray = [];
    for(const fish of fishArray){
        if(fish.length % 5 === 0 && fish.length % 3 != 0){
            soldierFishArray.push(fish);
        }
    }
    return soldiersArray
}

export const getUnworthyFish = () => {
    // Any fish not a multiple of 3 or 5
    const otherFishArray = [];
    for(const fish of fishArr){
        if(fish.length % 5 != 0 && fish.length % 3 != 0){
            otherFishArray.push(fish);
        }
    }
    return unworthyArray
}
