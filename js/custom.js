    //header section carousel
    $(document).ready(function() {
        $(".bs_main_carousel_wrapper").owlCarousel({
            items: 1,
            nav: true,
            // autoplay: true,
            // autoplayTimeout: 2000,
            // autoplaySpeed: 2000,
            navText: [$('.bs_main_carousel_prev'), $('.bs_main_carousel_next')],
            // loop: true
        });

        //team section carousel
        $(".carousel_wrapper").owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 2000,
            nav: true,
            navText: [$('.bs_testimonial_carousel_previous'), $('.bs_testimonial_carousel_nextt')],
            loop: true,
            margin: 50


        });
    });
    //portfolio
    $(document).ready(function() {
        $('.port_folio').click(function(e) {
            e.preventDefault();
            const value = $(this).attr('data-filter');
            if (value == 'all') {
                $('.itembox').show('1000');
            } else {
                $('.itembox').not('.' + value).hide('1000');
                $('.itembox').filter('.' + value).show('1000 ');
            }

        });

        $('.port_folio').click(function(e) {
            e.preventDefault();
            $('.port_folio').removeClass('active');
            $(this).addClass('active');
        });
    })





    //this one is for responsive menu at 996px width
    function myfunction(x) {
        var navbar = document.getElementsByClassName('bs_menu_section');
        navbar[0].classList.toggle('show');
        x.classList.toggle("changePosition");


    }

    //js for navbar
    $(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            let navHeight = $('.bs_head_wrapper').height();
            if (scroll > navHeight) {
                $(".bs_head_wrapper").css("background", "#fff");
                $(".bs_menu_section li a").css("color", "#121212").css("opacity", ".7");
                $(".bs_menu_section li").addClass("change_after");
                $(".bs_logo_section .toggle-btn-span").css("background-color", "black"); //toggle button color
                $(".bs_logo_section img ").attr('src', './image/logo-2.svg');
            } else {

                $(".bs_head_wrapper").css("background", "#0067f4");
                $(".bs_menu_section li a").css("color", "#fff");
                $(".bs_menu_section li").removeClass("change_after");
                $(".bs_logo_section .toggle-btn-span").css("background-color", "#fff"); //toggle button color
                $(".bs_logo_section img ").attr('src', './image/logo.svg');

            }
        })
    })




    $(document).ready(function() {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function() {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function() {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.bs_menu_section li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.bs_menu_section ul li').removeClass("active");
                currLink.parent().addClass("active");
            } else {
                currLink.parent().removeClass("active");
            }
        });
    }


    //accordian for about section

    const btn = document.getElementsByClassName('bs_about_left_first_btn');
    let i;
    for (i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', function() {

            this.classList.toggle('bottom_icon');
            let content = this.nextElementSibling;
            var contentEle = document.getElementsByClassName('bs_about_left_first_content');
            var toggleBtn = document.getElementsByClassName('bs_about_left_first_btn');
            for (var i = 0; i < contentEle.length; i++) {
                if (content !== contentEle[i]) {
                    contentEle[i].style.maxHeight = null;
                } else {
                    for (var j = 0; j < toggleBtn.length; j++) {
                        if (this !== toggleBtn[j]) {
                            toggleBtn[j].classList.remove('bottom_icon');
                        }
                    }
                }
            }

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }