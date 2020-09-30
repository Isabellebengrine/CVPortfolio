//JS04 - afficher variables
function exojs04(nom, prenom, homme){
    nom = window.prompt("Entrez votre nom:");
    prenom = window.prompt("Entrez votre prénom:");
    homme = window.confirm("Etes-vous un homme?");
    if (nom == "" || nom == null || prenom == "" || prenom == null || homme == "" || homme == null){
        document.getElementById("resultexo1").innerHTML = "<p>Vous ne voulez pas participer? Soit!</p>";
    }else if (homme == true) {
        document.getElementById("resultexo1").innerHTML = "<p>Bonjour Monsieur " + nom + " " + prenom + "</p><p>Bienvenue sur notre site web!</p>";
        } 
        else {
            document.getElementById("resultexo1").innerHTML = "<p>Bonjour Madame " + nom + " " + prenom + "</p><p>Bienvenue sur notre site web!</p>";
        }
}

//appel de la fonction en cliquant sur le bouton
let calcul1 = document.getElementById("exercice1");
calcul1.addEventListener("click", effacer);
calcul1.addEventListener("click", exojs04);

//JS6 - 1. Parité
function parite(){
    let nombre = window.prompt("Entrez un nombre :");
    if (nombre == "" || nombre == null){//user a cliqué sur ok sans entrer nombre ou sur annuler
        document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas participer? ok!";
    }else {
        let reste = nombre%2;
        if(reste==0)
        {
            document.getElementById("reponsejs6").innerHTML = "<p> Le nombre " + nombre + " est un nombre pair! </p>";
        }
        else
        {
            document.getElementById("reponsejs6").innerHTML = "<p> Le nombre " + nombre + " est un nombre impair! </p>";
        }
    }    
}

//appel fonction:
let btnparite = document.getElementById("parite");
btnparite.addEventListener("click", effacer);
btnparite.addEventListener("click", parite);

//JS6 - 2. age
function calculage(){
    let annee = window.prompt("Quelle est votre année de naissance?");
    if (annee == "" || annee == null){//user a cliqué sur ok sans entrer nombre ou sur annuler
        document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas participer? ok!";
    }else {
        let age = 2020 - parseInt(annee);
        //document.getElementById("reponsejs6").innerHTML = "Votre âge est " + age + " ans.";
        if(age<18)
        {
            document.getElementById("reponsejs6").innerHTML = "Votre âge est " + age + " ans. Vous êtes mineur.";
        }
        else
        {
            document.getElementById("reponsejs6").innerHTML = "Votre âge est " + age + " ans. Vous êtes majeur.";
        }
    }
}

let btnage = document.getElementById("age");
btnage.addEventListener("click", effacer);
btnage.addEventListener("click", calculage);

//JS6 - 3. calculette
function calculette(){
    let nombre1 = window.prompt("Entrez un premier nombre entier:");
    let nombre2 = window.prompt("Entrez un deuxième nombre entier:");
    if (nombre1 == "" || nombre1 == null || nombre2 == "" || nombre2 == null){//user a cliqué sur ok sans entrer nombre ou sur annuler pr nb1 ou nb2
        document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas participer? ok!";
    }else {
        let op = window.prompt("Entrez un opérateur:");
        let resultat;
        switch (op)
        {   
            case "+" :
                resultat = parseInt(nombre1) + parseInt(nombre2);
                document.getElementById("reponsejs6").innerHTML = "Résultat:" + nombre1 + op + nombre2 + " = " + resultat;
                break; 
        
            case "-" :
                resultat = parseInt(nombre1) - parseInt(nombre2);  
                document.getElementById("reponsejs6").innerHTML = "Résultat:" + nombre1 + op + nombre2 + " = " + resultat;
                break; 
            
            case "*" :
                resultat = parseInt(nombre1) * parseInt(nombre2);  
                document.getElementById("reponsejs6").innerHTML = "Résultat:" + nombre1 + op + nombre2 + " = " + resultat;
                break; 
        
            case "/" :
                if (parseInt(nombre2) == 0){
                    document.getElementById("reponsejs6").innerHTML = "Erreur : division par 0";
                }
                else 
                {
                    resultat = parseInt(nombre1) / parseInt(nombre2);  
                    document.getElementById("reponsejs6").innerHTML = "Résultat:" + nombre1 + op + nombre2 + " = " + resultat;
                }
                break; 
                
            default: 
            document.getElementById("reponsejs6").innerHTML = "Erreur : Opérateur erroné";
        } 
    }
}
    
let btncalculette = document.getElementById("calculette");
btncalculette.addEventListener("click", effacer);
btncalculette.addEventListener("click", calculette);

//JS6 - Remise

let REM = 0, PORT = 6, tauxrem = 0;
function TotalCommande(){
	let PU = prompt("Saisissez le Prix Unitaire en Euros:");
    let QTECOM = prompt("Saisissez la quantité commandée:");
    if (PU == "" || PU == null || QTECOM == "" || QTECOM == null){
        document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas participer? ok!";
    }else {
        let TOT = parseInt(PU)*parseInt(QTECOM);
        if (TOT<100){
            REM = 0;
            tauxrem = 0;
        }
        if (TOT>=100 && TOT<=200){
            REM = 0.05*TOT;
            tauxrem = 5;
        }
        if (TOT>200){
            REM = 0.1*TOT;
            tauxrem = 10;
        }
        let pavecREM = TOT - REM;
        if (pavecREM>=500){
            PORT = 0;
        } else {
            PORT = 0.02*pavecREM;
            if (PORT<6){
                PORT = 6;
            }
        }
        let PAP = pavecREM + PORT;
        document.getElementById("reponsejs6").innerHTML = "<p>Récapitulatif:</p>" + '<table class="table table-responsive text-center"><thead><tr><th>Prix unitaire</th><th>Quantité commandée</th><th>Remise (taux et montant)</th><th>Frais de port</th><th>Total à payer</th></tr></thead><tbody><tr><td>' + PU + " Euros</td><td>" + QTECOM + "</td><td>(Taux de" + tauxrem + "%, <br>soit une remise de:) " + REM + " Euros</td><td>" + PORT + "</td><td>" + PAP + "</td></tr></tbody></table>";
        
        //return (TOT, REM, PORT, PAP);//important si ces valeurs servent encore ensuite ailleurs, dans ce cas faut declarer une/des var qui stocke(nt) rést du return
    }
}

