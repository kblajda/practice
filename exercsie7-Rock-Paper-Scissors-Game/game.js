const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const game = {
    userChoice: "",
    aiChoice: "",
}


const hands = [...document.querySelectorAll('.select img')];

function handSelect() {

    game.userChoice = this.dataset.option;
    console.log(game.userChoice);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px red';
}

function computerChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;

}

function checkResult(user, ai) {
    if (user === ai) {
        return 'draw'
    } else if ((user === "papier" && ai === 'kamień') ||
        (user === "kamień" && ai === "nożyczki") ||
        (user === 'nożyczki' && ai === "papier")) {
        return 'win'
    } else {
        return 'loss';
    }
}

function publishResult(user, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = user;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "You win ;)";
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Ai win ;(";
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Draw";
        document.querySelector('[data-summary="who-win"]').style.color = 'blue';
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.userChoice}"]`).style.boxShadow = "";
    game.userChoice = "";
}

function startGame() {
    if (!game.userChoice) {
        return alert("Choice hand!")
    }
    game.aiChoice = computerChoice()
    const gameResult = checkResult(game.userChoice, game.aiChoice);
    console.log(gameResult);
    publishResult(game.userChoice, game.aiChoice, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelect))

document.querySelector('.start').addEventListener('click', startGame)