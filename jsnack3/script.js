function func() {
    const arrayn = [];
    let somma = 0;
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
    }
    if(isNaN(somma)) {
        alert("Assicurati di aver compilato tutti i campi nel modo corretto.");
    } else {
        alert("La somma è " + somma + ".");
    }
}