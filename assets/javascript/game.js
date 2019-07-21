
$(function(){
   // decided to do the easier version first. The tarot rpg is saved in another git.
   // initailize
   //  randomly place lion.
   // randomly select opponent
   //  4 main 4 minor 



   let gemsOnscreen = false;
   let bismuth = false;
   let spacePirates = false;
   let gameStart = false;
   let numberToHit = 0;
   let score = 0;
   let wins = 0;
   let losses = 0;
   


   // let pearlNum;
   // let garnetNum;
   // let amethistNum;
   // let stevenNum;
   // let lapisNum;
   // let peridotNum;
   // let lionNum;
   // score wins losses

       
   $("#start").on("click", function(){
      $("#game-discription").hide();
      $("header").hide();
      gemsOnscreen = true
      gameStart = true;
      bismuth = true;
      spacePirates = true;
      
      let lapisCount = 2;
      let peridotCount = 2;
      let lionCount = 2;
     
      // call opponent text and area opponents them selves are call in the initializeGame function
      $("#body-flex").prepend("<section id='steven-icon-area'></section>");
      $("#steven-icon-area").html("<img id='steven-universe-body-img' src = 'assets/imges/stevenuniverseheader.png'  alt='Steven Universe'>")
      $("#op-name-text").prepend("<p>Watch out! Your fighting...")
      $("#opponent-score").prepend("<p>Your opponents score is...</p>");
      $("#score-area").prepend("<p>Your total score is:</p>");
      $("#win-section").prepend("<p>Wins!</p>");
      $("#loss-section").prepend("<p>Losses!</p>");
      // call the gems.
      $("#crystal-gems").prepend("<p id='crystal-gems-header'>The Crystal Gems!</p>");
      $("#amethist-section").append("<img id='amethist' src = 'assets/imges/amethist.png'  alt='amethist'>");
      $("#amethist-section").append("<p>Amethist</p>");
      $("#pearl-section").append("<img id='pearl' src = 'assets/imges/pearl.png' alt='pearl'>");
      $("#pearl-section").append("<p>Pearl</p>");
      $("#garnet-section").append("<img id='garnet' src = 'assets/imges/garnet.png'  alt='garnet'>");
      $("#garnet-section").append("<p>Garnet</p>");
      $("#steven-section").append("<img id='steven' src = 'assets/imges/Steven.png' alt='Steven'>");
      $("#steven-section").append("<p>Steven</p>");
      //call back up
      $("#backup-text").append("<p id='backup-header'>Call for back up!</p>");
      $("#backup-text").append("<p>Delete from you're total score.</p>");
      $("#backup-text").append(" <p>Can be used 2 per round.</p>");
      $("#peridot-section").prepend("<p>Peridot</p>");
      $("#peridot-section").prepend("<img id='peridot' src = 'assets/imges/Peridot.png' alt='Peridot'>");
      $("#lapis-section").prepend("<p>Lapis</p>");
      $("#lapis-section").prepend("<img id='lapis' src = 'assets/imges/lapis.png'  alt='lapis'>");
      $("#lion-section").prepend("<p>Lion</p>");
      $("#lion-section").prepend("<img id='lion' src = 'assets/imges/Lion.png'  alt='lion'>");
      // call big guns
      $("#big-guns-text").append("<p id='big-guns-header'>You big guns!</p>");
      $("#big-guns-text").append("<p>Take out opponent with a single strike!</p>");
      $("#big-guns-text").append("<p>Can only be used once pergame.</p>");
      $("#bismuth-section").append("<img id='bismuth' src = 'assets/imges/Bismuth.png' alt='Bismuth'>");
      $("#bismuth-section").append("<p>Bismuth</p>");
      $("#off-colors").append("<img id='space-pirates' src='assets/imges/Off_Colors.png' alt='Space Pirates!'>");
      $("#off-colors").append("<p>The Off Colors!</p>");

      let characterValueRandom;
      let characterValue=[];

      let currentOpponent;
      let opponentImgs = [];
      let opponentName = [];
      let opponentNum;
      let opponentsToUse = [];
      let opponentCount = 0;

      // creates random oponent that does not repeat.
      for(let i = 0; i < 5; i++){
         
         opponentNum = Math.floor(Math.random()*5)

         if(opponentsToUse.indexOf(opponentNum) > -1){
            i--;
            console.log("if check");
         }
         else{
            opponentsToUse.push(opponentNum);
            console.log (opponentsToUse);
         }

      };
      function moveLion(){
            var h = $(window).height() - 50;
            var w = $(window).width() - 50;
            
            var nh = Math.floor(Math.random() * h);
            var nw = Math.floor(Math.random() * w);
            $( "#lion" ).animate({             
               top: nh,
               left:nw,
            }, 1000, function() {
               // Animation complete.
            });
      
            // Get viewport dimensions (remove the dimension of the div)
            
         };

   let initailizeGame = function(){
         score = 0;
         characterValue. length = 0;
         $("#score").text(score);
         lapisCount = 2;
         peridotCount = 2;
         lionCount = 2
         moveLion();

         $("#peridot-count").text(`uses left:${peridotCount}`);
         $("#lapis-count").text(`uses left:${lapisCount}`);
         $("#lion-count").text(`uses left: ${lionCount}`);

         $("#lapis-count").text(`uses left:${lapisCount}`);
         $("#lapis-count").text(`uses left:${lapisCount}`);
         // ramomize opponent img.
         opponentImgs = [
            "<img id='opponent-img' src='assets/imges/Jasper.png' alt='opponent'></img>", 
            "<img id='opponent-img' src='assets/imges/Emerald.png' alt='opponent'>", 
            "<img id='opponent-img' src='assets/imges/Yellow.png' alt='opponent'>",
            "<img id='opponent-img' src='assets/imges/locknessblog.png' alt='opponent'>",
            "<img id='opponent-img' src='assets/imges/Aquamarine.png' alt='opponent'></img>"
         ]
         opponentName =["Jasper!", "Emerald!", "Yellow Diamond!", "The Loch Ness Bloggster!","Aquamarine!"];
         
         currentOpponent = opponentsToUse[opponentCount];
         
         
         $("#opponent-name").html(opponentName[currentOpponent]);
         $("#opponent-img-section").html(opponentImgs[currentOpponent]);
         
         // create random number 19-120
         numberToHit = Math.floor(Math.random() * 120) + 19;
         console.log(`Number to hit is:${numberToHit}`);
         $("#random-num").text(numberToHit);
         //   if gems-onscreen = false add images and turn gems-onscreen to true


         // asign random number to crystal gems 1-12
         for(let i = 0; i < 7; i++){
            characterValueRandom = Math.floor(Math.random() *12)+ 1;
            characterValue.push(characterValueRandom);
            console.log(` cr ${characterValueRandom}`);
         };
         console.log(`cva${characterValue}`);
         // return, characterValue;
         $("#pearl").attr("gem-value", characterValue[0]); 
         $("#garnet").attr("gem-value", characterValue[1]);  
         $("#amethist").attr("gem-value", characterValue[2]);
         $("#steven").attr("gem-value", characterValue[3]);
         $("#lapis").attr("gem-value", characterValue[4]); 
         $("#peridot").attr("gem-value", characterValue[5]);
         $("#lion").attr("gem-value", characterValue[6]);
      };
      initailizeGame();

      // MY character on click functions
    
         
     


      $("#amethist").on("click", function(){
         if(gameStart){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score += gemValue;
            console.log(score);
            $("#score").text(score);
            moveLion();
            winchecker();
         }
      });
      
      
      $("#pearl").on("click", function(){
         if(gameStart){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score += gemValue;
            console.log(score);
            $("#score").text(score);
            moveLion();
            winchecker();
         }
         
      });
      $("#garnet").on("click", function(){
         if(gameStart){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score += gemValue;
            console.log(score);
            $("#score").text(score);
            moveLion();
            winchecker();
         }
         
      });

      $("#steven").on("click", function(){
         if(gameStart){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score += gemValue;
            console.log(score);
            $("#score").text(score);
            moveLion();
            winchecker();
         }
         
      });

      // back up
      $("#lapis").on("click", function(){
         if(gameStart && lapisCount > 0 && score > 0){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score -= gemValue;
            moveLion();
            if(score < 0){
               score = 0;
            };
            lapisCount--;
            $("#lapis-count").text(`uses left:${lapisCount}`)
            console.log(score);
            $("#score").text(score);
            winchecker();
         };
      });
      $("#peridot").on("click", function(){
         if(gameStart && peridotCount > 0 && score > 0){
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score -= gemValue;
            moveLion();
            if(score < 0){
               score = 0;
            };
            peridotCount--;
            $("#peridot-count").text(`uses left:${peridotCount}`);
            console.log(score);
            $("#score").text(score);
            winchecker();
         }
      });
      $("#lion").on("click", function(){
         if(gameStart && lionCount > 0 && score > 0){
            moveLion()
            let gemValue = ($(this).attr("gem-value")); 
            gemValue = parseInt(gemValue);
            score -= gemValue;
            if(score < 0){
               score = 0;
            };
            lionCount--;
            $("#lion-count").text(`uses left: ${lionCount}`);
            console.log(`your score is${score}`);
            $("#score").text(score);
            winchecker();
         };
      });
      $("#bismuth").on("click", function(){
         if(bismuth){
            score = numberToHit;
            bismuth = false;
            moveLion();
            winchecker();
         }

      });
      $("#space-pirates").on("click", function(){
         if(spacePirates){
            score = numberToHit;
            spacePirates = false;
            moveLion();
            winchecker();
         }

      });

      let winchecker = function(){
         if(wins === 5)
         {
            alert("You won the game!")

         }
         else if (losses === 5 ){
            alert("You lost the game! Refesh to start over")
         }
         else if(score === numberToHit){
            wins++;
            if (opponentCount === 4){
               opponentCount = 0
            }
            else{
               opponentCount++
            }
            $("#win").text(wins);
            initailizeGame();
         }
         else if(score > numberToHit){
            losses++;
            if (opponentCount === 4){
               opponentCount = 0
            }
            else{
               opponentCount++
            }
            
            $("#loss").text(losses);
            initailizeGame();
         };
      };
      
   
      $("#win").text(wins);
      $("#loss").text(losses);

      
      // limit use of backup to 3 each
      // asign big guns to apply the exact amount missing to score.
      // limit big gun to 1 use each.
      //
      // on click select random number 
      // look for win/ loss




      // check for win/ loss
      // if wins = 5 win game
   });   
});
   

