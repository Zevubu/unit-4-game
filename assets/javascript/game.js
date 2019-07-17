
   $(function(){
    // decided to do the easier version first. The tarot rpg is saved in another git.
    // initailize
    //  randomly place lion.
    // randomly select opponent





    


    let numberToHit;
    let characterValueRandom
    let characterValue=[];

    

    $("#random-num").text(numberToHit)

   //  initailizeGame = function(){
      numberToHit = Math.floor(Math.random() * 120) + 19;
      console.log(`Number to hit is:${numberToHit}`);
      for(let i = 0; i < 4; i++){
         characterValueRandom = Math.floor(Math.random() *12)+ 1;
         characterValue.push(characterValueRandom);
         console.log(` cr ${characterValueRandom}`)
         


      };
      console.log(`cva${characterValue}`)
      


      // create random number 19-120
      // asign random number to crystal gems 1-12
      // asign random number to backup gems -1 through - 6
   //  }

    
    // limit use of backup to 3 each
    // asign big guns to apply the exact amount missing to score.
    // limit big gun to 1 use each.
    //
    // on click select random number 
    // look for win/ loss




    // check for win/ loss
    // if wins = 5 win game

   })
   

