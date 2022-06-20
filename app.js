//number values

let min = 1;
let max = 10;
let winningNumber = getRadNum(min, max);
let guessesLeft = 3;

//UIs
const game = document.querySelector('#game');
const minim = document.querySelector('.min-num')
const maxim = document.querySelector('.max-num')
const UIguessInput = document.querySelector('#guess-number')
const UIsubmitInput= document.querySelector('#submit-value')
const message = document.querySelector('.message')

//assign ui to min and max num 
minim.textContent = min
maxim.textContent = max


//event listener
UIsubmitInput.addEventListener('click', function() {
    let guessn =  parseInt(UIguessInput.value)
    //validate
    if(guessn < min || guessn > max || isNaN(guessn)){
        showMessage(`Please enter a number between ${min} and ${max}`, 'red')
        UIguessInput.value = ''
    }else{
   //check winning
   if (guessn === winningNumber) {
       //disable input
       UIguessInput.disabled = true;
       //green border
       UIguessInput.style.borderColor = 'green';
       //show win message
    showMessage(`${winningNumber} IS CORRECT!! YOU WON`,'green' )
     //play again
     UIsubmitInput.value = 'PLAY AGAIN'
     UIsubmitInput.className +='play-again'
     
       
   } else {
       guessesLeft -=1;
       if (guessesLeft ==0) {
           //disable input
          //play again
    UIsubmitInput.value = 'PLAY AGAIN'
    UIsubmitInput.className +='play-again'
        //red border
        UIguessInput.style.borderColor = 'red';
        showMessage(`GAME OVER, You lost. The correct answer was  ${winningNumber}`,'red' ) 
       } else if(isNaN(guessn)){
        UIguessInput.disabled = false;
           showMessage(`please add a number in the box`)

       }
        else  {
           //user wrong number message
           showMessage(`${guessn} is not correct, ${guessesLeft} guess(es) left.` , 'red' )
           //red border color
           UIguessInput.style.Color = 'red';
           //input value nothing
           UIguessInput.value = ''
           UIguessInput.disabled = false;
         
       }
       
   }
   
    }
    
});
//play again
game.addEventListener('mousedown',reload)

function reload(e){
if (e.target.className ==='play-again') {
    window.location.reload()
}
}

 function showMessage(msg, color){
     message.style.color = color
message.textContent = msg


 }
//radnum
 function getRadNum(min, max){
   return  Math.floor(Math.random()*(max-min+1)+min)
 }