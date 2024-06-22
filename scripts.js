document.getElementById('celebrateButton').addEventListener('click', function() {
    let celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = "🎉🎈 Selamat Ulang Tahun, Meisya! 🎈🎉";

    // Menambahkan efek confetti
    let confettiSettings = { target: 'celebration' };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});