let btnremise = document.getElementById("remise");
btnremise.addEventListener("click", effacer);
btnremise.addEventListener("click", TotalCommande);

//JS6 - Participation
function calculpart(){
    var celibataire = prompt("Etes-vous célibataire?");
    if (celibataire == null || celibataire == ""){
        document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas répondre? ok!";
    } else {
        var celib = celibataire.toLowerCase();
        if (celib == "oui"){
            var tauxpart = 20;
            var situation = "Célibataire";
        } else {
            var mariage = prompt("Etes-vous marié(e)?");
            if (mariage == null || mariage == ""){
                document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas répondre? ok!";
            } else {
                var marie = mariage.toLowerCase();
                if (marie == "non"){
                    situation = "Autre";
                    document.getElementById("reponsejs6").innerHTML ="<p>Vous n'êtes ni célibataire, ni marié(e): On prendra donc un taux de base de 0%! Voyez le patron si vous n'êtes pas d'accord...<p>";
                    tauxpart = 0;
                } else {
                    tauxpart = 25;
                    situation = "Marié(e)";
                }
            }
        }
        var repparent = prompt("Avez-vous des enfants?");
        if (repparent == "" || repparent == null){
            document.getElementById("reponsejs6").innerHTML = "Vous ne voulez pas répondre? ok!";
        } else {
            var parent = repparent.toLowerCase();
            if (parent == "oui"){
                var nombre = prompt("Combien d'enfants avez-vous?");
                tauxpart = tauxpart + 10 * nombre;
            } else {
                nombre = 0;
            }
            let salaire = prompt("Quel est votre salaire mensuel?");
            if (salaire < 1200){
                tauxpart = tauxpart * 1.1;
            }
            //plafonner à 50%:
            if (tauxpart > 50){
                tauxpart = 50;
            }
            
            document.getElementById("reponsejs6").innerHTML = "<p>Récapitulatif:</p>" + '<table class="table table-responsive text-center"><thead><tr><th>Situation de famille</th><th>Nombre d\'enfants</th><th>Salaire mensuel</th><th>Participation du patron</th></tr></thead><tbody><tr><td>' + situation + "</td><td>" + nombre + "</td><td>" + salaire + "</td><td>" + Math.round(tauxpart) + " %</td></tr></tbody></table>";

        }
    }
}

let btnparticipation = document.getElementById("participation");
btnparticipation.addEventListener("click", effacer);
btnparticipation.addEventListener("click", calculpart);

//pour effacer précédents résultats quand on clique ailleurs pour chaque zone de réponse
function effacer(){
    document.getElementById("resultexo1").innerHTML = "";
    document.getElementById("reponsejs6").innerHTML = "";
    document.getElementById("reponsejs7").innerHTML = "";
    document.getElementById("reponse2js7").innerHTML = "";
    document.getElementById("reponsejs8").innerHTML = "";
    document.getElementById("reponsejs9").innerHTML = "";
    document.getElementById("repobjwindow").innerHTML = "";
}

//JS7 - exo1 - Saisie
function afficherprenoms(){
    let prenoms = [];
    prenoms[0] = "Isabelle";//pour forcer prog à rentrer dans boucle
    let i = 1;
    while (prenoms[i-1]!= null){
        prenoms[i] = window.prompt("Saisissez le prénom N°"+ i + "\nou Clic sur Annuler pour arrêter la saisie.");
        i++;
    }
    prenoms.pop();//pour enlever dernier prénom car null
    prenoms.shift();//pour enlever prenoms[0] qui n'a pas été saisi par user
    document.getElementById("repjs7exo1").innerHTML = "Vous avez saisi " + prenoms.length + " prénoms: " + prenoms;
}

let btnjs7exo1 = document.getElementById("js7exo1");
btnjs7exo1.addEventListener("click", effacer);
btnjs7exo1.addEventListener("click", afficherprenoms);

//JS7 - exo2 - entiers < n

function affichenombres(){
    let n = prompt("Entrez un nombre entier:");
    let nombres = [];
    for (i=0; i<n; i++){
        nombres[i] = i;
    }
    document.getElementById("reponsejs7").innerHTML = "<p>Liste des nombres inférieurs à " + n + " : </p>" + nombres;
}
let btnjs7exo2 = document.getElementById("js7exo2");
btnjs7exo2.addEventListener("click", effacer);
btnjs7exo2.addEventListener("click", affichenombres);

//JS7 - exo3 - somme des entiers < n

function ajoutenombres(){
    let n = prompt("Entrez un nombre entier:");
    let nombres = [];
    let s = 0;
    for (i=0; i<n; i++){
        nombres[i] = i;
        s = s+i;
    }
    document.getElementById("reponsejs7").innerHTML = "<p>Somme des nombres inférieurs à " + n + " : </p>" + nombres.join(" + ") + " = " + s;
}
let btnjs7exo3 = document.getElementById("js7exo3");
btnjs7exo3.addEventListener("click", effacer);
btnjs7exo3.addEventListener("click", ajoutenombres);

