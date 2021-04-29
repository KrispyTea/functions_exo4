function bonjour (a) {
    return "bonjour"
}
console.log(bonjour())

function addition (h, he) {
    return h + he
}
console.log(addition(5,5))

function abbe (prenom) {
    return "bonjour " + prenom
}
console.log(abbe("prenom"));

function abc (j, jk, jl) {
    return typeof j + " " + typeof jk + " " + typeof jl
}
console.log(abc("ecrit",8,true))


function jeu () {
    let nombre = Math.ceil(Math.random()*20)
    let x;
    let y;
    let essai = 0;
    while (essai != 5) {
        x = +prompt("Choisir un nombre au hasard entre 1 et 20")
        y = Math.abs(nombre-x)
        if (y == 0) {
            alert ("partie terminée");
            essai = 5;
        } else if (y == 1) {
            alert("BRULANT");
            essai++;
        } else if (y == 2) {
            alert ("CHAUD");
            essai++;
        } else if (y<=5) {
            alert("TIEDE")
            essai++;
        } else if (y>5) {
            alert("FROID")
            essai++
        }
    }
    if (x == nombre) {
        alert("Bien joué !")
    } else {
        alert("Perdu")
    }
}
jeu()

//exo logique 2
let tab = ["aBc","dEf",10,20,true,false];

function tableau() {
    tab.forEach((element, index) => {
        //const element = tab[index]
        if (typeof element === "string") {
            tab[index] = element.charAt(0).toUpperCase()+element.substr(1).toLowerCase();
        } else if (typeof element === "number") {
            tab[index] = Math.pow(element, 2);
        } else if (typeof element === "boolean") {
            //condtion ternaire
            element == true ? tab[index] = false : tab[index] = true;
            //ci dessus condition ternaire contraction du if et du else;
            // if (element == true) {
            //     tab[index] = false;
            // } else {
            //     tab[index] = true;
            // }

            //logical NOT(!)
            //tab[index] = !element;
        }
    });
}

tableau();
console.log(tab);


/ //exo logique 3
let prenom;
let salaire;
let ajout;
let moinMoyenne = [];
let moyenne = [];
let plusMoyenne = [];
function argent(prenom, salaire) {
    ajout = confirm("Souhaite tu ajouté ?");
    while (ajout != false) {
        prenom = prompt('qui est le salarié');
        salaire = prompt("Combien est ce qu'il gagne ?");
        if (salaire < 1600) {
            moinMoyenne.push(prenom);
        } else if (salaire >= 1600 && salaire < 1800) {
            moyenne.push(prenom);
        } else if (salaire > 1800) {
            plusMoyenne.push(prenom);
        }
        ajout = confirm('Souhaite tu ajouter un salarié ?');
    }
    return moinMoyenne,moyenne,plusMoyenne;
}

argent();
console.log(moinMoyenne, moyenne, plusMoyenne);

//exo4 logique
let prenom;
let age;
let concert = [];
let ajout;
function liste(prenom, age) {
    ajout = confirm("ajouter un participant");
    while (ajout != false && concert.length != 7) {
        prenom = prompt("comment t'appel tu ?");
        age = prompt('quel age as tu ?');
        if (age >= 18) {
            concert.push(prenom.charAt(0).toUpperCase()+prenom.substring(1).toLowerCase());
        } else {
            alert("tu ne rentre pas")
        }
        ajout = confirm("ajouter un participant");
        if (concert.length == 7) {
            alert("Le concert est complet et limité à 7 participants et ce à fin de respecter les mesures de distanciations et ce même si on est à Forest National");
        }
    }
    console.log(concert);
}

liste()
