var scoreboard = [];

function PlayerClass(_name, _score){
    this.name = _name;
    this.score = _score;
}


function initScoreboard() {
    if (scoreboard.length === 0){
        scoreboard.push(createPlayer("pit", 1000));
        scoreboard.push(createPlayer("hsh", 800));
        scoreboard.push(createPlayer("khy", 690));
        scoreboard.push(createPlayer("kiy", 300));
        scoreboard.push(createPlayer("kiny", 180));
    }
}

function createPlayer(name, score) {
  var player = {
    name: name,
    score: score
  }

  return player;

}

function insertPlayer(player) {
    for (var i=0; i<5; i++){
        if (player.score >= scoreboard[i].score){
            scoreboard.splice(i, 0, player);
            scoreboard.pop();
            break
        }
    }

}

function getResults() {
    var results = scoreboard.slice(0);
    return results;


}
