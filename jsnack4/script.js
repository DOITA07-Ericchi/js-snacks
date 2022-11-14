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
        alert("Just Monika.");
        const justmonika = document.getElementById("justmonika");
        justmonika.play();
    }
}