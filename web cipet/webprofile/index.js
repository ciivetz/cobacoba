// Menambahkan event listener untuk mengatur timeout saat hover
document.getElementById("aboutimg").addEventListener("mouseenter", function() {
        document.getElementById("aboutimg").style.animationPlayState = "running";
});

document.getElementById("aboutimg").addEventListener("mouseleave", function() {
    document.getElementById("aboutimg").style.animationPlayState = "paused";
});