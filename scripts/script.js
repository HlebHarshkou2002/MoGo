// Кнопка возврата
function up() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 100) / -10));
        t = setTimeout('up()', 20);
    } else clearTimeout(t);
    return false;
}

// jQuery и плавный scroll

$(document).ready(function() {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function() {
            window.location.hash = target;
        });
    });

});



// Header 
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

//Progress Bar

const progressBar = document.querySelector(".progress__bar");

window.addEventListener('scroll', progress);

function progress(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = (windowScroll / windowHeight) * 100;

    progressBar.style.width = percent + "%";
}


// Accordion
const accordions = document.querySelectorAll('.accordion_item');


for (item of accordions) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

// Slider

const slides = document.querySelectorAll('.slide'),
    btns_prev = document.querySelectorAll('.btn-prev'),
    btns_next = document.querySelectorAll('.btn-next');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

activeSlide(index);

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

for (btn_next of btns_next) {
    btn_next.addEventListener('click', nextSlide);
}

for (btn_prev of btns_prev) {
    btn_prev.addEventListener('click', prevSlide);
}

setInterval(nextSlide, 10000);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }