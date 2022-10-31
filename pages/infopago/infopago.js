const srt = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 300,
});
srt.reveal(`.seccion-container`);
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
let preciot = getParameterByName("precio");
document.getElementById("preciototal").innerText= "S/." + preciot;
let preciofinal = document.getElementById("totalfinal");
let costoEmpaque = 10;
let costosEnvio = 35;
let numpreciofinal= (Number(preciot) + Number(costoEmpaque) + Number(costosEnvio));
preciofinal.innerText =  "S/."+ numpreciofinal;
/////////////////////////REGRESA AL INDEX///////////////////////////////////////
// window.location.href= "index.html"
//const regresar = document.createElement("a");
document.getElementById("botonRegresar").innerHTML = `<i class='ri-arrow-left-s-line'></i><a onclick='window.location.href="https://jorgitoayala.github.io/Sneakers/index.html"' id='regresar'>Regresar</a>`;
//document.getElementById("botonRegresar").appendChild(regresar);
function validarcupon(){
    let cupon = document.getElementById("ingreso-cupon");
    let txtcupon = document.getElementById("txt-cupon");

    if(cupon.value == "GATITOS"){
        let cupongatitos = 25;
        txtcupon.innerHTML = "<p>Cupon</p><p> - S/. "+cupongatitos+"</p>";
        let preciodesc = numpreciofinal - cupongatitos;
        console.log(numpreciofinal - cupongatitos);
        preciofinal.innerText = "S/." + preciodesc;
        /*preciodesc.innerText = "S/." + preciodesc - cupon.value*/
    }else{
        alert("No existe cupon o ingrese un cupon valido 😾😼");
    }
}

function cambiarSecciones(){
    let titulo = document.getElementById("form-titulo");
    let formulario = document.getElementById("titulo-formulario");
    let formpagar = document.getElementById("formulario-pagar");
    let pagartxt = document.getElementById("botonPrincipal");
    
    if(formulario.display == "none"){
        formulario.style.display = "block";
        formpagar.style.display = "none";

    }else{
        formulario.style.display = "none";
        formpagar.style.display = "block";
        titulo.innerText = "Registro de pago";
        pagartxt.innerHTML = "<i class='ri-bank-card-line'></i>Pagar";
        document.getElementById("botonRegresar").innerHTML = `<i class='ri-arrow-left-s-line'></i><a  id='regresar'>Regresar</a>`;

      
        let regresar = document.getElementById("botonRegresar");
        regresar.addEventListener("click", () =>{
            formulario.style.display = "block";
            formpagar.style.display = "none";
            titulo.innerText = "Direccion de envio";
            pagartxt.innerHTML = "<i class='ri-bank-card-line'></i>Proceder al pago";
            document.getElementById("botonRegresar").innerHTML = `<i class='ri-arrow-left-s-line'></i><a onclick='window.location.href="index.html"' id='regresar'>Regresar</a>`;
        })
    }
}
  