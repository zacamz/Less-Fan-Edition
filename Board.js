// class Board {
//     constructor(numberOfPlayers){
//         this.numberOfPlayers = numberOfPlayers
//     }
//     buildCoaster(){
//        []
//     }
//     renderBoard(){

//     }

// }

let legend = {
    D: "dummy",
    U: "notWall",
    W: "wall",
    S: "space",
}

let coasters =
    [[["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "W", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "W", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "W", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "W", "D"],
    ["U", "S", "U", "S", "W"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "W", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],]


let buildCoaster = function (coaster) {

    let assembledCoaster = document.createElement("div")

    assembledCoaster.classList.add("coaster")

    for (const [rowIndex, row] of coaster.entries()) {

        let rowHTML = document.createElement("div")

        rowHTML.classList.add("row", (rowIndex % 2) ? "odd" : "even")


        for (const [spotIndex, spot] of row.entries()) {

            let spotHTML = document.createElement("div")

            spotHTML.classList.add(legend[spot], "spot", (spotIndex % 2) ? "odd" : "even")

            rowHTML.append(spotHTML)

        }

        assembledCoaster.append(rowHTML)
    }

    return assembledCoaster

}


let allCoasters = [
    0,
    1, 1,
    2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4,
    5, 5,
    6
]

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;

    // https://stackoverflow.com/a/2450976
}

let shuffleCoasters = function(coastersArray){

    let shuffledCoasters = shuffle(coastersArray)

    
    return shuffledCoasters.slice(0,9)

}



let renderBoard = function(coastersArray){



    let board = document.createElement("div")
    board.classList.add("board")


    if (coastersArray.length === 9){
        for(i=0; i<3; i+=1){
            let boardRow = document.createElement("div")
            boardRow.classList.add("boardRow")

            for(j=0;j<3;j+=1){
                let coasterIndex = coastersArray[j*3+i%3]
               boardRow.append(buildCoaster(coasters[coasterIndex]))
            }
            
            board.append(boardRow)
        }
    }

    return board

}



document.body.append(renderBoard(shuffleCoasters(allCoasters)))