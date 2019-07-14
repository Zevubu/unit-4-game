
let tarot =['The Fool','I The Magician','II High Priestess','III The Empress','IIII The Emperor','V The High Priest','VI The Lovers','VII The Chariot','VIII Justice','VIIII The Hermit','X The Wheel of Fortune','XI Strength','XII The Hanged Man','XIII The Nameless Card','XIIII temperance','XV The Devil','XVI The Tower','XVII The Star','XVIII The Moon','XVIIII The Sun','XX Judgement','XXI The World','Ace of Pentacles','II of Pentacles','III of Pentacles','IIII of Pentacles','V of Pentacles','VI of Pentacles','VII Pentacles','VIII of Pentacles','VIIII of Pentacles','X of Pentacles','Page of Pentacles','Queen of Pentacles','King of Pentacles','Knight of Pentacles','Ace of Wands','II of Wands','III of Wands','IIII of Wands','V of Wands','VI of Wands','VII of Wands','VIII of Wands','VIIII of Wands','X of Wands','Page of Wands','Queen of Wands','King of Wands','Knight of Wands','Ace of Swords','II of Swords','III of Swords','IIII of Swords','V of Swords','VI of Swords','VII of Swords','VIII of Swords','VIIII of Swords','X of Swords','Page of Swords','Queen of Swords','King of Swords','Knight of Swords','Ace of Cups','II of Cups','III of Cups','IIII of Cups','V of Cups','VI of Cups','VII of Cups','VIII of Cups','VIIII of Cups','X of Cups','Page of Cups','Queen of Cups','King of Cups','Knight of Cups'];
let hitpoint;
// battle math 
// taking damage: Your(health + defense + or - luckResult) - there(Damage).
// giving damage: Your(Damage + luckResult) - there (health + defense and if a boss + or - luckResult)


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

    gender: [femFool, mascFool, aceFool],

    health: 23,
    damage: 2,
    defense: 2,
    luck: 10,
    luckChance: 7,



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
    gender: [femMage, mascMage, aceMage],

    health: 23,
    damage: 6,
    defense: 3,
    luck: 3,
    luckChance: 7,

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
    gender: [highPriestess, highPriest, theHierophant],

    health: 23,
    damage: 3,
    defense: 7,
    luck: 5,
    luckChance: 7,

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
    gender: [empress, emperor, emperoress],

    health: 23,
    damage: 4,
    defense: 10,
    luck: 4,
    luckChance: 5,

};
let luckResult;




