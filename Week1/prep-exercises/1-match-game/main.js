// IDs
const STICKS_ID = 'sticks'
const BUTTON_ONE_ID = 'button_one'
const BUTTON_TWO_ID = 'button_two'
const BUTTON_THREE_ID = 'button_three'
const PLAYERS_ID = 'players'
const PLAYER_ONE_ID = 'player_one'
const PLAYER_TWO_ID = 'player_two'

const ACTIVE_PLAYER_CLASS = 'active_player'
const WINNER_PLAYER_CLASS = 'winner'

const amountStartStick = 20
let amountStick = amountStartStick

const displayNSticks = amount => {
  for (let i = 0; i < amount; i++) {
    const stick = document.createElement('span');
    stick.className = 'stick';
    document.getElementById(STICKS_ID).appendChild(stick);
  }
}

const updateToTheNextPlayer = () => {
    // @TODO MAKE ME
    // Update the amount of sticks displayed to the players
    // Tell who is the next player or if anyone won, end the game (hint: you can call endTheGame function)
}

const endTheGame = winnerPlayerId => {
    // @TODO MAKE ME
    // Show the winner
    // Make sure players can not try to remove sticks anymore
}

// @TODO MAKE ME
// React to click on buttons
// On a click, remove the amount of sticks displayed by the button
// Update the game for the next player (hint: you can call updateToTheNextPlayer function)

// ========== Start the game
// Display the start sticks
displayNSticks(amountStartStick)

// Set the first player as the active one
document.getElementById(PLAYER_ONE_ID).classList.toggle(ACTIVE_PLAYER_CLASS)
