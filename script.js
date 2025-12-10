const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        botaoTema.textContent = "🌙";
    } else {
        botaoTema.textContent = "☀️";
    }
});