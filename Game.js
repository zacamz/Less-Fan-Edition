


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
}

renderPiece("red",5,5)
renderPiece("red",4,5)
renderPiece("red",5,4)
renderPiece("red",4,4)

renderPiece("blue",0,0)
renderPiece("blue",0,1)
renderPiece("blue",1,0)
renderPiece("blue",1,1)