function getRandomInt(max) {
    return Math.floor(1+(Math.random() * max));
}

function func() {
    let n1 = document.getElementById("n1").value;
    let nmax = document.getElementById("nmax").value;
    let ncpu = parseInt(Math.random);

    ncpu = getRandomInt(nmax);

    if (ncpu == n1) {
        alert("Hai vinto!");
        console.log(cpu);
        console.log(n1);
    } else {
        alert("Non hai vinto. Il numero da indovinare era " + ncpu + ".");
    }
}