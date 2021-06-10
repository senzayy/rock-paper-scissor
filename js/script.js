function generateComputer(){
    let nilaiRandom = Math.random() * 9 + 1;
    if(nilaiRandom <= 3) return "paper";
    else if(nilaiRandom > 3 && nilaiRandom <= 6) return "rock";
    else return "scissor";
}

function compClass(compHand){
    if(compHand == "paper") {
        c_rock.classList.remove('chosen');
        c_scissor.classList.remove('chosen');
        c_paper.classList.add('chosen');
    }
    else if(compHand == "rock"){
        c_rock.classList.add('chosen');
        c_scissor.classList.remove('chosen');
        c_paper.classList.remove('chosen');
    }
    else{
        c_rock.classList.remove('chosen');
        c_scissor.classList.add('chosen');
        c_paper.classList.remove('chosen');
    }
}

function stateGame(compHand, playerHand){
    if(compHand == playerHand) return "Seri!";
    else if(compHand == "paper" && playerHand == "rock") return "Kalah!";
    else if(compHand == "paper" && playerHand =="scissor") return "Menang!";
    else if(compHand == "rock" && playerHand =="paper") return "Menang!";
    else if(compHand == "rock" && playerHand =="scissor") return "Kalah!";
    else if(compHand == "scissor" && playerHand =="paper") return "Kalah!";
    else return "Menang!";    
}

const showResult = document.querySelector('.result-text');
const c_rock = document.querySelectorAll('.grid-item')[0];
const c_paper = document.querySelectorAll('.grid-item')[1];
const c_scissor = document.querySelectorAll('.grid-item')[2];

const p_rock = document.querySelectorAll('.grid-item')[3];
const p_paper = document.querySelectorAll('.grid-item')[4];
const p_scissor = document.querySelectorAll('.grid-item')[5];

p_paper.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "paper";
    let result = stateGame(comp,player);

    p_paper.classList.add('chosen');
    p_scissor.classList.remove('chosen');
    p_rock.classList.remove('chosen');
    p_paper.classList.remove('idle');
    p_scissor.classList.remove('idle');
    p_rock.classList.remove('idle');
    compClass(comp);
    showResult.innerHTML = result;
});

p_rock.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "rock";
    let result = stateGame(comp,player);

    compClass(comp);
    p_paper.classList.remove('chosen');
    p_scissor.classList.remove('chosen');
    p_rock.classList.add('chosen');
    p_rock.classList.remove('idle');
    p_scissor.classList.remove('idle');
    p_paper.classList.remove('idle');
    showResult.innerHTML = result;
});

p_scissor.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "scissor";
    let result = stateGame(comp,player);

    compClass(comp);
    p_paper.classList.remove('chosen');
    p_scissor.classList.add('chosen');
    p_rock.classList.remove('chosen');
    p_scissor.classList.remove('idle');
    p_paper.classList.remove('idle');
    p_rock.classList.remove('idle');
    showResult.innerHTML = result;
});