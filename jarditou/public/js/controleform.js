//appel fonctions au fur et à mesure de la saisie au lieu d'attendre la fin
document.getElementById("lname").addEventListener("input", checknom);
document.getElementById("fname").addEventListener("input", checkprenom);
document.getElementById("datenaissance").addEventListener("input", checkdatenaissance);
document.getElementById("cpostal").addEventListener("input", checkcp);
document.getElementById("email").addEventListener("input", checkemail);
document.getElementById("votrequestion").addEventListener("input", checkquestion);

//pour controler chaque champ
function checknom(){
  var nom = document.forms["formulaire_contact"]["lname"].value;
  if (nom.trim() == "") {
    document.getElementById("lnameHelp").innerHTML = "Attention, vous avez oublié de saisir votre nom!";
    document.getElementById("lname").focus();
    return false;
  }else {
    var filtrenom = new RegExp("^[A-Za-zéêè' -]+$");
    var resultatnom = filtrenom.test(nom);
    if (resultatnom == false){
      document.getElementById("lnameHelp").innerHTML = "Saisie invalide! Vérifiez votre saisie!";
      return false;
    }else {
      document.getElementById("lnameHelp").innerHTML = '<span class="text-success">Nom OK!</span>';
      return true;
    }
  }
}

function checkprenom(){
  var prenom = document.forms["formulaire_contact"]["fname"].value;
  if (prenom.trim() == "") {
  document.getElementById("fnameHelp").innerHTML = "Attention, vous avez oublié d'entrer votre prénom!";
  document.getElementById("fname").focus();
  return false;
  }else {
    var filtreprenom = new RegExp("^[A-Za-zéêè' -]+$");
    var resultatprenom = filtreprenom.test(prenom);
    if (resultatprenom == false){
      document.getElementById("fnameHelp").innerHTML = "Saisie invalide! Vérifiez votre saisie!";
      return false;
    }else {
      document.getElementById("fnameHelp").innerHTML = '<span class="text-success">Prénom OK!</span>';
      return true;
    }
  }
}

function checkdatenaissance(){
  var datenaiss = document.forms["formulaire_contact"]["datenaissance"].value;
  if (datenaiss.trim() == "") {
    document.getElementById("bdateHelp").innerHTML = "Attention, vous avez oublié d'entrer votre date de naissance!";
    document.getElementById("datenaissance").focus();
    return false;
  }else {
    var filtredn = new RegExp("^[0-3][0-9][/][0-1][0-9][/][0-9]{4}$");//format date ex 25/04/1973
    var resultatdn = filtredn.test(datenaiss);
    if (resultatdn == false){
      document.getElementById("bdateHelp").innerHTML = "Vérifiez votre date de naissance(format 'jj/mm/aaaa')!";
      return false;
    }else {
      document.getElementById("bdateHelp").innerHTML = '<span class="text-success">Date de naissance OK!</span>';
      return true;
    }
  }
}

function checkcp(){
    var cp = document.forms["formulaire_contact"]["cpostal"].value;
  if (cp.trim() == "") {
    document.getElementById("cpHelp").innerHTML = "Attention, vous avez oublié d'entrer votre code postal!";
    document.getElementById("cpostal").focus();
    return false;
  }else {
    var cpfiltre = new RegExp("^[0-9]{5}$");
    var resultat = cpfiltre.test(cp);
    if (resultat == false) {
      document.getElementById("cpHelp").innerHTML = "Le Code Postal doit comporter 5 caractères numériques!";
      return false;
    }else {
        document.getElementById("cpHelp").innerHTML = '<span class="text-success">Code postal OK!</span>';
        return true;
    }
  }
}

function checkemail(){
  var mail = document.forms["formulaire_contact"]["email"].value;
  if (mail.trim() == "") {
    document.getElementById("emlHelp").innerHTML = "Attention, vous avez oublié de préciser votre adresse e-mail!";
    document.getElementById("email").focus();
    return false;
  }else {
    var emailfiltre = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-z]{2,3}$");// regex pour email
    var resultat = emailfiltre.test(mail);
    if (resultat == false) {
      document.getElementById("emlHelp").innerHTML = "Attention! Vérifiez votre adresse e-mail, elle est invalide!";
      return false;
    }else {
      document.getElementById("emlHelp").innerHTML = '<span class="text-success">Adresse e-mail valide!</span>';
      return true;
    }
  }
}

function checkquestion(){
  var vquestion = document.forms["formulaire_contact"]["votrequestion"].value;
  if (vquestion.trim() == "") {
    document.getElementById("vqHelp").innerHTML = "Attention, vous avez oublié de préciser votre question!";
    document.getElementById("votrequestion").focus();
    return false;
  }else {
    document.getElementById("vqHelp").innerHTML = '<span class="text-success">Question renseignée!</span>';
    return true;
  }
}

//appeler fonction en cliqt sur envoyer dans form contact Jarditou - 
//attention ici notre form est le [1] car ya champs de form dans barre de nav

document.forms[1].addEventListener("submit", function(evenement){
  checknom();
  checkprenom();
  checkdatenaissance();
  checkcp();
  checkemail();
  checkquestion();
  if (checknom() == false) {
    evenement.preventDefault();
  } else if (checkprenom() == false) {
    evenement.preventDefault();
  } else if (checkdatenaissance() == false) {
    evenement.preventDefault();
  } else if (checkcp() == false) {
    evenement.preventDefault();
  } else if (checkemail() == false) {
    evenement.preventDefault();
  } else if (checkquestion() == false) {
    evenement.preventDefault();
  }
});

