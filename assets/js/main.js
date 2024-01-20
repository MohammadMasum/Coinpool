;
(function($) {
    $(document).ready(function() {

        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".header-area").sticky();

        $(".navbar-toggler").on("click", function() {
            $(".header-area").toggleClass("active");
        });

        $(".accordion-item").on("click", function() {
            $('.accordion-item').removeClass("active");
            $(this).addClass("active");
        });


        $(".menu-collapse-trigger").click(function() {
            $(".sidebar, .main-content").toggleClass('collapsed');
        });

        $(".mobile-menu-trigger").click(function() {
            $(".sidebar").addClass('active');
        });

        $(".sidebar .fa-times").click(function() {
            $(".sidebar").removeClass('active');
        });

        /*---------------------------------
		Javascript for aos animation
		----------------------------------*/
        $(function() {
            AOS.init(
              {
                offset: 200,
                duration: 1500,
                once: true,
              }
            );
        });

        /*-------------------------------------------------------------------------------
        popup video 
        -------------------------------------------------------------------------------*/
        $('.play-btn').magnificPopup({
            type: 'video'
        });


        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        $('.idos-slider-trigger').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.idos-dots'),
            arrows: true,
            prevArrow: $('.idos-prev'),
            nextArrow: $('.idos-next'),
            fade: false,
            autoplay: false,
            speed: 1000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        $('.idos-slider-trigger2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.idos-dots2'),
            arrows: true,
            prevArrow: $('.idos-prev2'),
            nextArrow: $('.idos-next2'),
            fade: false,
            autoplay: false,
            speed: 1000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });


        $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.idos-slider-wrap').slick('setPosition');
        });


    });
}(jQuery));


document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove the "active" class from all links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add the "active" class to the clicked link
            this.classList.add('active');

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var headerHeight = document.querySelector('header').offsetHeight;
            var offset = headerHeight;

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});




let card = document.querySelector(".card"); //declearing profile card element
let displayPicture = document.querySelector(".display-picture"); //declearing profile picture

displayPicture.addEventListener("click", function() { //on click on profile picture toggle hidden class from css
card.classList.toggle("hidden")})


// copy clipboard
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
}); 