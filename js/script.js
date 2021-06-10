function generateComputer(){
    let nilaiRandom = Math.random() * 9 + 1;
    if(nilaiRandom <= 3) return "paper";
    else if(nilaiRandom > 3 && nilaiRandom <= 6) return "rock";
    else return "scissor";
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
const p_rock = document.querySelectorAll('.grid-item')[3];
const p_paper = document.querySelectorAll('.grid-item')[4];
const p_scissor = document.querySelectorAll('.grid-item')[5];

p_paper.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "paper";
    let result = stateGame(comp,player);

    showResult.innerHTML = result;
});

p_rock.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "rock";
    let result = stateGame(comp,player);

    showResult.innerHTML = result;
});

p_scissor.addEventListener(('click'), () =>{
    let comp = generateComputer();
    let player = "scissor";
    let result = stateGame(comp,player);

    showResult.innerHTML = result;
});