//JS7 - exo4 - somme d'intervalle

function sommeintervalle(){
    let n1 = prompt("Entrez un 1er nombre entier:");
    let n2 = prompt("Entrez un 2e nombre entier:");
    let nombres = [];
    let s = 0;
    for (i=n1; i<=n2; i++){
        nombres[i] = i;
        s += parseInt(i);// s = s+ parseInt(i)
    }
    //vider tableau des valeurs vides
    i = 0;
    while (i<n1){
        nombres.shift();
        i++;
    }
    document.getElementById("reponsejs7").innerHTML = "<p>Somme des entiers compris entre " + n1 + " et " + n2 + " : </p>" + nombres.join(" + ") + " = " + s;
}
let btnjs7exo4 = document.getElementById("js7exo4");
btnjs7exo4.addEventListener("click", effacer);
btnjs7exo4.addEventListener("click", sommeintervalle);

//JS7 - exo5 - somme et Moyenne

function moyenne(){
    
    let n;
    let nombres = [];
    let s = 0;
    let moy = 0;
    while (n!=0){
        n = prompt("Entrez un nombre: \n(Ou entrez 0 pour arrêter)");
        if (n != 0){
            nombres.push(n);//si on veut récap valeurs à la fin je les stocke dans un array
            }
            s += parseInt(n);
    }
    moy = s/(nombres.length);
    document.getElementById("reponsejs7").innerHTML = "<p>Vous avez saisi : " + nombres + "</p><p>Somme : " + s + " ; Moyenne : " + moy + "</p>";
}

let btnjs7exo5 = document.getElementById("js7exo5");
btnjs7exo5.addEventListener("click", effacer);
btnjs7exo5.addEventListener("click", moyenne);

//JS7 - exo6 - min et max

function minetmax(){
    
    let n;
    let nombres = [];
    let min = 1000000000000000;
    let max = 0;
    while (n!=0){
        n = prompt("Entrez un nombre: \n(Ou entrez 0 pour arrêter)");
        if(n!=0){//on veut pas prendre en compte 0 car valeur sert à arrêter
            nombres.push(n);//si on veut récap valeurs à la fin je les stocke dans un array
            if (parseInt(n)<min){
            min = n;
            }
            if (parseInt(n)>max){
                max = n;
            }    
        }
    }
    document.getElementById("reponsejs7").innerHTML = "<p>Vous avez saisi : " + nombres + "</p><p>Minimum : " + min + " ; Maximum : " + max + "</p>"
}

let btnjs7exo6 = document.getElementById("js7exo6");
btnjs7exo6.addEventListener("click", effacer);
btnjs7exo6.addEventListener("click", minetmax);

//JS7 - exo7 - multiples

function multiples(){
    
    let n = prompt("Entrez un nombre entier qui est le nombre de multiples que vous voulez:");
    if (n == null){
        document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        let x = prompt("Entrez le nombre dont vous voulez les multiples :");
        if (x == null){
            document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler.";
        } else {
            let mult, i;
            document.getElementById("reponse2js7").innerHTML = "";
            for (i=1; i<=n; i++){
                mult = parseInt(i)*parseInt(x);
                document.getElementById("reponse2js7").innerHTML += i + " * " + x + " = " + mult + "</p>";
            }
            //j'affiche un récap de ce qui est demandé :
            document.getElementById("reponsejs7").innerHTML = "<p>Vous voulez les " + n + " premiers multiples du nombre " + x + "</p><p>Résultat : " + "</p>";
        }
        
    }
}

let btnjs7exo7 = document.getElementById("js7exo7");
btnjs7exo7.addEventListener("click", effacer);
btnjs7exo7.addEventListener("click", multiples);

//JS7 - exo8 - nb voyelles

function nbvoyelles(){
    let mot = prompt("Entrez un mot :");
    if (mot == null){
        document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        let motmin = mot.toLowerCase();
        let mlen = mot.length;
        let n=0;
        document.getElementById("reponse2js7").innerHTML = "";
        for (i=0; i<mlen; i++){
            if (motmin.substr(i,1)=="a" || motmin.substr(i,1) == "à" || motmin.substr(i,1) == "â" || motmin.substr(i,1)=="e" || motmin.substr(i,1) == "é" || motmin.substr(i,1) == "è" || motmin.substr(i,1) == "ê" || motmin.substr(i,1)=="i" || motmin.substr(i,1) == "î" || motmin.substr(i,1)=="o" || motmin.substr(i,1) == "ô" || motmin.substr(i,1) == "ù" || motmin.substr(i,1)=="u" || motmin.substr(i,1)=="y"){
                n = n+1;
                document.getElementById("reponse2js7").innerHTML += "<p>Il y a une voyelle en " + (i+1) + "ème position.</p>";//NB. (mot.indexOf(mot.substr(i,1))= i
            }
        }
        document.getElementById("reponsejs7").innerHTML = "<p>Vous avez saisi le mot : " + mot + ". Ce mot compte " + n + " voyelles.</p>";
    }
}

let btnjs7exo8 = document.getElementById("js7exo8");
btnjs7exo8.addEventListener("click", effacer);
btnjs7exo8.addEventListener("click", nbvoyelles);

//JS7 - exo9 - nb jeunes, moyens, vieux

