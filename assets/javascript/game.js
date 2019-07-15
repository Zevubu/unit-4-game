
   $(function(){


   let tarot =['The Fool','I The Magician','II High Priestess','III The Empress','IIII The Emperor','V The High Priest','VI The Lovers','VII The Chariot','VIII Justice','VIIII The Hermit','X The Wheel of Fortune','XI Strength','XII The Hanged Man','XIII The Nameless Card','XIIII temperance','XV The Devil','XVI The Tower','XVII The Star','XVIII The Moon','XVIIII The Sun','XX Judgement','XXI The World','Ace of Pentacles','II of Pentacles','III of Pentacles','IIII of Pentacles','V of Pentacles','VI of Pentacles','VII Pentacles','VIII of Pentacles','VIIII of Pentacles','X of Pentacles','Page of Pentacles','Queen of Pentacles','King of Pentacles','Knight of Pentacles','Ace of Wands','II of Wands','III of Wands','IIII of Wands','V of Wands','VI of Wands','VII of Wands','VIII of Wands','VIIII of Wands','X of Wands','Page of Wands','Queen of Wands','King of Wands','Knight of Wands','Ace of Swords','II of Swords','III of Swords','IIII of Swords','V of Swords','VI of Swords','VII of Swords','VIII of Swords','VIIII of Swords','X of Swords','Page of Swords','Queen of Swords','King of Swords','Knight of Swords','Ace of Cups','II of Cups','III of Cups','IIII of Cups','V of Cups','VI of Cups','VII of Cups','VIII of Cups','VIIII of Cups','X of Cups','Page of Cups','Queen of Cups','King of Cups','Knight of Cups'];
    let hitpoint;



    // charecter from the tarot. Each should have 3 posible states mascaline feminin and agendered.
    // in the larger version of this which probably wont be made in js you'll be able to choose. 

    let Fool = {
        femFool: {
            name:("Fem Fool"),
            img:"filler",
            
        },

        mascFool: {
            name:("Butch Fool"),
            img:"filler",
            
        },
        aceFool: {
            name:("Ace Fool"),
            img:"filler",
        },

        gender: [this.femFool, this.mascFool, this.aceFool],

        xp: 0,
        health: 23,
        damage: 2,
        defense: 2,
        luck: 10,
        luckChance: 1,
        missChance: 7,
        selfHarmChance: 7,


    };

    let Magician = {
        femMage: {
            name:("Thee Witch"),
            img:"filler",
            
        },

        mascMage: {
            name:("Thee Wizzard"),
            img:"filler",
            
        },
        aceMage: {
            name:("Thee Magus"),
            img:"filler",
        },
        gender: [this.femMage, this.mascMage, this.aceMage],
        xp: 0,
        health: 23,
        damage: 6,
        defense: 3,
        luck: 3,
        luckChance: 4,
        missChance: 2,
        selfHarmChance: 1,

    };

    let hierophant = {
        highPriestess: {
            name:("The High Priestess"),
            img:"filler",
            
        },

        highPriest: {
            name:("The High Priest"),
            img:"filler",
            
        },
        theHierophant: {
            name:("The Hierophant"),
            img:"filler",
        },
        gender: [this.highPriestess, this.highPriest, this.theHierophant],
        xp: 0,
        health: 23,
        damage: 3,
        defense: 10,
        luck: 5,
        luckChance: 7,
        missChance: 3,
        selfHarmChance: 2,
    };

    let ruler = {
        empress: {
            name:("The Empress"),
            img:"filler",
        },

        emperor: {
            name:("The Emperor"),
            img:"filler",
        },
        emperoress: {
            name:("The Emperoress"),
            img:"filler",
        },
        gender: [this.empress, this.emperor, this.emperoress],
        xp: 0,
        health: 23,
        damage: 4,
        defense: 10,
        luck: 2,
        luckChance: 5,
        missChance: 4,
        selfHarmChance: 5,

    };
    let luckResult;
    let mis;
    console.log(ruler.emperoress);



    // initiate 

    //defense function

    // luck function

    // luckChance luckResult




    // battle math functions
    // battle math 
    // taking damage: Your( (defense-there damage)if health + defense + or - luckResult) - there(if mis= true. (damage to self = damage / 2.) else if !mis there(Damage - your(defens if (defense === 0) damage - health)).
    // giving damage: there (defense-Your damage) else if defense === 0  health and if a boss + luckResult) - Your(if mis= true. (damage to self = damage / 2.) else if !mis (Damage + yourluckResult -thereluckresult) - 




    // check for win
   })
   

