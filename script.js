// Listes de mots pour générer des vers
const mots1 = ["Au matin,", "Au soir,", "Dans la nuit,", "Aujourd'hui,", "Sous les étoiles,", "Bientôt,", "Sous la lune,", "Sous le saule,"];
const mots2 = ["je touche", "j'effleure", "je porte", "je contemple", "je murmure à", "je frôle", "j'embrasse", "j'admire", "j'épouse", "j'écoute"];
const mots3 = ["ton coeur", "ton ombre", "ta voix", "tes mains", "ton âme", "tes lèvres", "tes yeux", "tes muscles", "ton sourire", "ton rire",];
const mots4 = ["pour l'aimer", "pour renaître", "pour briser le silence", "pour rêver encore", "pour toucher l'infini", "pour goûter au bonheur", "pour t’appartenir", "pour t’embrasser encore", "pour raviver la flamme", "pour suspendre le temps", "pour cueillir ton désir", "pour sceller notre rêve", "pour ne jamais te perdre"];

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
