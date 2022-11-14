function func() {
    const arrayn = [];
    let insiemedisp = "";
    let insiemepari = "";
    arrayn.push(document.getElementById("n1").value);
    arrayn.push(document.getElementById("n2").value);
    arrayn.push(document.getElementById("n3").value);
    arrayn.push(document.getElementById("n4").value);
    arrayn.push(document.getElementById("n5").value);
    arrayn.push(document.getElementById("n6").value);
    
    for (let i = 0; i < arrayn.length; i++) {
        if ((parseInt(arrayn[i]) % 2) === 1){
            insiemedisp+=" " +arrayn[i];
        }
        if ((parseInt(arrayn[i]) % 2) === 0){
            insiemepari+=" " +arrayn[i];
        }
    }

    alert("L'insieme dei numeri dispari è:" + insiemedisp +".\nL'insieme dei numeri pari è:" + insiemepari + ".");

}