
const game = {
    currentPlayer: "blue",
    movesLeft:3,
    selected: null,
    scores:{blue:0,red:0},
    winner:null,
}

const RED_GOAL = [  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 1, y: 3 },
  { x: 3, y: 3 },
]
const BLUE_GOAL = [  
    { x: 11, y: 11 },
  { x: 13, y: 11 },
  { x: 11, y: 13 },
  { x: 13, y: 13 },
]

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


function selectPiece(x,y){
    if (isPlayersPiece(x,y)){
        game.selected = {x,y}
        return game.selected
    }
    game.selected =null
    return game.selected

}

function clearSelection(){
    clearHighlights()
    game.selected = null
}

function spendMoves(cost){
    if(cost>=1 && cost <= game.movesLeft){
        game.movesLeft -= cost
        game.scores[game.currentPlayer] += cost
        console.log(`moves left: ${game.movesLeft} ${game.currentPlayer}:${game.scores[game.currentPlayer]}`)
    }

}

function switchPlayer(){
    if(game.movesLeft == 0 ){

        clearSelection()
        if(game.currentPlayer == "red"){
            game.currentPlayer = "blue"
        }
        else if(game.currentPlayer == "blue"){
            game.currentPlayer = "red"
        }
        
        game.movesLeft = 3
    }
}

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

function getPieceColor(x, y) {
  let spot = document.querySelector(
    `[data-spot-board-x='${x}'][data-spot-board-y='${y}']`
  )
  if (!spot || !spot.classList.contains("piece")) {
    return null
  }
  if (spot.classList.contains("blue")) return "blue"
  if (spot.classList.contains("red")) return "red"
  return null
}

function isPlayersPiece(x, y) {
  return getPieceColor(x, y) === game.currentPlayer
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
            if(passedPiece === true){
                break
            }
            currentCost += 1
            passedWall = true
        }
        let currentlyHasPiece = doesSpotContainPiece(cx,cy)
        if(currentlyHasPiece === true){
            if(passedWall||passedPiece){
                break
            }
            passedPiece = true
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

function clearHighlights(){
   document.querySelectorAll(".highlight1, .highlight2, .highlight3").forEach(el =>{el.classList.remove("highlight1", "highlight2", "highlight3")})
}
function* getMoves(x,y,moves){
    yield* possibleMoves(x,y,0,1,moves)
    yield* possibleMoves(x,y,0,-1,moves)
    yield* possibleMoves(x,y,1,0,moves)
    yield* possibleMoves(x,y,-1,0,moves)
}

function movePiece(toX, toY) {
  const fromX = game.selected.x
  const fromY = game.selected.y
  const color = getPieceColor(fromX, fromY)
  const fromSpot = getSpot(fromX, fromY)
  fromSpot.classList.remove("piece", "blue", "red")
  fromSpot.replaceChildren()  // removes the image div
  renderPiece(color, toX, toY)
}

function checkWinner() {
  let blueWon = true
  for (const spot of BLUE_GOAL) {
    if (getPieceColor(spot.x, spot.y) !== "blue") {
      blueWon = false
      break
    }
  }
  if (blueWon) {
    game.winner = "blue"
    return
  }
  let redWon = true
  for (const spot of RED_GOAL) {
    if (getPieceColor(spot.x, spot.y) !== "red") {
      redWon = false
      break
    }
  }
  if (redWon) {
    game.winner = "red"
  }
}

document.querySelector(".board").addEventListener("click", function (event){
    
    if (game.winner) return
    const spot = event.target.closest(".spot")
    if (!spot) return
    console.log(spot.classList)
    const x = Number(spot.dataset.spotBoardX)
    const y = Number(spot.dataset.spotBoardY)

    if (isPlayersPiece(x,y)){
        clearHighlights()
        selectPiece(x,y)
        for (let move of getMoves(x, y, game.movesLeft)) {
        getSpot(move.x, move.y).classList.add(`highlight${move.cost}`)}
    } else if(game.selected){
        for (let cost = 1; cost <= 3; cost++) {
         if (spot.classList.contains(`highlight${cost}`)) {
            movePiece(x,y)
            spendMoves(cost)
            clearSelection()
            checkWinner()
            
            switchPlayer()
        
        break
  }
}
    }else{
        clearSelection()
    }
        
})

