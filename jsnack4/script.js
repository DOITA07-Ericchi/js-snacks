function func() {
    let invitati = ['sayori', 'yuri', 'natsuki', 'monika'];
    let nome = document.getElementById("nome").value;
    let invito = false;

    for (let i = 0; i < nome.length ; i++){
        if (nome.toLowerCase() == invitati[i]){
            invito = true;
            break;
        }
    }

    if(invito == true) {
        alert("Benvenutə al Club di Letteratura!");
    } else {
        const justmonika = document.getElementById("justmonika");
        justmonika.play();
        document.getElementById("literatureclub").innerHTML = 'JSnack <span class="text-red">4</span> - Welcome to the <del>Party</del> Literature Club!';
        document.getElementById("classroom").classList.add("justmonika");
        alert("Just Monika.");
    }
}