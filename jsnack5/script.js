function func() {
    const arrayn = [];
    let insieme = "";
    arrayn.push(document.getElementById("n1").value);
    arrayn.push(document.getElementById("n2").value);
    arrayn.push(document.getElementById("n3").value);
    arrayn.push(document.getElementById("n4").value);
    arrayn.push(document.getElementById("n5").value);
    arrayn.push(document.getElementById("n6").value);
    
    for (let i = 0; i < arrayn.length; i++) {
        if ((parseInt(arrayn[i]) % 2) === 1){
            insieme+=" " +arrayn[i];
        }
    }

    alert("L'insieme dei numeri dispari è:" + insieme);

}