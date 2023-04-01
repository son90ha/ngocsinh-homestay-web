var slideIndex = 1;
showSlide1(slideIndex);
showSlide2(slideIndex);
showSlide3(slideIndex);
showSlide4(slideIndex);

function prevSlide(num) {
    if (num == 1) {
        showSlide1(slideIndex -= 1);
    } else if (num == 2) {
        showSlide2(slideIndex -= 1);
    } else if (num == 3) {
        showSlide3(slideIndex -= 1);
    } else if (num == 4) {
        showSlide4(slideIndex -= 1);
    }
}

function nextSlide(num) {
    if (num == 1) {
        showSlide1(slideIndex -= 1);
    } else if (num == 2) {
        showSlide2(slideIndex -= 1);
    } else if (num == 3) {
        showSlide3(slideIndex -= 1);
    } else if (num == 4) {
        showSlide4(slideIndex -= 1);
    }
}

function showSlide1(n) {
    var i;
    var slides = document.getElementById("slider_1").getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

function showSlide2(n) {
    var i;
    var slides = document.getElementById("slider_2").getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

function showSlide3(n) {
    var i;
    var slides = document.getElementById("slider_3").getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

function showSlide4(n) {
    var i;
    var slides = document.getElementById("slider_4").getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}