function comptejeunes(){
    var age = 0, jeune = 0, moyen = 0, vieux = 0;
	while (age<100){
        age = prompt("Entrez un âge, ou cesser la saisie en entrant un âge supérieur ou égal à 100:");
        if (age == null){
            break;
        } else if (parseInt(age)<20){
			jeune = jeune + 1;
		} else if (parseInt(age)>40) {
			vieux = vieux + 1;
  		} else {
  			moyen = moyen + 1;
  		}
    }
    if (age == null){
        document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler";
    } else {
        if (jeune < 2){
        document.getElementById("reponsejs7").innerHTML = "Résultat: Il y a " + jeune + " jeune, ";
            if (moyen < 2){
                document.getElementById("reponsejs7").innerHTML +=  moyen + " personne entre 20 et 40 ans, et " + vieux + " vieux, y compris 1 centenaire!";
            } else {
                document.getElementById("reponsejs7").innerHTML += moyen + " personnes entre 20 et 40 ans, et " + vieux + " vieux, y compris 1 centenaire!";
            }
        } else {
        document.getElementById("reponsejs7").innerHTML = "Résultat: Il y a " + jeune + " jeunes, ";
            if (moyen < 2){
                document.getElementById("reponsejs7").innerHTML += moyen + " personne entre 20 et 40 ans, et " + vieux + " vieux, y compris 1 centenaire!";
            } else {
                document.getElementById("reponsejs7").innerHTML += moyen + " personnes entre 20 et 40 ans, et " + vieux + " vieux, y compris 1 centenaire!";
            }
        }    
    }
}

let btnjs7exo9 = document.getElementById("js7exo9");
btnjs7exo9.addEventListener("click", effacer);
btnjs7exo9.addEventListener("click", comptejeunes);

//JS7 - exo10 - nb premier

function testepremier(){
    let n = prompt("Entrez un nombre pour tester s'il est premier ou pas:");
    for (i=2; i<n; i++){
        var reste = parseInt(n)%i;
        if (reste == 0){
            document.getElementById("reponsejs7").innerHTML = "Le nombre " + n + " est divisible par " + i + " donc ce n'est pas un nombre premier.";
            break;//trouvé diviseur donc on arrête boucle
        }
    }
    if (reste!= 0){
        document.getElementById("reponsejs7").innerHTML = "Le nombre " + n + " est un nombre premier.";
    }
}

let btnjs7exo10 = document.getElementById("js7exo10");
btnjs7exo10.addEventListener("click", effacer);
btnjs7exo10.addEventListener("click", testepremier);

//JS7 - exo11 - nb magique - par prompt et alert

function nbmagique(){
    
    var n = 0;
    var essais = 0;
    var rejouer = true;
    //pour rejouer si OK au confirm()
    while (rejouer == true){
        var magic = parseInt(Math.random()*100);//nb aléatoire entre 0 et 1 fois 100 et rendu entier donc nb entier entre 0 et 100
        while (n!= magic){
            n = prompt("Essayez de trouver le nombre magique (entre 1 et 100):");
            //pour stopper si clic sur annuler:
            if (n == null){
                break;
            }
            //si saisie n'est pas un nb on redemande saisie
            while (isNaN(n)){
                n = prompt("Entrez un nombre:");
            }
            n = parseInt(n);//résultat du prompt est string mais on veut que n soit un nb
            essais ++;//incrémentation du nb d'essais
            if (n == magic){
                alert("Bravo! Vous avez trouvé le nombre magique en " + essais + " coups!");
            }
            if (n<magic){
                alert("Trop petit! Essayez plus grand que " + n + " !");
            } else if (n>magic){
                alert("Trop grand! Essayez plus petit que " + n + " !");
            }
        }
        //confirmer si rejouer ou non? ok donne true, annuler donne false donc
        rejouer = window.confirm("Voulez-vous rejouer?");
        if (rejouer == false){
            document.getElementById("reponsejs7").innerHTML = "Assez joué !!!";
        }
    }   
}

let btnjs7exo11 = document.getElementById("js7exo11");
btnjs7exo11.addEventListener("click", effacer);
btnjs7exo11.addEventListener("click", nbmagique);

//JS7 - exo11 - nb magique bis - en utilisant un formulaire
/* revu avec autre méthode voir après commentaires
function afficheform(){
    //pour afficher le form au clic du bouton "Nombre magique dans formulaire":
    var formnbmgq = document.getElementById("formnbmgq");
    formnbmgq.style.display = "block";
}

function creemagicnb(magic){
    var magic = parseInt(Math.random()*100);//nb aléatoire entre 0 et 1 fois 100 et rendu entier donc nb entier entre 0 et 100
    console.log(magic);//pour tests
    return magic;
}
let btnjs7exo11bis = document.getElementById("js7exo11bis");
btnjs7exo11bis.addEventListener("click", effacer);
btnjs7exo11bis.addEventListener("click", afficheform);

//test - je n'arrive pas à faire tourner la vérif si je mets les données dans une fonction .. why???

var essais = 0;
var magic = creemagicnb();
console.log(magic); //test
var nbsaisi = 0;

function verif(){
    nbsaisi = document.getElementById("inputnbmagique").value;
    if (nbsaisi == null){
        document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler !!!";
        //si saisie n'est pas un nb on redemande saisie
    } else if(isNaN(nbsaisi)){
        document.getElementById("labelnbmagique").innerHTML = "Ce n'est pas un nombre ! Recommencez :";
        document.getElementById("inputnbmagique").focus();
    } else {
        nbsaisi = parseInt(nbsaisi);
        essais ++;
        if (nbsaisi == magic){
            document.getElementById("labelnbmagique").innerHTML = "Bravo! Vous avez trouvé le nombre magique en " + essais + " coups!";
            btnnbmagique.style.display = "none";//enlève bouton vérifier puisque partie finie
        } else {
            if (nbsaisi<magic){
            document.getElementById("labelnbmagique").innerHTML = "Trop petit! Essayez plus grand que " + nbsaisi + " !";
            document.getElementById("inputnbmagique").focus();
            } else if (nbsaisi>magic){
            document.getElementById("labelnbmagique").innerHTML = "Trop grand! Essayez plus petit que " + nbsaisi + " !";
            document.getElementById("inputnbmagique").focus();
            }
        }
    }
}

let btnnbmagique = document.getElementById("btnnbmagique");
btnnbmagique.addEventListener("click", verif);

// PB BOUCLE INFINIE / BOUTON REJOUER NE MARCHE PAS - A FINIR
function joueunepartie(){
    var magic = creemagicnb();
    var nbsaisi= 0;
    while (nbsaisi!= magic){
        verif();
    }
}

//BTN ET FONCTION REJOUER NE FONCTIONNE PAS - A FINIR
let rejouer = document.getElementById("btnrejouer");
rejouer.addEventListener("click", joueunepartie);
******************************************************** FIN COMMENTAIRES */

