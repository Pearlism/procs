document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");

    // Detect user interaction to play audio
    function playAudio() {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
        document.removeEventListener("click", playAudio);
    }

    document.addEventListener("click", playAudio);
});
