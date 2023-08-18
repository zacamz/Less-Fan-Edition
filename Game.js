


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
renderPiece("blue",1,1)
renderPiece("blue",3,1)
renderPiece("blue",1,3)
renderPiece("blue",3,3)

renderPiece("red",11,11)
renderPiece("red",13,11)
renderPiece("red",11,13)
renderPiece("red",13,13)


function checkIfPieceCanMove(playerColor,currentX,currentY, newX, newY){
    let canMove = Boolean
    
    doesSpotContainPiece(currentX,currentY)
    doesSpotContainPiece(newX,newY) 

    isMoveDiagonal(currentX,currentY,newX,newY)
    
}

function isNumberofMovesValid(startX,startY,endX,endY){
    
    let validity = true

    let totalX = Math.abs(startX - endX)
    let totalY = Math.abs(startY - endY)

    if((totalX > 2) || (totalY >2)){
        validity = false
    }

    return validity
}

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
    // console.log(x+ " and " +y)
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    if( spot.classList.contains("piece")) {
        return true
    }else{
        return false
    }
}

function isThisASpace(x,y){
    // console.log(x+ " and " +y)
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    if( spot.classList.contains("space")) {
        return true
    }else{
        return false
    }
}
function isThisAWall(x,y){
    // console.log(x+ " and " +y)
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    if( spot.classList.contains("wall")) {
        return true
    }else{
        return false
    }
}



function doesPieceCrossAnotherPiece(startX,startY,endX,endY){
    
    
    if (startX===endX){
        
        let totalY = Math.abs(startY - endY)
        
        let direction = startY>endY ? -1 : 1   
        for (let index = 1; index < totalY; index+= 1) {
            if(doesSpotContainPiece(startX,startY+(index*direction))){
                return true
            }
        }
    }
    if (startY===endY){
        
        let totalX = Math.abs(startX - endX)
        
        let direction = startX>endX ? -1 : 1   
        for (let index = 1; index < totalX; index+= 1) {
            if(doesSpotContainPiece(startX+(index*direction),startY)){
                return true
            }
        }

    }

    return false

}


function isOnBoard(x,y){
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    return !!spot
}
function getSpot(x,y){
    let spot = document.querySelector(`[data-spot-board-x='${x}'][data-spot-board-y='${y}']`)
    
    return spot

}


function* possibleMoves(x,y,dx,dy, moves){

    let currentCost = 0

    
    let cx = x
    let cy = y 
    
    let passedWall= false
    let passedPiece = false
    
    while(moves > currentCost){

        
        
        cx += dx
        cy += dy        
        
        if(!isOnBoard(cx,cy)){
            break
        }

        let currentlyOnWall = isThisAWall(cx,cy)
        if(currentlyOnWall === true){
            currentCost += 1
            passedWall = true
        }
        let currentlyHasPiece = doesSpotContainPiece(cx,cy)
        if(currentlyHasPiece === true){
            if(passedWall||passedPiece){
                break
            }
        } else if(isThisASpace(cx,cy)){
            currentCost += 1
            passedPiece = false
            passedWall = false
            
            yield( {
                 x: cx,
                 y: cy,
     
                 cost: currentCost 
             }
            )
        }

        
    }
    

}


function* getMoves(x,y,moves){
    yield* possibleMoves(x,y,0,1,moves)
    yield* possibleMoves(x,y,0,-1,moves)
    yield* possibleMoves(x,y,1,0,moves)
    yield* possibleMoves(x,y,-1,0,moves)
}


// function spaceToBoardCoords(x,y){
//     return {
//         x: ((Math.floor(x/2)*5)+1)+(((x%2)*2)+1),
//         y: ((Math.floor(y/2)*5)+1)+(((y%2)*2)+1)
//     }
// }


// console.log(spaceToBoardCoords(0,0))
// console.log(spaceToBoardCoords(1,1))