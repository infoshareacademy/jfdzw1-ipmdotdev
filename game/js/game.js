function game() {

  $(document).ready(function () {

    const spotSize = 55; //size of one 'corridor' on game-board. 55 is 495 / 9.
    const myScoreboard = getResults(scoreboard);
    const intervals = [];
    let newScore;

    $('#rankingModal').on('shown.bs.modal', function () {

      let $table = $('#rankingModalBody');
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
      let x = 0;
      intervals.push(setInterval(function () {
        x += 1;
        $('.game-board').css('background-position', '0 ' + x + 'px');

        showScore();

      }, 20));
    }

    function Obstacle() {
      this.x = Math.floor(Math.random() * 9) * spotSize;
      this.width = (Math.ceil(Math.random() * 3) * spotSize);
      this.height = (Math.ceil(Math.random() * 2) * spotSize);
      this.top = -this.height;
      this.$elem = $('<div class="obstacle"></div>');
    }

    Obstacle.prototype.show = function () {
      this.$elem.css({
        'top': `${this.top}px`, 'left': `${this.x}px`, 'width': `${this.width}px`, 'height': `${this.height}px`
      }).appendTo($('.game-board'));
      this.startMoving();
    };

    Obstacle.prototype.startMoving = function () {
      let that = this;
      intervals.push(setInterval(function () {

        let newTop = parseInt(that.$elem.css('top')) + 1;
        that.$elem.css('top', `${newTop}px`);

        if (newTop >= $('.game-board').innerHeight()) {
          that.$elem.remove();
        }

        let collision = that.checkCollision($('#stick-man'));
        if (collision) {
          gameOver();
        }

      }, 20));
    };

    Obstacle.prototype.checkCollision = function (stickman) {
      let stickmanX = parseInt(stickman.css('left').slice(0, -2));
      let stickmanY = parseInt(stickman.css('top').slice(0, -2));
      let obstacleX = parseInt(this.$elem.css('left').slice(0, -2));
      let obstacleY = parseInt(this.$elem.css('top').slice(0, -2));
      let stickmanWidth = 55;
      let stickmanHeight = 55;

      return obstacleX < stickmanX + stickmanWidth &&
        obstacleX + this.width > stickmanX &&
        obstacleY < stickmanY + stickmanHeight &&
        this.height + obstacleY > stickmanY;
    };


    intervals.push(setInterval(function () {
      let obstacle = new Obstacle();
      obstacle.show();

    }, 2200));

    function showScore() {
      newScore = parseInt($('.game-board').css('background-position-y'));
      $('#playerScore').text(newScore);
    }

    function gameOver() {
      intervals.forEach(x => clearInterval(x));
      $(document).off('keydown');

    }

    function initGame() {
      moveBackground();
      const name = getParameterByName('name');
      $('#playerName').html(name);
    }

    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    initScoreboard();
    initGame();
    stickmanManager({spotSize: spotSize});
  });
}
