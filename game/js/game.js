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


    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                $('#stick-man').stop().animate({
                    'marginLeft': '-=55px'
                });
                break;

            case 38: // up
                $('#stick-man').stop().animate({
                    'marginTop': '-=55px'
                });
                break;

            case 39: // right
                $('#stick-man').stop().animate({
                    'marginLeft': '+=55px'
                });
                break;

            case 40: // down
                $('#stick-man').stop().animate({
                    'marginTop': '+=55px'
                });
                break;

            default: return;
        }
        e.preventDefault();
    });



  function initGame() {
    moveBackground();
  }

  initGame();
});

