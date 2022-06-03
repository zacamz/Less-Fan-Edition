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

let coaster =
    [["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]]

let buildCoaster = function (coaster) {

    let assembledCoaster = document.createElement("div")

    assembledCoaster.classList.add("coaster")

    for (const [rowIndex, row] of coaster.entries()) {

        let rowHTML = document.createElement("div")

        rowHTML.classList.add("row", (rowIndex % 2)?"odd" : "even")


        for (const [spotIndex, spot] of row.entries()) {

            let spotHTML = document.createElement("div")

            spotHTML.classList.add(legend[spot], "spot", (spotIndex % 2) ? "odd" : "even")

            rowHTML.append(spotHTML)

        }

        assembledCoaster.append(rowHTML)
    }

    return assembledCoaster

}

document.body.append(buildCoaster(coaster))
