var scoreboard = [];

function PlayerClass(_name, _score){
    this.name = _name;
    this.score = _score;
}


function initScoreboard() {
    // noinspection JSAnnotator
    var emptyPlayer = new PlayerClass("",0);

    for (var i=0; i<5; i++){
        scoreboard[i] = emptyPlayer;
    }
};

function createPlayer(name, score) {
   var player = new PlayerClass(name, score);
   return player;
};

function insertPlayer(player) {

    for (var i=0; i<5; i++){
        if (player.score >= scoreboard[i].score){
            scoreboard.splice(i, 0, player);
            scoreboard.pop();
        }
    }

};

function getResults() {
  return scoreboard;
};