function diceeGame()
{
    var PlayerRandom;
    var whoWin =[];
    for(var player = 1; player<3; player++)
    {
        PlayerRandom = Math.floor(Math.random()*6+1);
        for(var counter = 1; counter<7; counter++)
        {
            if(PlayerRandom === counter)
            {
                document.querySelector(".img"+player).setAttribute("src","images/dice"+counter+".png");
            }
        }
         whoWin.push(PlayerRandom);
    }
    WinnerLooser(whoWin);
}
function WinnerLooser(whoWin)
{
    document.querySelector("h1").style.fontSize = "6rem"
    if(whoWin[0]===whoWin[1])
    {
         document.querySelector("h1").innerHTML = "Draw";
    }
    if(whoWin[0]>whoWin[1])
    {
         document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    if(whoWin[0]<whoWin[1])
    {
         document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
}
diceeGame();