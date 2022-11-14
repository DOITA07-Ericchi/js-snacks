function func() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let nm = n1;
    if (n2 > nm) {
        nm = n2;
    }
    if (isNaN(nm)) {
        alert("C'è qualcosa che non va.");
        console.log(nm)
    } else {
        alert("Il numero maggiore è " + nm + ".");
    }
}