//rattacher elements à leurs id et aux fonctions correspdtes
    //btn pour accéder au formulaire
    let btnstart = document.getElementById("js7exo11bis");
    btnstart.addEventListener("click", effacer);
    btnstart.addEventListener("click", afficheform);
    //btn pour reset / rejouer nve partie
    let btnrejouer = document.getElementById("btnrejouer");
    btnrejouer.addEventListener("click", rejouenbmagique);
    // btn pour tester chaque valeur saisie
    let btncheck = document.getElementById("btnnbmagique");
    btncheck.addEventListener("click", verif);
    //formulaire de jeu
    let formnbmgq = document.getElementById("formnbmgq");
    //valeur saisie dans input du form
    let input = document.getElementById("inputnbmagique");
    //zone où on veut insérer le récap de toutes valeurs saisies avant
    let toussaisis = document.getElementById("reponse2js7");
    //zone où on veut indiquer si nbsaisi est trop grand ou trop petit ou success (ici dans label du form)
    let verdict = document.getElementById("labelnbmagique");

//créer et stcker le nb magique:
let magic = parseInt(Math.random()*100);

//pour compter le nb de coups:
let essais = 0;

function afficheform(){
    //rendre form visible
    formnbmgq.style.display = "block";
}

function verif(){
    var nbsaisi = input.value;
    essais++;
    let recap = document.getElementById("reponsejs7");
    recap.innerHTML = "Valeurs déjà essayées :";
    if(nbsaisi < magic){
        toussaisis.textContent += nbsaisi + " ";
        verdict.textContent = "Trop petit! Essayez plus grand que " + nbsaisi + " !";
        verdict.classList.add("faux");//cf css
        input.value = ""; //effacer valeur du champ input pour pouvoir entrer une autre
        input.focus();//place curseur dans champ
    } else if(nbsaisi>magic){
        toussaisis.textContent += nbsaisi + " ";
        verdict.textContent = "Trop grand! Essayez plus petit que " + nbsaisi + " !";
        verdict.classList.add("faux");//cf css
        input.value = ""; //effacer valeur du champ input pour pouvoir entrer une autre
        input.focus();
    } else{//cas success
        toussaisis.textContent += nbsaisi + " ";
        verdict.textContent = "Bravo! Vous avez trouvé le nombre magique en " + essais + " coups!";
        verdict.classList.add("exact");//cf css
        input.value = "";
        arretdujeu();
    }
}

//pour empecher saisie de nb et bouton verifier quand on a trouvé la valeur
function arretdujeu(){
    btncheck.disabled = true;
    input.disabled = true;
}

//REJOUER = RESET - nb. faut reclic sur btn pour accéder au form - pourquoi n'affiche pas form meme si je lui dis afficheform après reload ?
function rejouenbmagique(){
    window.location.reload();
    afficheform();
}
btnrejouer.addEventListener("click", rejouenbmagique);

//JS8 - 1. produit et image

function produit(x,y)
{
    var x = prompt("Entrez un 1er nombre:");
    var y = prompt("Entrez un 2e nombre:");
    if (x == null || y == null){
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        x = parseInt(x);
        y = parseInt(y);
        var produit = x*y;
        var cubex = Math.pow(x, 3);
        var cubey = Math.pow(y, 3);
        document.getElementById("reponsejs8").innerHTML = "<ul><li>Le produit de " + x + " x " + y + " est égal à " + produit + ";</li><li>Le cube de " + x + " est égal à " + cubex + ";</li><li>Le cube de " + y + " est égal à " + cubey + ";</li></ul>";
    }
}

function afficheImg(image)
{
    image = new Image();//crée d'abord l'objet Image si je veux image en param - sinon pas besoin, mais faut enlever param dans décl° fonction
    //document.getElementById("image").src="papillon.jpg"; si élément séparé avec autre id, sinon faire += pour pas écraser résuultats des calculs:
    document.getElementById("reponsejs8").innerHTML += '<img src="papillon.jpg" alt="Papillon" title="papillon">';
}   
let btnjs8exo1 = document.getElementById("js8exo1");
btnjs8exo1.addEventListener("click", effacer);
btnjs8exo1.addEventListener("click", produit);
btnjs8exo1.addEventListener("click", afficheImg);

//JS8 - 2. TABLE DE MULTIPLICATION

function TableMultiplication(n){
	do{
    	n = prompt("Entrez le nombre dont vous voulez la table de multiplication:");
    }while(isNaN(n) || n%1!=0);//verif que n est un nombre et un nombre entier, sinon redemande n
    if (n==null){
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        document.getElementById("reponsejs8").innerHTML ="<p><b>Table de multiplication du nombre " + n + " :</b></p>";
	    for (i=1;i<=10;i++){
		document.getElementById("reponsejs8").innerHTML += "<p>" + i + " x " + parseInt(n) + " = " + (i*parseInt(n)) + "</p>";
	    }
    }
}

