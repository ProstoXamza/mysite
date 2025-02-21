let time = 60;
let timerElement = document.querySelector("#timer span");

setInterval(() => {
    if (time > 0) {
        time--;
        timerElement.textContent = time;
    } else {
        alert("📡 FBI ma’lumotlaringizni qabul qildi! 👮‍♂️");
        document.body.innerHTML = "<h1>🚔 FBI sizni kuzatyapti... 🚔</h1>";
    }
}, 1000); // Получаем аудио
let scarySound = document.getElementById("scary-sound");

// Ждём 5 секунд и включаем звук
setTimeout(() => {
    scarySound.play();
}, 5000);setTimeout(() => {
    document.body.style.animation = "none";
    document.body.style.background = "white";
}, 10000);