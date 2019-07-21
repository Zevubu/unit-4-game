# unit-4-game

This is a Crystal collector game. not the rpg... although it has rpg elements in it.


The opening screen is replaced by the actual game on clicking start game button. Using jquery.

First 4 gems will add a random number each round
the fallowing 3 will delete a random number each but can only be used twice each round
the final two match the opponents score and instantly take them out but can only be used once for the whole game. 
win 5 to win the game. 
The opponents imgs are random and will not repeat until they have all been used. 
All of my css was done in flexbox.

The game.
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="assets/javascript/game.js"> </script>  
        <title>Crystal Gem battle game</title>
    </head>
    <body>
        <header>
            <section>
                <img id='steven-universe-header-img' src = 'assets/imges/stevenuniverseheader.png'  alt='Steven Universe'>
            </section>
        </header>
    <section id="flexbox-header-outer">
            <section id="flexbox-header-inner">
                <section id="game-discription">         
                    <p>There are four main Crystal Gems to fight with.</p>
                    <p>Each is given a random value at the begining of each battle. Click on them to add there value to your total score. </p>
                    <p>To win you have to match your score to your opponents score. If you go over even by 1 you loss the battle.</p>
                    <P>if a battels not going well you can call for back up but beware you can only use these Gems so many times.</p>
                    <p>After each fight the numbers will be refeshed and everyone will have new numbers.</p>
                    <p>Get 10 wins to win the game and save the day.</p>
                    <p>Good luck!</p>
                    <section id="start-section">
                        <button id="start">Start the game!</button>
                    </section>
                </section>
            </section>
        </section>
        <section id="body-flex">
            <section id="opponent-flexbox">
                <section id="random-num-area">
                    <section id="opponent-score">
                        <span id="random-num"></span>
                    </section>
                    <section id="opponent-img-section"></section>
                    <section id="op-name-text">
                    <p id="opponent-name"></p>
                    </section>
                </section>                 
            </section>
            <section id="score-area">
                <span id="score"></span>
            </section>
            <section id="all-gems-flexbox">  
                <section id="crystal-gems">
                    <section id="flexbox-gems">
                        <section id="amethist-section"></section>
                        <section id="pearl-section"></section>
                        <section id="garnet-section"></section>
                        <section id="steven-section"></section> 
                    </section>
                </section>
                <section id="backup">
                        <section id="backup-text"></section>
                    <section id="flexbox-backup">    
                        <section id="peridot-section">
                            <span id="peridot-count"></span>
                        </section>
                        <section id="lapis-section">
                            <span id="lapis-count"></span>
                        </section>
                        <section id="lion-section">
                            <span id="lion-count"></span>
                        </section>
                    </section>
                </section>
                <section id="big-guns">
                    <section id="big-guns-text"></section>
                    <section id="big-guns-imgs">
                        <section id="bismuth-section"></section>
                        <section id="off-colors"></section>
                    </section>
                </section>
            </section>  
            <section id="w-l-area">               
                <section id="win-section">
                    <p id="win"></p>
                </section>
                <section id="loss-section">
                    <p id="loss"></p>
                </section>
            </section>
        </section>
    </body>
    </html>

today I need to finish the css and if I have the time make lion wonder. 


make images and text appear when you hit start. 
still to do Make an random image for the opponent you fighting.
make lion wonder some where every time you click on a character including a little off screen must go some where and then stop. . 