let btnjs8exo2 = document.getElementById("js8exo2");
btnjs8exo2.addEventListener("click", effacer);
btnjs8exo2.addEventListener("click", TableMultiplication);

//JS8 - 3. COMPTER NB LETTRES

function comptelettre(phrase, lettre){
    var phrase = prompt("Entrez une phrase :");
    var lettre = prompt("Choisissez la lettre que vous voulez compter :");
    if (phrase == null || lettre == null) {
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        var count = 0;
        var phrasemin = phrase.toLowerCase();
        var lettremin = lettre.toLowerCase();
        var pos = phrasemin.indexOf(lettremin);
        //repositionne la recherche après chaque occurence :
        while (pos != -1){
            count ++;
            pos = phrasemin.indexOf(lettremin, pos+1);
        }
        if (count == 0){
        //instructions si lettre pas trouvée:
            document.getElementById("reponsejs8").innerHTML = "La lettre " + lettre + " n'est pas dans la phrase " + phrase ;
        } else {
            document.getElementById("reponsejs8").innerHTML = "La lettre " + lettre + " est " + count + " fois dans la phrase " + phrase ;
        }
    }
}

let btnjs8exo3 = document.getElementById("js8exo3");
btnjs8exo3.addEventListener("click", effacer);
btnjs8exo3.addEventListener("click", comptelettre);

//JS8 - 4. MENU

//fonction pour option 4 du menu :
function rechcaractere(){
    let mot = prompt("Entrez un mot :");
    if (mot == null){
        document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        let carac = prompt("Entrez le caractère que vous souhaitez compter :");
        if (carac == null){
            document.getElementById("reponsejs7").innerHTML = "Vous avez cliqué sur Annuler.";
        } else {
            let caracmin = carac.toLowerCase();
            let motmin = mot.toLowerCase();
            let mlen = mot.length;
            let n=0;
            document.getElementById("reponse2js7").innerHTML = "";
            for (i=0; i<mlen; i++){
                if (motmin.substr(i,1)== caracmin){
                    n = n+1;
                    document.getElementById("reponse2js7").innerHTML += " Il y a un " + carac + " en " + (i+1) + "e position. ";
                }
            }
            document.getElementById("reponsejs7").innerHTML = "Vous avez saisi le mot : " + mot + ". Ce mot compte " + n + " caractères " + carac + ".";
        }
    }
}

function menu(){
    var menu = prompt("Choisissez:\n1. Multiples\n2. Somme et moyenne\n3. Recherche du nb de voyelles\n4. Recherche du nb de caractères suivants\nEntrez votre option :");
    if (menu == null){
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        switch(menu) {
            case "1":
                multiples();
                break;
            case "2":
                moyenne();
                break;
            case "3":
                nbvoyelles();
                break;
            case "4":
                rechcaractere();
                break;
            default:
                document.getElementById("reponsejs8").innerHTML = "Entrée invalide.";
        }
    }
}

let btnjs8exo4 = document.getElementById("js8exo4");
btnjs8exo4.addEventListener("click", effacer);
btnjs8exo4.addEventListener("click", menu);

//JS8 - 5. STRINGTOKEN

function strtok(liste, sep, n){
    var liste = prompt("Entrez une liste de mots");
    if (liste == null){
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        var sep = prompt("Entrez le séparateur:");
        if (sep == null){
            document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
        }else {
            var n = prompt("Entrez le numéro du mot à extraire:");
            if (n == null){
                document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
            } else {
                var res = liste.split(sep);
                document.getElementById("reponsejs8").innerHTML = "Le " + n + "e mot de votre liste est " + res[n-1];
            }
        }        
    }
}

let btnjs8exo5 = document.getElementById("js8exo5");
btnjs8exo5.addEventListener("click", effacer);
btnjs8exo5.addEventListener("click", strtok);

// JS9 - 1. créer tableau

function creertab(){
    var n = prompt("Entrez la taille du tableau:");//n est = monTableau.length
    if (n == null) {
        document.getElementById("reponsejs9").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        var monTableau = [];
        for (i=0; i<n; i++){
            monTableau[i] = prompt("Entrez la " + (i+1) + "e valeur du tableau:");
        }
        document.getElementById("reponsejs9").innerHTML =  "Contenu du tableau: " + monTableau;
    }
}

let btnjs9exo1 = document.getElementById("js9exo1");
btnjs9exo1.addEventListener("click", effacer);
btnjs9exo1.addEventListener("click", creertab);

// JS9 - 2. Menu avec fonctionnalités

let n, i, monTab = [], posi, a, max = 0, somme = 0, moy = 0, bouger = false, parking;
//pour lire entier saisi au clavier
function GetInteger(){
    n = prompt("Entrez un nombre entier:");
}
// pour initialiser tableau
function InitTab(){
    monTab.length = n;
}
//pour saisir les différents postes du tab
function SaisieTab(){
    for (i=0; i<n; i++){
        posi = parseInt(i)+1;
        monTab[i] = prompt("Entrez la " + posi + "ème valeur du tableau:");
    }
}
//pour afficher tous postes
function AfficheTab(){
    document.getElementById("reponsejs9").innerHTML = "Contenu du tableau:" + monTab;
}
//pour rechercher un poste
function RechercheTab(){
    a = prompt("Quel est le numéro du poste du tableau que vous recherchez?:");
    document.getElementById("reponsejs9").innerHTML = "Contenu du " + a + "e poste du tableau: " + monTab[parseInt(a-1)];
}
//pour afficher max et moy des postes:
function InfoTab(){
    for (i in monTab){
        somme = somme + parseInt(monTab[i]);
        if (monTab[i]>max){
            max = monTab[i];
        }
    }
    moy = parseInt(somme)/n;
    document.getElementById("reponsejs9").innerHTML = "Le maximum des postes est : " + max + ". La moyenne est : " + moy + ".";
}

