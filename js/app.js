document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    
    // Asignar eventos
    inputEmail.addEventListener("blur", Validar);

    inputAsunto.addEventListener("blur", Validar);

    inputMensaje.addEventListener("blur", Validar);

    function Validar(e) {
        if(e.target.value.trim() === "") {
            Alerta();
        } else {
            console.log("Datos recogidos exitosamente");
        }
    }
    function Alerta(){
        const error = document.createElement("P");
        error.textContent = "Digita algo"

        console.log(error);
    }
});
