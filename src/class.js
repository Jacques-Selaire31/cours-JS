class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
        // Attribut en IN MODE indispensable pour créer des new UserProfile
        this.nameUser = paramNameUser;
        this.mailUser = paramMailUser;
        this.phoneUser = paramPhoneUser;
        // Attribut en outMode
        this.contact = paramPhoneUser + paramMailUser;
        this.resume = this.getProfileInfo();
        this.count = 0
        // this._nom = nom;  
    }
    getPhone() {
        if (user === "connected")
            return this.phoneUser;
    }
    getProfileInfo() {
        console.log('this ', this);
        return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
console.log(exampleUser1.nameUser);
console.log(exampleUser1.phoneUser);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();
console.log('--e-de-de-d', exampleUser1.nameUser);

// Afficher les infos userProfile dans la page web
function affichagePageWeb(oneUser) {
    const h2element = document.querySelector("h2");
    h2element.innerText = oneUser.getProfileInfo();
}

affichagePageWeb(exampleUser1);

class Imc {
    constructor(nom, taille, poids) {
        this.nom = nom;
        this.taille = taille;
        this.poids = poids;
        this.imc = this.CalculIMC();
    }
    CalculIMC() {
        let imc = this.taille / (this.poids ** 2);
        return imc;
    }
    DisplayIMC() {
        console.log(`${this.nom} dont la taille est ${this.taille} et le poids est ${this.poids} a un IMC de ${this.imc}`);
    }
}
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    new Imc("LOLO de la Vega", 400, 1.55),
    new Imc("Moi", 63, 1.75)
];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((element) => element.DisplayIMC());

class CompteBancaire {
    constructor(nom) {
        this.nom = nom;
        this.solde = 0;
    }
    AffichageCompte() {
        console.log(`Le solde de ${this.nom} est de ${this.solde}`);
    }
    Debit(montant) {
        if (this.solde - montant > 0) {
            this.solde = this.solde -montant;
            return this.solde;
        } else console.log("Vous n'avez pas les possibilités de ce retrait")
        return this.solde;
    }
    Credit(montant) {
        this.solde = this.solde + montant;
        return this.solde;
    }
    Virer(crediteur, debiteur, montant) {
        if (debiteur.solde - montant > 0) {
            crediteur.solde = crediteur.solde + montant;
            debiteur.solde = debiteur.solde - montant;
        } else console.log("Vous n'avez pas les possibilités de ce virement");
    }
}

const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].Credit(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].Debit(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].Virer(lesComptes["Marco"], lesComptes["Clovis"], 300);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].Debit(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    lesComptes[key].AffichageCompte();
}

class Livre{
    constructor(titre, auteur){
        this.titre=titre;
        this.auteur=auteur;
        this.disponible=true;
    }
    emprunter(){
        if(this.disponible===true){
            this.disponible=false;
            return true;
        } else console.log(`Le livre "${this.titre}" n'est pas disponible.`);
        return false;
    }
    retourner(){
        return this.disponible=true;
    }
}

class Bibliothèque{
    constructor(nom){
        this.nom =nom;
        this.livres = [];
    }
    AjouterLivre(livre){
        this.livres.push(livre);
    }
    EmprunterLivre(livre){
        const disponible =livre.emprunter()
        if(!disponible){
            console.log(`Désolé, le livre "${livre.titre}" n'est pas disponible.`);
        } else console.log(`Vous avez emprunté le livre "${livre.titre}".`);
    }
    RetournerLivre(livre){
        livre.retourner();
        console.log(`Le livre "${livre.titre}" a été retourné.`);
    }
    AfficherLivre(){
        console.log(this.livres);
    }
}

const maBibliothèque = new Bibliothèque("Au petit coin");
const Livre1984 = new Livre("1984", "Georges Orwell");
const LivreCandide = new Livre("Candide", "Voltaire");
const LivreEtranger = new Livre("L'étranger", "Albert Camus");

maBibliothèque.AjouterLivre(Livre1984);
maBibliothèque.AjouterLivre(LivreCandide);
maBibliothèque.AjouterLivre(LivreEtranger);
maBibliothèque.AfficherLivre();

maBibliothèque.EmprunterLivre(Livre1984);
maBibliothèque.EmprunterLivre(Livre1984);
maBibliothèque.RetournerLivre(Livre1984);










// class Produit {
//     constructor(nom, prix, quantité) {
//         this.nom = nom;
//         this.prix = prix;
//         this.quantité = quantité;
//     }
//     IsDisponible(){
//         if (this.quantité>0){
//             return true;
//         }
//     }
// }

// class Magasin{
//     constructor(nom){
//         this.nom=nom;
//     }
// }

