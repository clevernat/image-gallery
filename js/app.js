const clickHere = document.querySelector('#clickHere');

clickHere.addEventListener('click', displayImages);

function displayImages(e) {

   const images = document.querySelector('.images');
   images.innerHTML = `

   <div class="three"></div>
            <div class="eight"></div>
            <div class="twenty-seven"></div>
            <div class="thirty-three"></div>
            <div class="fourtyfive"></div>
            <div class="thirty-six"></div>
            <div class="thirty-two"></div>
            <div class="twenty-two"></div>
            <div class="thirteen"></div>
            <div class="sixteen"></div>
            <div class="ten"></div>
            <div class="fourteen"></div>
            <div class="nine"></div>
            <div class="seven"></div>
            <div class="eighteen"></div>
            <div class="seventeen"> </div>
            <div class="thirty-one"></div>
            <div class="twenty-eight"></div>
            <div class="fourtyseven"></div>
            <div class="fourtysix"></div>
            <div class="twenty"></div>
            <div class="fifty-two"></div>
            <div class="fourtythree"></div>
            <div class="six"></div>
            <div class="fifteen"></div>
            <div class="fourtyfour"></div>
            <div class="four"></div>
            <div class="eleven"></div>
            <div class="twenty-three"></div>
            <div class="thirty"></div>
            <div class="twenty-four"></div>
            <div class="fifty"></div>
            <div class="fourtyeight"></div>
            <div class="thirty-four"></div>
            <div class="twenty-five"></div>
            <div class="thirty-seven"></div>
            <div class="twenty-nine"></div>
            <div class="fourtynine"></div> 
            <div class="thirty-nine"></div>
            <div class="fifty-one"></div>  
   
   `

    e.preventDefault();
}