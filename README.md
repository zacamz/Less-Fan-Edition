# Less-Fan-Edition
My Attempt at making a digital version of the hot new sensation Less the Board Game. Same Confusing Title Less Effective Gameplay!

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