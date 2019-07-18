
$(function(){
   // decided to do the easier version first. The tarot rpg is saved in another git.
   // initailize
   //  randomly place lion.
   // randomly select opponent
   //  4 main 4 minor 




   let bismuth = false;
   let spacePirates = false;
   let gameStart = false;
   let numberToHit = 0;
   let score = 0;
   let wins = 0;
   let losses = 0;
   let lapisCount = 2;
   let peridotCount = 2;
   let lionCount = 2;

   // let pearlNum;
   // let garnetNum;
   // let amethistNum;
   // let stevenNum;
   // let lapisNum;
   // let peridotNum;
   // let lionNum;
   // score wins losses

   
  

   let characterValueRandom;
   let characterValue=[];
  

  

    

  let initailizeGame = function(){
      score = 0;
      characterValue. length = 0;
      $("#score").text(score);
      lapisCount = 2;
      peridotCount = 2;
      lionCount = 2

      $("#peridot-count").text(`uses left:${peridotCount}`);
      $("#lapis-count").text(`uses left:${lapisCount}`);
      $("#lion-count").text(`uses left: ${lionCount}`);
      numberToHit = Math.floor(Math.random() * 120) + 19;
      console.log(`Number to hit is:${numberToHit}`);
      $("#random-num").text(numberToHit);
     

      for(let i = 0; i < 7; i++){
         characterValueRandom = Math.floor(Math.random() *12)+ 1;
         characterValue.push(characterValueRandom);
         console.log(` cr ${characterValueRandom}`)
      };;
      console.log(`cva${characterValue}`);
      // return numberToHit, characterValue;
      $("#pearl").attr("gem-value", characterValue[0]); 
      $("#garnet").attr("gem-value", characterValue[1]);  
      $("#amethist").attr("gem-value", characterValue[2]);
      $("#steven").attr("gem-value", characterValue[3]);
      $("#lapis").attr("gem-value", characterValue[4]); 
      $("#peridot").attr("gem-value", characterValue[5]);
      $("#lion").attr("gem-value", characterValue[6]);
      
      // create random number 19-120
      // asign random number to crystal gems 1-12
      // asign random number to backup gems -1 through - 6
   };



   // pearlNum = characterValue[0];
   // console.log(`pearl ${pearlNum}`);
   // garnetNum = characterValue[1];
   // console.log(`garnet is ${garnetNum}`);
   // amethistNum = characterValue[2];
   // console.log(`amethist is ${amethistNum}`);
   // stevenNum = characterValue[3];
   // console.log(` steven is ${stevenNum}`);
   // lapisNum = characterValue[4];
   // console.log(`lapis is ${lapisNum}`);
   // peridotNum = characterValue[5];
   // console.log(`peridot is ${peridotNum}`);
   // lionNum = characterValue[6];
   // console.log(`Lion is ${lionNum}`);

  
   
    

   
   $("#start").on("click", function(){
      initailizeGame();
      gameStart = true;
      bismuth = true;
      spacePirates = true;

   });
    
    
   $("#amethist").on("click", function(){
      if(gameStart){
         let gemValue = ($(this).attr("gem-value")); 
         gemValue = parseInt(gemValue);
         score += gemValue;
         console.log(score);
         $("#score").text(score);
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
         winchecker();
      }
      
   });

   // back up
   $("#lapis").on("click", function(){
      if(gameStart && lapisCount > 0 && score > 0){
         let gemValue = ($(this).attr("gem-value")); 
         gemValue = parseInt(gemValue);
         score -= gemValue;
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
         peridotCount--;
         $("#peridot-count").text(`uses left:${peridotCount}`);
         console.log(score);
         $("#score").text(score);
         winchecker();
      }
    });
    $("#lion").on("click", function(){
      if(gameStart && lionCount > 0 && score > 0){
         let gemValue = ($(this).attr("gem-value")); 
         gemValue = parseInt(gemValue);
         score -= gemValue;
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
         winchecker();
       }

    });
    $("#space-pirates").on("click", function(){
      if(spacePirates){
         score = numberToHit;
         spacePirates = false;
         winchecker();
       }

   });

    let winchecker = function(){
      if(wins >= 10)
      {
         alert("You won the game!")

      }
      else if (losses >= 10 ){
         alert("You lost the game!")
      }
      else if(score === numberToHit){
         wins++;
         $("#win").text(wins);
         initailizeGame();
      }
      else if(score > numberToHit){
         losses++;
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
   

