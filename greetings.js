var hasNormalised = false;
var responsiveBox = document.getElementById("responsive-box");

normaliseBanner();
myInterval = setInterval(changeLanguage, 3000);

function normaliseBanner() {
    if (!hasNormalised) {
        var greeting = document.getElementById("greeting");
        var greetingDescription = document.getElementById(
            "greetingDescription",
        );
        greeting.innerHTML = "Hello!";
        greetingDescription.innerHTML =
            "We are Cenixa | Welcome to our website";
        hasNormalised = true;
    }
}

function changeLanguage() {
    var greeting = document.getElementById("greeting");
    var greetingDescription = document.getElementById("greetingDescription");
    if (greeting.innerHTML === "Hello!") {
        greeting.innerHTML = "नमस्ते!";
        greetingDescription.innerHTML =
            "हामी सेनिक्सा | हाम्रो वेबसाइटमा स्वागत छ";
    } else if (greeting.innerHTML === "नमस्ते!") {
        greeting.innerHTML = "hola!";
        greetingDescription.innerHTML =
            "Somos Cenixa | Bienvenido a nuestro sitio web!";
    } else if (greeting.innerHTML === "hola!") {
        greeting.innerHTML = "你好!";
        greetingDescription.innerHTML = "我們是 塞尼克薩 | 歡迎來到我們的網站";
    } else if (greeting.innerHTML === "你好!") {
        greeting.innerHTML = "Hello!";
        greetingDescription.innerHTML =
            "We are Cenixa | Welcome to our website";
    } else {
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const observingElement = document.querySelector('.aboutCenixa');
    const animatedElement = document.getElementById('flyingbird');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('flyingbird-animation');// Add class to trigger animation
                
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(observingElement); // Start observing the target element
});


