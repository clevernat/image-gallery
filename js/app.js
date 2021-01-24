
// const clickHere = document.querySelector('#clickHere');

// clickHere.addEventListener('click', displayImages);

// let a = 1;

// function displayImages(e) {

//     if(a === 1 ){
//       document.querySelector('.images').style.display = "none";
//       return a = 0;
//     }else{
//       document.querySelector('.images').style.display = "block";

//       return a = 1;
//     }
    


//   e.preventDefault();
// }

         




 

const clickHere = document.querySelector('#clickHere');

clickHere.addEventListener('click', displayImages);

function displayImages(e) {

   const images = document.querySelector('.images');

   document.querySelector('.openImage').innerHTML = `
   <button type="button" class="btn btn-outline-warning btn-lg text-outline-warning" id="clickHere">View Images <i class="far fa-eye"></i></button>
   `

   document.querySelector('.noImage').style.display = 'none';

   images.innerHTML = `

            <div data-aos="fade-up" class="three"></div>
            <div data-aos="fade-down" class="eight"></div>
            <div data-aos="fade-right" class="twenty-seven"></div>
            <div data-aos="fade-left" class="thirty-three"></div>
            <div data-aos="fade-up-right" class="fourtyfive"></div>
            <div data-aos="fade-left" class="twenty-three"></div>
            <div data-aos="fade-down-right" class="thirty-two"></div>
            <div data-aos="fade-down-left" class="twenty-two"></div>
            <div data-aos="flip-left" class="thirteen"></div>
            <div data-aos="flip-right" class="sixteen"></div>
            <div data-aos="flip-up" class="ten"></div>
            <div data-aos="flip-down" class="fourteen"></div>
            <div data-aos="zoom-in" class="nine"></div>
            <div data-aos="zoom-in-up" class="seven"></div>
            <div data-aos="zoom-in-down" class="eighteen"></div>
            <div data-aos="zoom-in-left" class="seventeen"> </div>
            <div data-aos="zoom-in-right" class="thirty-one"></div>
            <div data-aos="zoom-out-up" class="twenty-eight"></div>
            <div data-aos="zoom-out-down" class="fourtyseven"></div>
            <div data-aos="zoom-out-right" class="fourtysix"></div>
            <div data-aos="zoom-out-left" class="twenty"></div>
            <div data-aos="fade-right" class="fifty-two"></div>
            <div data-aos="fade-left" class="fourtythree"></div>
            <div data-aos="fade-right" class="six"></div>
            <div data-aos="fade-left" class="fifteen"></div>
            <div data-aos="fade-right" class="fourtyfour"></div>
            <div data-aos="fade-left" class="four"></div>
            <div data-aos="fade-right" class="eleven"></div>
            <div data-aos="fade-right" class="thirty"></div>
            <div data-aos="fade-up-left" class="twelve"></div>
            <div data-aos="fade-left" class="twenty-four"></div>
            <div data-aos="fade-right" class="fifty"></div>
            <div data-aos="fade-left" class="fourtyeight"></div>
            <div data-aos="fade-right" class="thirty-four"></div>
            <div data-aos="fade-left" class="thirty-five"></div>
            <div data-aos="fade-left" class="twenty-five"></div>
            <div data-aos="fade-right" class="thirty-seven"></div>
            <div data-aos="fade-left" class="twenty-five"></div>
            <div data-aos="fade-right" class="fourtynine"></div> 
            
            <div data-aos="fade-right" class="fifty-one"></div>  
   
   `

   const footer = document.querySelector('.footers');
  
   footer.className = 'bg-dark text-warning py-3 text-center';
   footer.innerHTML = `
   <small>Powered By clevernat &copy;<span class="insert-date">21</span></small>
   `

    e.preventDefault();
}

AOS.init();


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 800, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });








