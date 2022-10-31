const srt = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 300,
});
srt.reveal(`.seccion-container`)    

function validarcupon(){
    let cupon = document.getElementById("ingreso-cupon")
    let txtcupon = document.getElementById("txt-cupon")
    if(cupon.value == "GATITOS"){
        txtcupon.innerHTML = "<p>Cupon</p><p> - S/. 25</p>"
    }else{
        alert("No existe cupon o ingrese un cupon valido 😾😼")
    }
}

function cambiarSecciones(){
    let titulo = document.getElementById("form-titulo")
    let formulario = document.getElementById("titulo-formulario")
    let formpagar = document.getElementById("formulario-pagar")
    let pagartxt = document.getElementById("botonPrincipal")
   
    if(formulario.display == "none"){
        formulario.style.display = "block"
        formpagar.style.display = "none"
       
    }else{
        formulario.style.display = "none"
        formpagar.style.display = "block"
        titulo.innerText = "Registro de pago"
        pagartxt.innerHTML = "<i class='ri-bank-card-line'></i>Pagar"
      
        let regresar = document.getElementById("botonRegresar")
        regresar.addEventListener("click", () =>{
            formulario.style.display = "block"
            formpagar.style.display = "none"
            titulo.innerText = "Direccion de envio"
            pagartxt.innerHTML = "<i class='ri-bank-card-line'></i>Proceder al pago"
            
           
        })
    }
}
