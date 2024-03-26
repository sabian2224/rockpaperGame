function play(playersMove){ 
    let randomNumber = Math.random();
    let computersMoveImg = document.getElementById('computers-move');
    let playersMoveImg = document.getElementById('players-move');

    //generating computers move
    let computersMove = '';
    if(randomNumber > 0 && randomNumber<=1/3){
        computersMove = 'rock';
    }
    else if(randomNumber > 1/3 && randomNumber <= 2/3){
        computersMove = 'paper';
    }
    else if(randomNumber > 2/3 && randomNumber <=1){
        computersMove = 'scissors';
    }

    //Result checking
    let result = document.getElementById('result');
    
   result.innerHTML =  winer(computersMove, playersMove).toUpperCase();
   computersMoveImg.src = `assets/${computersMove}.png`;
   playersMoveImg.src = `assets/${playersMove}.png`;

   /*alert(`You choose ${playersMove}, computer choose ${computersMove}.
--${result.toUpperCase()}--`);*/
}


function winer(computersMove, playersMove) {
    let result = '';
    switch (playersMove) {
        case 'rock':
            if(computersMove === 'rock'){
                result = 'tie';
            }
            else if(computersMove === 'paper'){
         
                result = 'you lose';
            }
            else if(computersMove === 'scissors'){
                result = 'you win';
            }
            break;
        case 'paper':
      
            if(computersMove === 'rock'){
                result = 'you win';
            }
            else if(computersMove === 'paper'){
                result = 'tie';
            }
            else if(computersMove === 'scissors'){
                result = 'you lose';
            }
            break;
        case 'scissors':
        
        if(computersMove === 'rock'){
            result = 'you lose';
        }
        else if(computersMove === 'paper'){
            result = 'you win';
        }
        else if(computersMove === 'scissors'){
            result = 'tie';
        }
        break;

        default:
            console.log('This move does not exist!');
    }

    return result;
}