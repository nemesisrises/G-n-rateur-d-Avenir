// Listes de mots pour générer des vers
const mots1 = ["Au matin,", "Au soir,", "Dans la nuit,", "Aujourd'hui,", "Sous les étoiles,", "Bientôt,", "Sous la lune,", "Sous le saule,"];
const mots2 = ["je touche", "j'effleure", "je porte", "je contemple", "je murmure à", "je frôle", "j'embrasse", "j'admire", "j'épouse", "j'écoute"];
const mots3 = ["ton cœur", "ton ombre", "ta voix", "tes mains", "ton âme", "tes lèvres", "tes yeux", "tes muscles", "ton sourire", "ton rire"];
const mots4 = ["pour l'aimer", "pour renaître", "pour briser le silence", "pour rêver encore", "pour toucher l'infini", "pour goûter au bonheur", "pour t’appartenir", "pour t’embrasser encore", "pour raviver la flamme", "pour suspendre le temps", "pour cueillir ton désir", "pour sceller notre rêve", "pour ne jamais te perdre"];

let versCount = 0;
const maxVers = 4;

// Fonction pour générer un vers aléatoire
function genererVers() {
    return `${mots1[Math.floor(Math.random() * mots1.length)]} 
            ${mots2[Math.floor(Math.random() * mots2.length)]} 
            ${mots3[Math.floor(Math.random() * mots3.length)]} 
            ${mots4[Math.floor(Math.random() * mots4.length)]}`;
}

// Fonction pour ajouter un vers
function ajouterVers() {
    if (versCount < maxVers) {
        const newLine = document.createElement("div");
        newLine.classList.add("poem-line");

        // Générer un vers et l'afficher
        const verseText = document.createElement("span");
        verseText.innerHTML = genererVers();

        // Bouton pour regénérer ce vers
        const regenerateButton = document.createElement("button");
        regenerateButton.innerHTML = "↻";
        regenerateButton.classList.add("regen-btn");
        regenerateButton.onclick = function () {
            verseText.innerHTML = genererVers();
        };

        // Ajouter les éléments au poème
        newLine.appendChild(verseText);
        newLine.appendChild(regenerateButton);
        document.getElementById("poemDisplay").appendChild(newLine);

        versCount++;
    }
}

// Fonction pour réinitialiser le poème
function resetPoeme() {
    document.getElementById("poemDisplay").innerHTML = "";
    versCount = 0;
}

// Ajout des événements aux boutons
document.getElementById("generateLine").addEventListener("click", ajouterVers);
document.getElementById("resetPoem").addEventListener("click", resetPoeme);

// Fonction pour fermer le panneau explicatif
document.getElementById("closePanel").addEventListener("click", function() {
    document.getElementById("infoPanel").style.display = "none";
});
