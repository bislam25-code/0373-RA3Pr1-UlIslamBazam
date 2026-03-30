
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

     missatge.textContent = "";
    missatge.className = "";

    let notaFinal = calcularNotaFinal(examen, practiques, actitud);

    afegirAlumne(nom, examen, practiques, actitud, notaFinal);

    formulari.reset();
}

function calcularNotaFinal(examen, practiques, actitud){
    return (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
}

function afegirAlumne(nom, examen, practiques, actitud, notaFinal){
let alumne = {
    nom: nom,
    examen: examen,
    practiques: practiques,
    actitud: actitud,
    notaFinal: notaFinal

};

    alumnes.push(alumne);

    missatge.textContent = "Alumne afegit correctament";
    missatge.className = "correcte";

    mostrarAlumnes();
}

function mostrarAlumnes(){
    cosTaula.innerHTML = "";

    alumnes.forEach(alumne => {

    let estat = alumne.notaFinal >= 5 ? "Aprovat" : "Suspès";
    let classe = alumne.notaFinal >= 5 ? "aprovat" : "suspes";

    let fila = `
    <tr>
        <td>${alumne.nom}</td>
        <td>${alumne.examen.toFixed(2)}</td>
        <td>${alumne.practiques.toFixed(2)}</td>
        <td>${alumne.actitud.toFixed(2)}</td>
        <td>${alumne.notaFinal.toFixed(2)}</td>
        <td class="${classe}">${estat}</td>
    </tr>
    `;

    cosTaula.innerHTML += fila;
    });
}

function ordenarAsc(){
    alumnes.sort((a,b) => a.notaFinal - b.notaFinal);
    mostrarAlumnes();

}

function ordenarDesc(){
    alumnes.sort((a,b) => b.notaFinal - a.notaFinal);
    mostrarAlumnes();
    
}