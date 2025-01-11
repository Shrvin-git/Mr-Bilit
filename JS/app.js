let travelerCounter = document.querySelector('.dropdown-container')
let originInputElem = document.querySelector('#origin')
let destinationInputElem = document.querySelector('#destination')
let inputPassenger = document.querySelector('#travelling')
let arrowUpInput = document.querySelector('.sfa-angle-down')
let replaceLocatian = document.querySelector('.replace-location')
let faqElem = document.querySelectorAll('.accordion-btn')
let faqPanel = document.querySelectorAll('.panel')
let footerAccordion = document.querySelector('.footer-accordion_clicable')
let footerAccordionPanel = document.querySelector('.footer-accordion_panel')
let footerAccordionIcon = document.querySelector('.footer-accordion__icon')

let footerAccordionSuport = document.querySelector('.footer-suport-accordion_clicable')
let footerAccordionSuportPanel = document.querySelector('.footer-suport-accordion_panel')
let footerAccordionLogo = document.querySelector('.footer-suport-accordion__icon')
faqElem.forEach(function (item) {
    item.addEventListener('click', function (event) {

        let descriptionFAQ = event.target.nextSibling.nextSibling
        descriptionFAQ.classList.toggle('panel--toggle')
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




const swiper = new Swiper('.swiper', {



    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});