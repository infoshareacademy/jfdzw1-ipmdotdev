$(document).ready(function () {

  initScoreboard();

  let myScoreboard = getResults(scoreboard);


  $('#myModal').on('shown.bs.modal', function () {
    let $table = $('#modalBody');
    $table.empty();
    myScoreboard.forEach(function (e, i) {

      $table.append(`
    <tr>
        <td>${i + 1}</td>
        <td>${e.name}</td>
        <td>${e.score}</td>
    </tr>`);

    });
  });

  function moveBackground() {
    var x = 0;
    setInterval(function () {
      x += 1;
      $('.game-board').css('background-position', '0 ' + x + 'px');
    }, 20);
  }


  function initGame() {
    moveBackground();
  }

  initGame();
});

