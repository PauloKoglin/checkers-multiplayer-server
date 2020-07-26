const random = require('hash-generator');

class Game {

    constructor() {
        this.room = random(10);
        this.player1 = null;
        this.player2 = null;
    }

    // get room() {
    //     return this.iRoomId;
    // }

    // set room(value) {
    //     this.iRoomId = value;
    // }

    // get player1() {
    //     return this.oPlayer1;
    // }

    // set player1(value) {
    //     this.oPlayer1 = value;
    // }

    // get Player2() {
    //     return this.oPlayer2;
    // }

    // set Player2(value) {
    //     this.oPlayer2 = value;
    // }
}

module.exports = Game;