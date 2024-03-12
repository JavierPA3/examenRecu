document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem("visitCounter") ?? localStorage.setItem("visitCounter", 0);
    localStorage.setItem("visitCounter", new Number(localStorage.getItem("visitCounter"))+1);

    const prompt = document.querySelector(".prompt");
    const mensaje = localStorage.getItem("visitCounter") == 1 
        ? "Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas." 
        : localStorage.getItem("visitCounter") == 2 
            ? "Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?"
            : `Ya empiezas a ser pesado. Esta es la vez número ${localStorage.getItem("visitCounter")} que entras. Sigue con tus cosas`

    prompt.innerHTML = mensaje;

    const bttn = document.querySelector("button");
    bttn.addEventListener("click", () => {
        localStorage.removeItem("visitCounter");
        prompt.innerHTML = "RESETEADO";
    })

})