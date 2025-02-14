// Listes de mots pour générer des vers
const mots1 = ["Au matin", "Au soir", "Hier", "Aujourd'hui", "Demain", "Bientôt", "Dans longtemps", "Il y a longtemps"];
const mots2 = ["l'empereur", "l'impératrice", "l'hermite", "les amoureux", "le pendu", "le bateleur", "le pape", "la papesse", "le diable", "le fou"];
const mots3 = ["embrasse", "épouse", "tue", "immole", "étrangle", "étouffe", "regarde", "observe", "terrifie", "admire", "craint", "délaisse", "rencontre", "oublie", "se remémore"];
const mots4 = ["le chariot", "la roue de la fortune", "la force", "la mort", "la tour", "la tempérance", "le soleil", "l'étoile", "le monde", "la lune", "le jugement", "la justice"];

// Fonction pour générer un vers aléatoire
function genererVers() {
    return `${mots1[Math.floor(Math.random() * mots1.length)]} 
            ${mots2[Math.floor(Math.random() * mots2.length)]} 
            ${mots3[Math.floor(Math.random() * mots3.length)]} 
            ${mots4[Math.floor(Math.random() * mots4.length)]}`;
}

// Fonction pour générer un poème
function genererPoeme() {
    let poeme = "";
    for (let i = 0; i < 4; i++) {  // Génère 4 vers
        poeme += genererVers() + "<br>";
    }
    document.getElementById("poemDisplay").innerHTML = poeme;
}

// Ajout de l'événement au bouton
document.getElementById("generatePoem").addEventListener("click", genererPoeme);
