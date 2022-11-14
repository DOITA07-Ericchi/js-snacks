function func() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    let pl = p1;
    if (p2.length > pl.length) {
        pl = p2;
    }

    alert("La parola più lunga è " + pl + ".");
}