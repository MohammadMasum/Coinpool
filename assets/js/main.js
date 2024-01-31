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


        $(document).ready(function() {
            $('#manager_user').dataTable( {
                "searching": false,
                "lengthChange": false
            })
        });

        function dragNdrop(event) {
            var fileName = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("preview");
            var previewImg = document.createElement("img");
            previewImg.setAttribute("src", fileName);
            preview.innerHTML = "";
            preview.appendChild(previewImg);
        }
        function drag() {
            document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
        }
        function drop() {
            document.getElementById('uploadFile').parentNode.className = 'dragBox';
        }

    });
}(jQuery));


// timer 
function updateTimer() {
    future = Date.parse("feb 2, 2024 11:30:00");
    now = new Date();
    diff = future - now;

    // Ensure the timer values are not negative
    if (diff < 0) {
        days = hours = mins = secs = 0;
    } else {
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor(diff / (1000 * 60 * 60));
        mins = Math.floor(diff / (1000 * 60));
        secs = Math.floor(diff / 1000);
    }

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div class="days">' + wrapDigits(d) + '<div class="label">days</div></div>' +
        '<div class="hours">' + wrapDigits(h) + '<div class="label">hours</div></div>' +
        '<div class="mins">' + wrapDigits(m) + '<div class="label">minutes</div></div>'+
        '<div class="sec">' + wrapDigits(s) + '<div class="label">seconds</div></div>';
}

function wrapDigits(number) {
    // Convert the number to a string and add a leading zero if it's a single digit
    const paddedNumber = number < 10 ? '0' + number : number;
    return paddedNumber.toString().split('').map(digit => '<span>' + digit + '</span>').join('');
}

setInterval(updateTimer, 1000);




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




let card_trigger1 = document.querySelector(".card-trigger1"); //declearing profile card element
let card_selector1 = document.querySelector(".card-selector1"); //declearing profile picture

card_selector1.addEventListener("click", function() { //on click on profile picture toggle hidden class from css
card_trigger1.classList.toggle("hidden")})



let card_trigger2 = document.querySelector(".card-trigger2"); //declearing profile card element
let card_selector2 = document.querySelector(".card-selector2"); //declearing profile picture

card_selector2.addEventListener("click", function() { //on click on profile picture toggle hidden class from css
card_trigger2.classList.toggle("hidden")})





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



var config = {
    type: 'line',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'APAC PME',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            fill: false,
            borderColor: '#22A2CB',
            data: [
                50,
                300,
                100,
                450,
                150,
                200,
                300
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: ''
                },
                ticks: {
                    fontColor: 'white' // Set text color to white
                },
                gridLines: {
                    display: false // Hide grid lines on the x-axis
                }
            }],
            yAxes: [{
                display: true,
                //type: 'logarithmic',
                scaleLabel: {
                    display: true,
                    labelString: 'Index Returns'
                },
                ticks: {
                    min: 0,
                    max: 500,
                    stepSize: 100,
                    fontColor: 'white' // Set text color to white
                },
                gridLines: {
                    display: false // Hide grid lines on the y-axis
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });

    });

    window.myLine.update();
});


function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}