document.addEventListener("DOMContentLoaded", function () {
    const secciones = Array.from(document.querySelectorAll("section"));
    const btnSubir = document.getElementById("btnSubir");
    const btnBajar = document.getElementById("btnBajar");
    const offset = 100;
    let currentIndex = 0;

    function scrollConOffset(target) {
        const top = target.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }

    function actualizarSeccionActual() {
        const scrollY = window.scrollY + offset + 1;
        for (let i = 0; i < secciones.length; i++) {
            const top = secciones[i].offsetTop;
            const bottom = top + secciones[i].offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
                currentIndex = i;
                break;
            }
        }

        btnSubir.style.display = currentIndex > 0 ? "block" : "none";
        btnBajar.style.display = currentIndex < secciones.length - 1 ? "block" : "none";
    }

    btnSubir.addEventListener("click", () => {
        if (currentIndex > 0) {
            scrollConOffset(secciones[currentIndex - 1]);
        }
    });

    btnBajar.addEventListener("click", () => {
        if (currentIndex < secciones.length - 1) {
            scrollConOffset(secciones[currentIndex + 1]);
        }
    });

    window.addEventListener("scroll", actualizarSeccionActual);

    actualizarSeccionActual();
});
