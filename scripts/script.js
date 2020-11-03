//Carousel bron: youtube - Dev Ed
//ook vermeld in bronnenlijst

// JavaScript Document
const carouselSlide = document.querySelector(".backdrops"); //Const, de container blijft hetzelfde
const carouselImages = document.querySelectorAll(".backdrop"); //Const, de images blijven ook hetzelfde

const carouselSlideCover = document.querySelector(".covers");
const carouselImagesCover = document.querySelectorAll(".cover");

const carouselSlideNews = document.querySelector(".newscontainer");
const carouselImagesNews = document.querySelector(".newscontainer");

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');


//counter
let counter = 1 //Counter die blijft veranderen (welke img we op zitten, dus let)
const size = carouselImages[0].clientWidth; //Const die de width of 1 img pakt 
const sizeCover = carouselImagesCover[0].clientHeight;

let counterNews = 0
const sizeNews = carouselImagesNews.clientWidth + 25;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; //Start op 1e img en niet de "extra"
carouselSlideCover.style.transform = 'translateY(' + (-sizeCover * counter) + 'px)';



//Button listeners
nextBtn.addEventListener('click', () => { // functie wanneer op next button geklikt wordt
    if (counter >= carouselImages.length - 1) return; // check of de counter is groter of gelijk aan de totaal aantal img-1, als dit het geval is cancel de function, zodat je niet van de laatste img naar -> niks kan 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; // animatie effect voor de slider die naar volgende img gaat
    counter++; // counter die + 1 doet om current img bij te houden
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; //de image die over die x-as, de size (van 1 img) als px * de hoeveelste img de counter aangeeft naar links gaat.

    carouselSlideCover.style.transition = "transform 0.4s ease-in-out";
    carouselSlideCover.style.transform = 'translateY(' + (-sizeCover * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    carouselSlideCover.style.transition = "transform 0.4s ease-in-out";
    carouselSlideCover.style.transform = 'translateY(' + (-sizeCover * counter) + 'px)';
});


nextBtn2.addEventListener('click', () => {
    if (counterNews >= 1) return;
    console.log(counterNews);
    carouselSlideNews.style.transition = "transform 0.4s ease-in-out";
    counterNews++
    carouselSlideNews.style.transform = 'translateX(' + (-sizeNews * counterNews) + 'px)';
    nextBtn2.style.display = "none";
    prevBtn2.style.display = "block";
});

prevBtn2.addEventListener('click', () => {
    if (counterNews <= 0) return;
    console.log(counterNews);
    carouselSlideNews.style.transition = "transform 0.4s ease-in-out";
    counterNews--;
    carouselSlideNews.style.transform = 'translateX(' + (-sizeNews * counterNews) + 'px)';
    prevBtn2.style.display = "none";
    nextBtn2.style.display = "block";
});


//deze functie zorgt ervoor dat als je in het begin op prev button klik (naar -1 gaat), dat de carousel naar de laatste (visible) img gaat
carouselSlide.addEventListener('transitionend', () => { //function die start als de animatie geeindigd is
    if (carouselImages[counter].id === 'lastClone') { // als img counter gelijk staat aan de eerste extra img ("lastCLone") 
        carouselSlide.style.transition = "none"; // dan voert hij geen animatie uit
        counter = carouselImages.length - 2; //  en zet hij de counter naar de laatst img (img 5)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; //de tanslatie naar de laatste img

        carouselSlideCover.style.transition = "none";
        carouselSlideCover.style.transform = 'translateY(' + (-sizeCover * counter) + 'px)';
    } //Deze functie doet het tegenovergestlde als de functie hierboven (inplaats van naar de laatste extra img, ga je naar de 1e img)
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        carouselSlideCover.style.transition = "none";
        carouselSlideCover.style.transform = 'translateY(' + (-sizeCover * counter) + 'px)';
    }
});





if (screen.width < 1024) {
    document.querySelector("#firstClone").style.display = 'none';
}



