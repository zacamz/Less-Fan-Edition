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
[[["D","U","D","U","D"],
["W","S","U","S","U"],
["D","U","D","U","D"],
["W","S","U","S","U"],
["D","U","D","U","D"]],

[["D","U","D","U","D"],
["U","S","U","S","U"],
["D","U","D","W","D"],
["U","S","W","S","U"],
["D","U","D","U","D"]],

[["D","U","D","U","D"],
["U","S","U","S","U"],
["D","U","D","U","D"],
["U","S","W","S","U"],
["D","W","D","U","D"]],

[["D","U","D","U","D"],
["U","S","U","S","U"],
["D","U","D","U","D"],
["U","S","W","S","U"],
["D","U","D","W","D"]],

[["D","U","D","U","D"],
["U","S","W","S","U"],
["D","U","D","W","D"],
["U","S","U","S","W"],
["D","U","D","U","D"]],

[["D","U","D","U","D"],
["W","S","U","S","U"],
["D","W","D","U","D"],
["W","S","U","S","U"],
["D","U","D","U","D"]],

[["D","U","D","U","D"],
["W","S","U","S","U"],
["D","U","D","U","D"],
["U","S","U","S","U"],
["D","U","D","U","D"]],]


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

for(let i= 0; i<coasters.length;i+=1){
document.body.append(buildCoaster(coasters[i]))
}
