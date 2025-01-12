let travelerCounter = document.querySelector('.dropdown-container')
let originInputElem = document.querySelector('#origin')
let destinationInputElem = document.querySelector('#destination')
let inputPassenger = document.querySelector('#travelling')
let arrowUpInput = document.querySelector('.sfa-angle-down')
let replaceLocatian = document.querySelector('.replace-location')
let faqBoxes = document.querySelectorAll('.FAQ-box')
let faqPanel = document.querySelectorAll('.FAQ-box_panel ')
let footerAccordion = document.querySelector('.footer-accordion_clicable')
let footerAccordionPanel = document.querySelector('.footer-accordion_panel')
let footerAccordionIcon = document.querySelector('.footer-accordion__icon')
let footerAccordionSuport = document.querySelector('.footer-suport-accordion_clicable')
let footerAccordionSuportPanel = document.querySelector('.footer-suport-accordion_panel')
let footerAccordionLogo = document.querySelector('.footer-suport-accordion__icon')
let subMenu = document.querySelector('.sub-menu_mobile')


faqBoxes.forEach(function (boxes) {
    boxes.addEventListener('click', function (event) {

        const isActive = boxes.classList.contains('faq-boxes_active')

        faqBoxes.forEach(function (items) {
            items.classList.remove('faq-boxes_active')
        })

        if (!isActive) {
            boxes.classList.toggle('faq-boxes_active')
        }


    })
})
inputPassenger.addEventListener('focus', function () {
    arrowUpInput.classList.add('sfa-angle-down--toggle')
    travelerCounter.classList.add('dropdown-container--toggle')
})
inputPassenger.addEventListener('blur', function () {
    arrowUpInput.classList.remove('sfa-angle-down--toggle')
    travelerCounter.classList.remove('dropdown-container--toggle')

})
replaceLocatian.addEventListener('click', function (event) {
    event.preventDefault()

    let originInputElem = document.querySelector('#origin').value
    let destinationInputElem = document.querySelector('#destination').value


    document.getElementById('origin').value = destinationInputElem
    document.getElementById('destination').value = originInputElem


    console.log();
})
footerAccordion.addEventListener('click', function () {
    footerAccordionPanel.classList.toggle('footer-accordion_panel--toggle')
    footerAccordionIcon.classList.toggle('footer-accordion__icon--toggle')
})
footerAccordionSuport.addEventListener('click', function () {
    footerAccordionSuportPanel.classList.toggle('footer-suport-accordion_panel--toggle')
    footerAccordionLogo.classList.toggle('footer-suport-accordion__icon--toggle')
})
window.addEventListener('scroll', function () {
    if (window.scrollY > 62) {
        subMenu.classList.add('sub-items_mobile-active')
    }
    else {
        subMenu.classList.remove('sub-items_mobile-active')
    }
})





const swiper = new Swiper('.swiper', {



    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
