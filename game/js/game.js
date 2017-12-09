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

  const spotSize = 55; //size of one 'corridor' on game-board. 55 is 495 / 9.

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
                    'marginLeft': `-=${spotSize}px`
                });
                break;

            case 38: // up
                $('#stick-man').stop().animate({
                    'marginTop': `-=${spotSize}px`
                });
                break;

            case 39: // right
                $('#stick-man').stop().animate({
                    'marginLeft': `+=${spotSize}px`
                });
                break;

            case 40: // down
                $('#stick-man').stop().animate({
                    'marginTop': `+=${spotSize}px`
                });
                break;

            default: return;
        }
        e.preventDefault();
    });

  function Obstacle() {
    this.x = Math.floor(Math.random() * 9) * spotSize;
    this.width = (Math.ceil(Math.random() * 3) * spotSize);
    this.height = (Math.ceil(Math.random() * 2) * spotSize);
    this.top = -this.height;
    this.$elem = $('<div class="obstacle"></div>');
  }

  Obstacle.prototype.show = function() {
    this.$elem.css({
      'top': `${this.top}px`, 'left': `${this.x}px`, 'width': `${this.width}px`, 'height': `${this.height}px`
    }).appendTo($('.game-board'));
    this.startMoving();
  }

  Obstacle.prototype.startMoving = function () {
    let that = this;
    setInterval(function () {
      let newTop = parseInt(that.$elem.css('top')) + 1;
      that.$elem.css('top', `${newTop}px`);

      if (newTop >= $('.game-board').innerHeight()) {
        that.$elem.remove();
      }
    }, 20);
  }

  setInterval(function () {
    let obstacle = new Obstacle();
    obstacle.show();
  }, 2000);

  function initGame() {
    moveBackground();
  }

  initGame();
});