function menutableau(){
    var menu = prompt("Choisissez:\n1. Affichage des postes du tableau\n2. Recherche d'un poste spécifique\n3. Calcul du max et de la moyenne des postes\nEntrez votre option :");
    if (menu == null){
        document.getElementById("reponsejs8").innerHTML = "Vous avez cliqué sur Annuler.";
    } else {
        switch(menu) {
            case "1":
                GetInteger();
                InitTab();
                SaisieTab();
                AfficheTab();
                break;
            case "2":
                GetInteger();
                InitTab();
                SaisieTab();
                RechercheTab();
                break;
            case "3":
                GetInteger();
                InitTab();
                SaisieTab();
                InfoTab();
                break;
            default:
                document.getElementById("reponsejs9").innerHTML = "Entrée invalide.";
        }
    }
}

let btnjs9exo2 = document.getElementById("js9exo2");
btnjs9exo2.addEventListener("click", effacer);
btnjs9exo2.addEventListener("click", menutableau);

//JS9 - 3. Recherche de prénoms
//wip

function chercheprenom(){
    let tab = [];
    tab = ["Audrey", "Aurélien", "Cédric", "Dylan", "Fabien", "Flavien", "François", "Germain", "Guillaume", "Isabelle", "Jérémy", "Laurent", "Manu", "Marion", "Melik", "Mo", "Nouara", "Salem", "Samuel", "Stéphane"];
    let prenom = prompt("Saisissez un prénom");
    //mettre tout en min pour éviter pb de majuscule:
    let prenommin = prenom.toLowerCase();
    let tabmin = tab.map(function (val) { return val.toLowerCase(); });
    //chercher le prenom dans la liste
    let idx = tabmin.indexOf(prenommin);
    //si prenom pas dans la liste (alors idx vaut -1) donc instructions:
    if (idx == -1){
        document.getElementById("reponsejs9").innerHTML = "Erreur: ce prénom n'est pas dans le tableau!";
    } else { // instructions si prenom dans liste donc idx = indice du prenom dans tabmin (string)
        tab.splice(idx, 1);// array method qui enlève le prenom d'indice idx et n'ajoute rien 
        tab.push(" ");//rajoute valeur vide en dernier
        document.getElementById("reponsejs9").innerHTML = "Le prénom " + prenom + " a été enlevé du tableau et les prénoms décalés (valeur vide en dernier). Le tableau contient maintenant: " + tab + " . Le tableau contient toujours " + tab.length + " valeurs.";
    }
} 

let btnjs9exo3 = document.getElementById("js9exo3");
btnjs9exo3.addEventListener("click", effacer);
btnjs9exo3.addEventListener("click", chercheprenom);

// JS9 - 4. Tri à bulles

function triabulles(){
    do{
        bouger = false;

        for (i=0; i+1<n; i++){
            if (parseInt(monTab[i])>parseInt(monTab[i+1])){
                parking = monTab[i+1];
                monTab[i+1] = monTab[i];
                monTab[i] = parking;
                bouger = true;
            }//fin du if
        }// fin du for
    } while (bouger);
    document.getElementById("reponsejs9").innerHTML = "Contenu du tableau trié:" + monTab;
    return monTab;
}

let btnjs9exo4 = document.getElementById("js9exo4");
btnjs9exo4.addEventListener("click", effacer);
btnjs9exo4.addEventListener("click", GetInteger);
btnjs9exo4.addEventListener("click", InitTab);
btnjs9exo4.addEventListener("click", SaisieTab);
btnjs9exo4.addEventListener("click", triabulles);

// JS9 - 5. Tri par insertion

function triparinsertion(){
    var array = [666, 1, 7, 69, 33, 13];
    var j = 1;
    var n = array.length;
    while (j!=n){
        var i = j-1;
        var tmp = array[j];
        while (i>-1 && array[i]>tmp){
            array[i+1] = array[i];
            i--;
        }
        array[i+1] = tmp;
        j++;
    }
    document.getElementById("reponsejs9").innerHTML = "Contenu du tableau trié: " + array;
    return array;
}

let btnjs9exo5 = document.getElementById("js9exo5");
btnjs9exo5.addEventListener("click", effacer);
btnjs9exo5.addEventListener("click", triparinsertion);

// JS9 - 6. Calcul des heures

function ajouteheures(){
    var heure1 = prompt("Entrez une première heure (format HH:MM:SS) :");
    var heure2 = prompt("Entrez une deuxième heure (format HH:MM:SS) :");
    if (heure1 == null || heure2 == null){
        document.getElementById("reponsejs9").innerHTML = "Vous avez cliqué sur Annuler.";
    }else {
    //mettre données dans tableaux
    var tabh1 = heure1.split(":");
    var tabh2 = heure2.split(":");
    var result = [];
    //additionner valeurs
    for (var i = 0; i<3; i++){
        //mettre en parseInt pour ajouter au lieu de concaténer
        tabh1[i] = parseInt(tabh1[i]);
        tabh2[i] = parseInt(tabh2[i]);
        result[i] = tabh1[i] + tabh2[i];
    }
    //gérer retenues: 
    //si valeur mm ou ss > 60, on modifie comme suit:
    for (i=1; i<3; i++){
        if (result[i]>=60){
            result[i-1] += 1;
            result[i] -= 60;
        }
    }
    //gérer affichage des valeurs inférieures à 10 pour avoir 03 au lieu de 3 par exemple:
    for (i in result){
        if (result[i]<10){
        result[i] = "0" + result[i];
        }
    }
    //afficher résultats
    document.getElementById("reponsejs9").innerHTML = "Somme de " + heure1 + " et de " + heure2 + " = " + result.join(":");
    }
}

