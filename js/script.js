$(function () {
   // Осуществеление плавного скролла к якорю, при клике на один из блоков меню-навигации
   $('a.navbar__link').click(function () {
      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
         duration: 1000,
         easing: 'swing',
      });
   });

   // Подключение и адаптирование слайдеров в зависимости от разрешения мониторов
   $('.steps__prepare-slider').slick({
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      infinite: false,
      asNavFor: '.steps__prepare-slider-min',
      responsive: [
         {
            breakpoint: 770,
            settings: {
               dots: true,
               asNavFor: false
            }
         }, {
            breakpoint: 570,
            settings: {
               dots: false,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },
      ]
   });

   $('.steps__prepare-slider-min').slick({
      dots: true,
      arrows: false,
      focusOnSelect: true,
      slidesToShow: 6,
      infinite: false,
      asNavFor: '.steps__prepare-slider',
      responsive: [
         {
            breakpoint: 1120,
            settings: {
               slidesToShow: 5,
            }
         }, {
            breakpoint: 940,
            settings: {
               slidesToShow: 4,
            }
         }
      ]
   });

   $('.steps__slider').slick({
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      infinite: false,
      asNavFor: '.steps__slider-min',
      responsive: [
         {
            breakpoint: 770,
            settings: {
               dots: true,
               asNavFor: false
            }
         }, {
            breakpoint: 570,
            settings: {
               dots: false,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },
      ]
   });

   $('.steps__slider-min').slick({
      dots: true,
      arrows: false,
      focusOnSelect: true,
      slidesToShow: 6,
      infinite: false,
      asNavFor: '.steps__slider',
      responsive: [
         {
            breakpoint: 1120,
            settings: {
               slidesToShow: 5,
            }
         }, {
            breakpoint: 940,
            settings: {
               slidesToShow: 4,
            }
         },
      ]

   });

   $('.slider__review').slick({
      dots: true,
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      slidesToShow: 2,
      infinite: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
            }
         }, {
            breakpoint: 570,
            settings: {
               slidesToShow: 1,
               dots: false,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },
      ]

   });

   $('.slider-project').slick({
      dots: true,
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      slidesToShow: 3,
      infinite: false,
      responsive: [
         {
            breakpoint: 1250,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 830,
            settings: {
               slidesToShow: 1,
            }
         }, {
            breakpoint: 570,
            settings: {
               dots: false,
               slidesToShow: 1,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },
      ]
   });

   $('.question__subtitle').click(function (event) {
      if ($('.question__inner').hasClass('only-one')) {
         $('.question__subtitle').not($(this)).removeClass('active');
         $('.question__text').not($(this).next()).slideUp(500);
      }
      $(this).toggleClass('active').next().slideToggle(500);
   });


   $('.slider__about').slick({
      dots: true,
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      slidesToShow: 1,
      infinite: false,
      responsive: [
         {
            breakpoint: 660,
            settings: {
               dots: false,
            }
         }, {
            breakpoint: 570,
            settings: {
               dots: false,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },
      ]
   });

   $('.slider__integrate, .slider__friends, .slider__tech').slick({
      dots: true,
      prevArrow: '<svg class="slick-left" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5254 3.525L7.07539 15L18.5254 26.475L15.0004 30L0.000392914 15L15.0004 0L18.5254 3.525Z" fill="#00D1B4"/></svg>',
      nextArrow: '<svg class="slick-right" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.475L11.45 15L0 3.525L3.525 0L18.525 15L3.525 30L0 26.475Z" fill="#00D1B4"/></svg>',
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 810,
            settings: {
               dots: false,
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 570,
            settings: {
               dots: false,
               slidesToShow: 2,
               slidesToScroll: 2,
               prevArrow: '<svg class="slick-left" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="#00D1B4"/></svg>',
               nextArrow: '<svg class="slick-right" width="33" height="8" viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5L32 4.5V3.5L0 3.5L0 4.5Z" fill="#00D1B4"/></svg>'
            }
         },

      ]
   });
   $('.btn').click(function () {
      $('.modal').show();
      $('body').css('overflow', 'hidden');
   });

   $('.modal__close').click(function () {
      $('.modal').hide();
      $('body').css('overflow', 'auto');
   });


   //E-mail Ajax Send
   $("form").submit(function () { //Change
      let th = $(this);

      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         // alert("Thank you!");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

   $('.modal__btn').click(function () {
      $('.modal__title p').text("Ваше сообщение отправлено");
      setTimeout(function () {
         $('.modal__title p').text("Мы свяжемся с вами как можно быстрее!");
      }, 1600);
   });


   $('.burger').click(function () {
      $('.navbar__menu').toggleClass('active');
   });
   $('.burger').click(function () {
      $('.burger').toggleClass('active');
   });


   const phoneaa = $('input[type=phone]');


});


