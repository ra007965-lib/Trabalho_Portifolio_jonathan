let slideAtual = 1;
const totalSlides = 5;
setInterval(() => {
    slideAtual++;
    if (slideAtual > totalSlides) {
        slideAtual = 1;
    }
    document.getElementById("radio" + slideAtual).checked = true;
}, 30000);