let btnjs9exo6 = document.getElementById("js9exo6");
btnjs9exo6.addEventListener("click", effacer);
btnjs9exo6.addEventListener("click", ajouteheures);

// JS9 - 7. Crible d'Erathostène

function crible(){
    let max = parseInt(prompt("Entrez une valeur :"), 10);
    let premiers = [];
    premiers.length = max;
    //remplir tableau avec nombres = indices
    for (var i=1; i<max; i++){
        premiers[i] = i;
    }
    for (i=2; i<max; i++){
        //pour éviter itérations inutiles:
        if (premiers[i] == null){
            continue;
        }
        for (var multiple=i+1; multiple<max; multiple++){
            //effacer valeurs pour les multiples
            if (premiers[multiple]%i == 0){
                premiers[multiple] = null;
            }
        }
    }
   //pour enlever valeurs null du tableau: attention - remettre condition i<max dans while sinon boucle infinie
   //pb while: compteur enlève bien premiers[0], et certains premiers[i] null mais en laisse car pb i ne revien pas à dernièere val non null
   //avec if faut enlever premiers[0] sinon bug sur premiers[-1]
    premiers.splice(0,1);
    for (i=1; i<max; i++){
        //d'abord compter le nombre de valeurs null successives
        //var compteur = 0;
        //while ((premiers[i] == null) && i<max){
           //compteur ++;
           //i++;
        if (typeof premiers[i]== typeof null){
            premiers.splice(i,1);
            i--;
        }
    }
    //puis enlever les valeurs null successives:
        //premiers.splice(i-compteur, compteur);
    //}
    document.getElementById("reponsejs9").innerHTML = "Nombres premiers inférieurs à " + max + " : " + premiers;
    console.log(premiers);//test
}

let btnjs9exo7 = document.getElementById("js9exo7");
btnjs9exo7.addEventListener("click", effacer);
btnjs9exo7.addEventListener("click", crible);

// objet window
//creer et fermer new window (mis mon cv pour exemple)
//var maFenetre = [window.]open(url [, nom [, caracteristiques[, replace]]]); bcp de caracteristiques facultatives

function creewindow(){
    maFenetre = window.open("https://dev.amorce.org/bengrinei/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    document.getElementById("repobjwindow").innerHTML = "Yep! Vous avez ouvert mon CV!";
}

function closewindow(){
    maFenetre.close();
    document.getElementById("repobjwindow").innerHTML = "Yep! Vous avez fermé mon CV!";
    checkWin();
}

function checkWin() {
    if (!maFenetre) {
      document.getElementById("repobjwindow").innerHTML += " Mais vous n'avez jamais ouvert la fenêtre!";
    } else {
      if (maFenetre.closed) {
        document.getElementById("repobjwindow").innerHTML += " La fenêtre a bien été fermée!";
      } else {
        document.getElementById("repobjwindow").innerHTML += " Attention, la fenêtre n'a pas été fermée!";
      }
    }
  }

//pour obliger à fermer après certain temps : mise en route du temporisateur
function declencheminuterie(){
    idCompteur = setTimeout("closewindow()", 7000); //décl fonction appelée après 7000 millisecondes
    checkWin();
}

function stopminuterie(){
    declencheminuterie();
    clearTimeout(idCompteur);
}
let newwindow = document.getElementById("newwindow");
newwindow.addEventListener("click", effacer);
newwindow.addEventListener("click", creewindow);

let fermewindow = document.getElementById("fermewindow");
fermewindow.addEventListener("click", effacer);
fermewindow.addEventListener("click", closewindow);

let minuterie = document.getElementById("minuterie");
minuterie.addEventListener("click", effacer);
minuterie.addEventListener("click", declencheminuterie);

let stopmin = document.getElementById("stopmin");
stopmin.addEventListener("click", effacer);
stopmin.addEventListener("click", stopminuterie);

//DOM NAVIGATOR cf https://ncode.amorce.org/ressources/Pool/D2WM/WEB_Javascript/JS_12_DOM.pdf
function afficheinfos(){
    var version = navigator.appVersion;
    document.getElementById("afficheinfonav").innerHTML = "<p>Le code name de votre browser est :" + navigator.appCodeName + "</p><p>Le nom ou la marque du browser est :" + navigator.appName + "</p><p>Les informations sur la version sont :" + version + "</p><p>Le browser a comme user-agent :" + navigator.userAgent + "</p>";
    if (version.indexOf('Win') > -1) {
        document.getElementById("afficheinfonav").innerHTML += "Vous etes sous l'environnement Windows";
    }
    if (navigator.userAgent.indexOf('Firefox') > -1) {
        document.getElementById("afficheinfonav").innerHTML += "; Vous utilisez un navigateur FireFox";
    } else if (version.indexOf('Chrome') > -1) {
        document.getElementById("afficheinfonav").innerHTML += "; Vous utilisez un navigateur Chrome";
    } else if (version.indexOf('MSIE') > -1) {
        document.getElementById("afficheinfonav").innerHTML += "; Vous utilisez un navigateur Microsoft Internet Explorer";
    } else {
        document.getElementById("afficheinfonav").innerHTML += "; Vous utilisez un navigateur inconnu";
    }
}

let infosnav = document.getElementById("infosnav");
infosnav.addEventListener("click", effacer);
infosnav.addEventListener("click", afficheinfos);
