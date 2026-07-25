// =========================
// PREVIEW DEL ÚLTIMO LANZAMIENTO
// =========================

const previewButton = document.getElementById("previewButton");
const cover = document.querySelector(".releaseCover img");
const progress = document.getElementById("progress");

// Creamos el reproductor
const preview = new Audio("audio/simeamas_preview.mp3");

let isPlaying = false;

// -------------------------
// Reproducir
// -------------------------

function playPreview() {

    preview.play();

    isPlaying = true;

    previewButton.textContent = "⏸ Pausar";

    cover.classList.add("playing");

requestAnimationFrame(updateProgress);

}

// -------------------------
// Pausar
// -------------------------

function pausePreview() {

    preview.pause();

    isPlaying = false;

    previewButton.textContent = "▶ Preview";

    cover.classList.remove("playing");

progress.style.width = "0%";

}

// -------------------------
// Botón
// -------------------------

previewButton.addEventListener("click", () => {

    if (isPlaying) {

        pausePreview();

    } else {

        playPreview();

    }

});

// -------------------------
// También funciona haciendo
// click sobre la portada
// -------------------------

cover.addEventListener("click", () => {

    if (isPlaying) {

        pausePreview();

    } else {

        playPreview();

    }

});

// -------------------------
// Cuando termina la preview
// -------------------------

preview.addEventListener("ended", () => {

    preview.currentTime = 0;

    pausePreview();

});

// -------------------------
// Barra de progreso
// -------------------------

function updateProgress() {

    if (preview.duration) {

        const percent = (preview.currentTime / preview.duration) * 100;

        progress.style.width = percent + "%";

    }

    if (!preview.paused) {

        requestAnimationFrame(updateProgress);

    }

}