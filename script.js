
let alumnes = [];


let formulari = document.getElementById("formulariAlumne");

let missatge = document.getElementById("missatge");

let cosTaula = document.getElementById("cosTaula");


let btnAsc = document.getElementById("ordenarAsc");
let btnDesc = document.getElementById("ordenarDesc");

formulari.addEventListener("submit", validarFormulari);
btnAsc.addEventListener("click", ordenarAsc);
btnDesc.addEventListener("click", ordenarDesc);

function validarFormulari(e){
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let examen = parseFloat(document.getElementById("examen").value);
    let practiques = parseFloat(document.getElementById("practiques").value);
    let actitud = parseFloat(document.getElementById("actitud").value);
    
}

 if(nom === ""){
        mostrarError("El nom està buit");
        return;
    }

    if(isNaN(examen) || examen < 0 || examen > 10){
        mostrarError("Examen incorrecte (0-10)");
        return;
    }

    if(isNaN(practiques) || practiques < 0 || practiques > 10){
        mostrarError("Pràctiques incorrecte (0-10)");
        return;
    }

    if(isNaN(actitud) || actitud < 0 || actitud > 10){
        mostrarError("Actitud incorrecte (0-10)");
        return;
    }