const scoreboard = [];

function initScoreboard() {
  if (scoreboard.length === 0) {
    scoreboard.push(createPlayer("pit", 500));
    scoreboard.push(createPlayer("git", 400));
    scoreboard.push(createPlayer("bit", 300));
    scoreboard.push(createPlayer("kit", 200));
    scoreboard.push(createPlayer("fit", 100));
  }
}

function createPlayer(name, score) {
  const player = {
    name: name,
    score: score
  }
  return player;
}

function insertPlayer(player) {
  for (let i = 0; i < 5; i++) {
    if (player.score > scoreboard[i].score) {
      scoreboard.splice(i, 0, player);
      scoreboard.pop();
      break;
    }
  }
}

function getResults() {
  let results = scoreboard.slice(0);
  return results;
}
