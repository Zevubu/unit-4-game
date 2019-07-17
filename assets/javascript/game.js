
$(function(){
   // decided to do the easier version first. The tarot rpg is saved in another git.
   // initailize
   //  randomly place lion.
   // randomly select opponent
   //  4 main 4 minor 





    

    
   let numberToHit;
   let score = 0;
   let wins = 0;
   let losses = 0;
   let lapisCount = 3;
   let peridotCount = 3;
   let lionCount = 3;
   // score wins losses

   $("#random-num").text(numberToHit);
   $("#score").text(score);
   $("#win").text(wins);
   $("#loss").text(losses);
   $("#peridot-count").text(`uses left:${peridotCount}`);
   $("#lapis-count").text(`uses left:${lapisCount}`);
   $("#lion-count").text(`uses left: ${lionCount}`);

   let characterValueRandom;
   let characterValue=[];
   let pearlNum = 0;
   let garnetNum = 0;
   let amethistNum = 0;
   let stevenNum = 0;
   let lapisNum = 0;
   let peridotNum = 0;
   let lionNum = 0;

   
    

    

    

   initailizeGame = ()=>{
      score = 0;
      numberToHit = Math.floor(Math.random() * 120) + 19;
      console.log(`Number to hit is:${numberToHit}`);
      for(let i = 0; i < 7; i++){
         characterValueRandom = Math.floor(Math.random() *12)+ 1;
         characterValue.push(characterValueRandom);
         console.log(` cr ${characterValueRandom}`)
      };
      console.log(`cva${characterValue}`)
      pearlNum = characterValue[0];
      garnetNum = characterValue[1];
      amethistNum = characterValue[2];
      stevenNum = characterValue[3];
      lapisNum = characterValue[4];
      peridotNum = characterValue[5];
      lionNum = characterValue[6];

      // create random number 19-120
      // asign random number to crystal gems 1-12
      // asign random number to backup gems -1 through - 6
   };
   $("start").on("click", function(){
      initailizeGame;
       

   });
    
    
   $("amethist").on("click", function(){
      score = score + amethistNum;
       

   });
    
   
   $("pearl").on("click", function(){
      score = score + pearlNum;


   });
   $("garnet").on("click", function(){
      score = score + garnetNum;
       

   });
   $("steven").on("click", function(){
      score = score + stevenNum;
       

   });
    
    
    
    // limit use of backup to 3 each
    // asign big guns to apply the exact amount missing to score.
    // limit big gun to 1 use each.
    //
    // on click select random number 
    // look for win/ loss




    // check for win/ loss
    // if wins = 5 win game

})
   

