// function that begins game
function runGame (user) {
    // hides choice buttons once game is ran
    document.querySelector('#choices').style.display = "none"
    // calls genComputer to get computer's answer
    let compAns = genComputer()
    // runs function whoWins to determine winner
    let winner = whoWins(user, compAns)
    // runs function to display results
    displayResults(user, compAns, winner)
}
// function that displays results
function displayResults(user, compAns, winner) {
    // displays user's choice
    display (`Your Choice: ${user.toUpperCase()}`, 'p', 'result')
    // displays computer's choice
    display (`Computer's Choice: ${compAns.toUpperCase()}`, 'p', 'result')
    // displays who won
    display (winner, 'h2', 'result')
    // displays try again button
    display ('Try Again', 'button', 'result')
    // grabs last child in result div (which is the try again button), and adds click event lister to it that clears result div when pressed
    document.querySelector('#result').lastChild.addEventListener('click', function () {
        // delets results to start game over
        document.querySelector('#result').innerHTML = ''
        // redisplays choice buttons
        document.querySelector('#choices').style.display = "block"
    })
}
// function decides who wins
function whoWins (user, comp) {
    // returns tie if answers are the same 
    if (user===comp) return 'Tie'
    // returns 'user wins' if user wins
    else if (user==='rock' && comp==='scissors' || user==='scissors' && comp==='paper' || user==='paper' && comp==='rock') return 'You Won!'
    // returns 'computer wins' for all other cases
    else return 'You Lose! Ha. Ha.'
}

// generates random answer for computer
function genComputer () {
    // generates random number between 1 and 3
    let ran = Math.floor((Math.random() * 3) + 1);
    // returns 'rock' 'paper' or 'scissors based on variable ran
    if (ran===1) return 'rock'
    else if (ran===2) return 'paper'
    else return 'scissors'
}

// function used to add element to existing html element
function display (value, element, id) {
    // creates p element and adds x to it 
    var newElement = document.createElement(element);
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById(id);
    destination.appendChild(newElement);
}

// adds click event listeners to each button, all run the runGame function
    // #rock button
document.querySelector('#rock').addEventListener('click', function () {
    runGame ('rock')
})
    // #paper button
document.querySelector('#paper').addEventListener('click', function () {
    runGame ('paper')
})
    // #scissors button
document.querySelector('#scissors').addEventListener('click', function () {
    runGame ('scissors')
})