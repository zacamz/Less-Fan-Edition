


function renderPiece(colorOfPiece,coasterX,coasterY){

    let pieceImg = "pathToImage"

   colorOfPiece=== "red" ? 
   pieceImg = "piecered.png" : 
   pieceImg = "pieceblue.png"


    let piece = document.createElement('div')
    piece.style.backgroundImage = `url(${pieceImg})`
    piece.style.width = "200px"
    piece.style.height = "200px"
    piece.style.position = "absolute"
    piece.style.backgroundSize = "100% 100%"

   let spot = document.querySelector(`[data-spot-board-x='${coasterX}'][data-spot-board-y='${coasterY}']`)
   
   spot.append(piece)
   spot.classList.add("piece")
   spot.classList.add(colorOfPiece)
   
}

renderPiece("red",5,5)
renderPiece("red",4,5)
renderPiece("red",4,4)
renderPiece("red",5,4)

renderPiece("blue",0,0)
renderPiece("blue",0,1)
renderPiece("blue",1,0)
renderPiece("blue",1,1)

function checkIfPieceCanMove(playerColor,currentX,currentY, newX, newY){
    let canMove = Boolean
    
    doesSpotContainPiece(currentX,currentY)
    doesSpotContainPiece(newX,newY) 

    isMoveDiagonal(currentX,currentY,newX,newY)
    
}

// function isNumberofMovesValid(startX,startY,endX,endY){

//     let validity = true

//     let totalX = Math.abs(startX - endX)
//     let totalY = Math.abs(startY - endY)

//     if((totalX > 2) || (totalY >2)){
//         validity = false
//     }

//     return validity
// }

function isPlayersPiece(startX){}

function isMoveDiagonal(startX,startY,endX,endY){

    let diagonal = false

    let totalX = Math.abs(startX - endX)
    let totalY = Math.abs(startY - endY)

    if((totalX > 0) && (totalY > 0)){
        diagonal = true
    }

    return diagonal
}

function doesSpotContainPiece(x,y){
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    if( spot.classList.contains("piece")) {
        return true
    }else{
        return false
    }
}


function doesPieceCrossAnotherPiece(startX,startY,endX,endY){


}

function doesPieceCrossWall(startX,startY,endX,endY){


}


console.log(doesSpotContainPiece(3,5))