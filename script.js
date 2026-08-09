const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");

const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");

function moverBoton() {
    const ancho = window.innerWidth - botonNo.offsetWidth;
    const alto = window.innerHeight - botonNo.offsetHeight;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}

botonNo.addEventListener("mouseenter", moverBoton);

botonNo.addEventListener("touchstart", function(evento) {
    evento.preventDefault();
    moverBoton();
});

botonSi.addEventListener("click", function() {
    pregunta.classList.add("oculto");
    respuesta.classList.remove("oculto");
    crearEmojis();
});

function crearEmojis() {
    const emojis = ["🌷", "🎡", "👀", "🍟"];

    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            const emoji = document.createElement("div");

            emoji.classList.add("emoji-flotante");
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + "vw";

            document.body.appendChild(emoji);

            setTimeout(function() {
                emoji.remove();
            }, 4000);
        }, i * 150);
    }
}