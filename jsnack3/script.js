function func() {
    const arrayn = [];
    let somma = 0;
    let maggiore = 0;
    let minore = Number.MAX_SAFE_INTEGER;

    arrayn.push(document.getElementById("n1").value);
    arrayn.push(document.getElementById("n2").value);
    arrayn.push(document.getElementById("n3").value);
    arrayn.push(document.getElementById("n4").value);
    arrayn.push(document.getElementById("n5").value);
    arrayn.push(document.getElementById("n6").value);
    arrayn.push(document.getElementById("n7").value);
    arrayn.push(document.getElementById("n8").value);
    arrayn.push(document.getElementById("n9").value);
    arrayn.push(document.getElementById("n0").value);
    
    for (let i = 0; i < arrayn.length; i++) {
        somma += parseInt(arrayn[i]);
        if (maggiore < parseInt(arrayn[i])) {
            maggiore = parseInt(arrayn[i]);
        }
        if (minore > parseInt(arrayn[i])) {
            minore = parseInt(arrayn[i]);
        }
    }
    let media = somma / arrayn.length;
    if(isNaN(somma)) {
        alert("Assicurati di aver compilato tutti i campi nel modo corretto.");
    } else {
        alert("La somma è " + somma + ".\nIl maggiore è " + maggiore +".\nIl minore è " + minore + ". \nLa media è " + media + ".");
    }
}