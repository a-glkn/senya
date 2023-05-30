import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";

import Inputmask from "inputmask/dist/inputmask.es6.js";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

document.addEventListener('DOMContentLoaded', () => {

    var selector = document.querySelectorAll(".form__input_tel");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    var swiper = new Swiper(".slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".slider .swiper-pagination"
        },
        navigation: {
            nextEl: ".slider .swiper-button-next",
            prevEl: ".slider .swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            1140: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
          }
    });


    var togglers = document.querySelectorAll(".menu-toggler");
	togglers.forEach((t) => {
        t.addEventListener("click",function(e){
            document.body.classList.toggle('extra-menu-openned');
        }, false);
    });


    // var liSubs = document.querySelectorAll(".extra-menu nav ul li.sub");
	// liSubs.forEach((t) => {
    //     t.addEventListener("click",function(e) {
    //         e.preventDefault();

    //         t.classList.toggle('active');
    //     }, false);
    // });

    // const div = document.querySelector( '.extra-menu');
    
    // document.addEventListener( 'click', (e) => {
    //     const withinBoundaries = e.composedPath().includes(div);
    
    //     if ( ! withinBoundaries ) {
    //         document.body.classList.toggle('extra-menu-openned');
    //     }
    // })

});
