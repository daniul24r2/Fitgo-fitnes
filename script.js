document.addEventListener("DOMContentLoaded", function () {
    // --- Код для работы видео-слайдера ---
    const mainVideo = document.getElementById("main-video");
    const videoTitle = document.getElementById("video-title");
    const thumbnails = document.querySelectorAll(".video-thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video");
            const title = this.getAttribute("data-title");

            mainVideo.querySelector("source").src = videoSrc;
            mainVideo.load();
            mainVideo.play();

            videoTitle.textContent = title;
        });
    });

    // --- Код для калькулятора калорий ---
    const calculateButton = document.getElementById("calculate");
    if (calculateButton) {
        calculateButton.addEventListener("click", function () {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value);
            let age = parseInt(document.getElementById("age").value);
            let activity = parseFloat(document.getElementById("activity").value);

            if (isNaN(weight) || isNaN(height) || isNaN(age)) {
                document.getElementById("result").innerText = "Введите корректные данные!";
                return;
            }

            let bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Формула Миффлина-Сан Жеора (мужская версия)
            let calories = Math.round(bmr * activity);

            document.getElementById("result").innerText = `Ваша норма: ${calories} ккал в день`;
        });
    }

    // --- Код для открытия и закрытия модальных окон (Log in и Sign up) ---
    function setupModal(buttonId, modalId) {
        const btn = document.getElementById(buttonId);
        const modal = document.getElementById(modalId);
        if (!btn || !modal) return; // Проверяем, есть ли элементы

        const closeBtn = modal.querySelector(".close");

        btn.addEventListener("click", () => modal.style.display = "flex");
        closeBtn.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

    setupModal("loginBtn", "loginModal");
    setupModal("signupBtn", "signupModal");

    // --- Код для плавного перехода по разделам ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

});
