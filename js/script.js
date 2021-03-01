$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});





$('.drop__language').click(function (event) {
    $('.drop__language, .drop__language__content').toggleClass('show');

});

window.onclick = function (event) {
    if (!event.target.matches('.drop__language__btn')) {
        var dropdowns = document.getElementsByClassName("drop__language__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//slider__1

$(document).ready(function () {
    $('.slider__video').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



$(document).ready(function () {
    $('.main__rubrics__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});




var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.24, 76.89],
        zoom: 13
    });

    // DG.marker([43.24, 76.89]).addTo(map);
});


