var scoreboard = [];

function initScoreboard() {
  if (scoreboard.length === 0) {
    scoreboard.push(createPlayer("pit", 5000));
    scoreboard.push(createPlayer("git", 4000));
    scoreboard.push(createPlayer("bit", 3000));
    scoreboard.push(createPlayer("kit", 2000));
    scoreboard.push(createPlayer("fit", 1000));
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
  for (var i = 0; i < 5; i++) {
    if (player.score > scoreboard[i].score) {
      scoreboard.splice(i, 0, player);
      scoreboard.pop();
      break;
    }
  }
}

function getResults() {
  var results = scoreboard.slice(0);
  return results;
}
