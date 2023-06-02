# Less-Fan-Edition

![Less](./READMEIMGS/Screenshot%202023-06-02%20151144.png)
Our Attempt at making a digital version of the hot new sensation Less the Board Game. Same Confusing Title Less Effective Gameplay!

Board -ems

Need to figure out how to display a coaster on the screen

how to randomly generate the walls onto said coaster

how to display said randomly generated coasters on the screen 

Legend{
    D = null
    U = dotted line
    W = wall
    S = Spot
}

Basic Card Config
-----------------
D,W,D,W,D   
W,S,W,S,W   
D,W,D,W,D   
W,S,W,S,W   
D,W,D,W,D   

Amount of Cards in Box
-----------------------
            X1
D,U,D,U,D
W,S,U,S,U
D,U,D,U,D
W,S,U,S,U
D,U,D,U,D 

            X2
D,U,D,U,D   
U,S,U,S,U
D,U,D,W,D
U,S,W,S,U
D,U,D,U,D

            X3
D,U,D,U,D   
U,S,U,S,U
D,U,D,U,D
U,S,W,S,U
D,W,D,U,D 

            X4
D,U,D,U,D   
U,S,U,S,U
D,U,D,U,D
U,S,W,S,U
D,U,D,W,D 

            X3
D,U,D,U,D   
U,S,W,S,U
D,U,D,W,D
U,S,U,S,W
D,U,D,U,D 

             X2
D,U,D,U,D  
W,S,U,S,U
D,W,D,U,D
W,S,U,S,U
D,U,D,U,D 

            X1
D,U,D,U,D   
W,S,U,S,U
D,U,D,U,D
U,S,U,S,U
D,U,D,U,D 


Need to figure out a way to rotate a 2D array and have the code still be valid however it turns. https://www.codewars.com/kata/525a566985a9a47bc8000670

Update 6/2/2023

We have successfully rendered the board in the Board.js File and it includes logic for creating a randomized 3 X 3 board with rotated Pieces.

Moving forward we will start developing the Logic in the Game.js file.

Rules for the Game are as Follows:

Objective: 
Each Player starts with four wooden circles on a coaster on the corner of the game board. 

The Objective of the Game is to move all of your pieces to the opposing corner coaster on the diagonal of the boarder. 

This Coaster contains the four pieces of your Opponent.

and their Objective is the same as yours. to get their four pieces onto your starting coaster.

You want to do this in as few of moves as possible. 

Moving:

Each Player has a turn. The Lighter pieces goes first. Each Turn has a total of 3 moves. 

you can only move vertically and horizontally, NOT DIAGONALLY... 

if you move to a new square that is one move. 

you can jump over any piece as long as you don't jump over more one piece or a piece and a wall. this is considered one move. 

you can jump over a wall but that is considered two moves.

you can even jump over a double wall but that is considered 3 moves. 




Working with Coordinates:

We have assigned each "spot" with a x an y which is passing through the coaster cordinate on the board. 

each spot has a index between 0-3 to represent its location in the coaster.

(0,0)1 | 01 | 01
23 | 23 | 23
___ ____ ____
01 | 01 | 01
23 | 23 | 23
___ ____ ____
01 | 01 | 01
23 | 23 | 2(5,5)

0 can go to: 2 or 1
1 can go to: 0 or 3
2 can go to: 0 or 3


 
x = (coasterX * 2)+(indexSpot % 2) 
y = (coasterY * 2)+Math.floor(indexSpot / 2)


Starting Postions:
0,0 0,1
1,0 1,1

4,4 4,5
5,4 5,5





Moving Function:

We are going to have to build a function that takes in the current loacation of the piece and then the location the player wants to move that piece.

It will check to make sure there is a piece that starting location and that there is not a piece in the chosen location.

also making sure that the move doesn't cross two pieces or a piece and a wall

that the piece or jumps to an adjacent spot or over one piece to a valid spot.

It will check to that the move is horizontal or vertical. 

also if it crosses any walls that it subtracts the correct amount of points or that there are enough points left to jump a wall. 

then adds the total number of moves to the players total for the game. 


