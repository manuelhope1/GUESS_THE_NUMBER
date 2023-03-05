const toggle = document.getElementById('toggleDark');
const body = document.querySelector('#body');
const namee = document.querySelector('#name');
const boxx = document.getElementById('box');
const info = document.querySelector('.info');
const display = document.querySelector('.display');
const forth = document.querySelector('.forth');
const input = document.querySelector('.num');
let reset= document.getElementById('reset');
let img= document.getElementById('imgg');




toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundColor = 'black';
        namee.style.color = 'white';
        body.style.transition = '500ms';
        toggle.style.color = 'white';
        info.style.backgroundColor = 'black';
        info.style.color = 'white';
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
       

    }
    else {
        body.style.backgroundColor = 'white';
        namee.style.color = 'black';
        body.style.transition = '500ms';
        toggle.style.color = 'black';
        info.style.backgroundColor = 'white';
        info.style.color = 'black';
        input.style.backgroundColor = 'black';
        input.style.color = 'white';
    
        
    }
})



const theme1 = document.querySelector('.theme1');
theme1.addEventListener('click',function(){
    boxx.style.background = 'linear-gradient(to right, #e80505,#0020ef)';
});

const theme2 = document.querySelector('.theme2');
theme2.addEventListener('click',function(){
    boxx.style.background = 'linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)';
});

const theme3 = document.querySelector('.theme3');
theme3.addEventListener('click',function(){
    boxx.style.background = 'radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)';
});

const theme4 = document.querySelector('.theme4');
theme4.addEventListener('click',function(){
    boxx.style.background = 'linear-gradient(to right,#104fd7, rgb(12, 105, 37))';
    return true;
});

const theme5 = document.querySelector('.theme5');
theme5.addEventListener('click',function(){
    boxx.style.background = 'linear-gradient(to right, #0787dd,#e3e3e6)';
});


var msg1 = document.querySelector('#message_1');
var msg2 = document.querySelector('#message_2');



var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [ ];




function play() {
    var user_guess = input.value;
    user_guess= parseInt(user_guess);
    event.preventDefault();

    if (user_guess <= 1 || user_guess >= 100){
        alert("Please enter a number between 1 and 100");
    }

    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;
    

        if (user_guess < answer) {
            info.textContent = "😖Uh-oh, your guess is too low🪫";
            msg1.textContent = "No. of guesses: " + no_of_guesses;
            msg2.textContent = "Guessed numbers are: " + guessed_nums;
            input.style.border= '5px solid  rgb(234, 61, 61)';
            input.style.borderRadius= '0';
            img.src="images/try1.gif" 
            img.style.height="100px"
            img.style.width="100px" 
        }

        else if (user_guess > answer) {
            info.textContent = "😬Oops, your guess is too high⬆️";
            msg1.textContent = "No. of guesses: " + no_of_guesses;
            msg2.textContent = "Guessed numbers are: " + guessed_nums;
            input.style.border= '5px solid rgb(234, 61, 61)';
            input.style.borderRadius= '0';
            img.src="images/try2.gif" 
            img.style.height="100px"
            img.style.width="100px" 
        }

        else if (user_guess == answer) {
            info.textContent = 'Correct ✅, You are a champion🏆🏆!!';
            msg1.textContent = 'The number was: ' + answer;
            msg2.textContent = "You guessed it in " + no_of_guesses + " guesses";
            input.style.border= '5px solid #42b883';
            img.src="images/winner1.gif" 
            img.style.height="100px"
            img.style.width="100px"

            document.querySelector('.guess').disabled = true;
        }
 

           


    }
    
}

document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("play").click();
    }
});


reset.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e)
    location.reload();

})



console.log(answer);



