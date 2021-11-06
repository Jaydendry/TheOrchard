gsap.registerPlugin(ScrollTrigger)

const objTl = gsap.timeline()
objTl.from('.Header', {
    y: 50,
    duration: 3.5,
    ease: 'power4',
    opacity: 0,
})
objTl.from('.subHero', {
    y: 50,
    duration: 2.5,
    ease: 'power4',
    opacity: 0,
}, '-=2')

objTl.from('.subHero', {
    scrollTrigger: {
        trigger: ' .hero',
        start: 'top center'
    },
    y: -100,
    ease: 'power4',
},)
objTl.from('.sector3-text', {
    scrollTrigger:{
        trigger: '#sector3',
        start: 'top bottom',
    },
    y: 50,
    duration: 4,
    ease: 'power4.out',
    stagger: 0.5,
    opacity: 0,
}, '-=4')

objTl.from('.card-image', {
    scrollTrigger:{
        trigger: '.cardCollection',
        start: 'top bottom',
    },
    y: 50,
    duration: 4,
    ease: 'power4.out',
    stagger: 0.5,
    opacity: 0,
}, '-=4')

const form = document.querySelector('.input-validation-type');
form.addEventListener('sl-submit', () => alert('Form submitted!'));

function openNav() {
    document.querySelector("nav").style.display = "flex";
    document.querySelector('.open').style.display = 'none';
  }
  
function closeNav() {
    document.querySelector("nav").style.display = "none";
    document.querySelector('.open').style.display = 'block';
  }

// const leftButton = document.querySelector('')
const image = document.querySelector('.sector2-vector img')
let number = 1
const next = document.querySelector(".nextSlide");
const prev = document.querySelector(".prevSlide");

next.addEventListener('click', function(){
    if (number >= 5 ){
        number = 1
    }else if(number == 0){
    number = 1
    }
    image.src = '/images/Slideshow/'+number+'.png'
    number = number + 1
})
prev.addEventListener('click', function(){
    if (number < 1 ){
        number = 5
    }else if(number == 0){
        number = 1
    }
    image.src = '/images/Slideshow/'+number+'.png'
    number = number - 1
})

const dialog1 = document.querySelector('.dialog1');
const dialog2 = document.querySelector('.dialog2');
const dialog3 = document.querySelector('.dialog3');

const openButton1 = dialog1.previousElementSibling
const openButton2 = dialog2.previousElementSibling
const openButton3 = dialog3.previousElementSibling

const closeButton1 = dialog1.querySelector('sl-button[slot="footer"]');
const closeButton2 = dialog2.querySelector('sl-button[slot="footer"]');
const closeButton3 = dialog3.querySelector('sl-button[slot="footer"]');

openButton1.addEventListener('click', () => dialog1.show());
openButton2.addEventListener('click', () => dialog2.show());
openButton3.addEventListener('click', () => dialog3.show());

closeButton1.addEventListener('click', () => dialog1.hide());
closeButton2.addEventListener('click', () => dialog2.hide());
closeButton3.addEventListener('click', () => dialog3.hide());


// openButton.addEventListener('click',openDialog('1'))
// openButton2.addEventListener('click',openDialog('2'))
// openButton3.addEventListener('click',openDialog('3'))

// function openDialog(number){
//     alert(number)
//     const dialog = document.querySelector('.dialog'+number);
//     dialog.show();
//     const closeButton = dialog.querySelector('sl-button[slot="footer"]');
//     closeButton.addEventListener('click', () => dialog.hide());
// }

// let array = [dialog1,dialog2,dialog3]

// function dialog(){
//     const openButton = array[i].previousElementSibling
//     alert(array[i])
//     const closeButton = array[i].querySelector('sl-button[slot="footer"]');
    
//     openButton.addEventListener('click', () => array[i].show());
//     closeButton.addEventListener('click', () => array[i].hide());
// }

// array.forEach(dialog)

