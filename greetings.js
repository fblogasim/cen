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


function changeColor(color) {
    document.getElementById("our-philosophy").style.backgroundColor = color;
}

var the_animation = document.querySelectorAll(".responsive-box");

var observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(forwardWidth, 7000);
                entry.target.classList.add("animated-div");
            } else {
                //uncomment the following line of code if you want the animation to repeat again
                //entry.target.classList.remove('scroll-animation')
            }
        });
    },
    { threshold: 0.1 },
);
//
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}

function forwardWidth() {
    responsiveBox.style.width = "200px";
}
