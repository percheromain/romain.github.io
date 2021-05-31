function IMC() {
    var t = document.getElementById("t").value;
    var m = document.getElementById("m").value;
    x = 10000 * m / (t * t);
    document.getElementById("calc").innerText = "Votre imc est " + x;
    return x
}

function IMG() {
    x = IMC();
    a = age();
    s = sexe();
    i = (1.20 * x) + (0.23 * a) - (10.8 * s) - 5.4;
    document.getElementById("img").innerText = "Votre IMG est " + i;
    document.getElementById("age").innerText = a;
    if (s == 0) {
        document.getElementById("sexe").innerText = "Femme"; 
    } else {
        document.getElementById("sexe").innerText = "Homme";
    } 
    return i
}



function etat() {
    x = IMC();
    i = IMG();
    if (x < 18.5) {
        document.getElementById("state").innerText = "Vous êtes en insuffisance pondérale";
    } else if (x < 25) {
        document.getElementById("state").innerText = "Vous êtes à un poids normal";
    } else if (x < 30) {
        document.getElementById("state").innerText = "Vous êtes en surpoids";
    } else if (x >= 30) {
        document.getElementById("state").innerText = "Vous êtes en obésité";
    }
    document.getElementById("tableau").style.display = "block";
    var p = document.getElementById("pre").value;
    document.getElementById("prenom").innerText = p;
    document.getElementById("imc").innerText = x;
    document.getElementById("i").innerText = i;
}


function change() {
    document.getElementById("big").src="slim.png"   
}
   
function change2() {
    document.getElementById("big").src="big.png"
}

function age() {
    var x = document.getElementById("an").value;
    a = 2021 - x;
    if (a < 0 || a > 120) {
        alert("Je pense qu'il y a une erreur...");
    } else {
        document.getElementById("ans").innerText = "Vous avez: " + a + " ans"
    }
    return a
}

function sexe() {
    var s1 = document.getElementById("sexf").checked;
    if  (s1) {
        return 0
    } else {
        return 1
    }
}   