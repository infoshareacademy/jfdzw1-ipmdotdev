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

let keypressed = false
    $(document).keyup(()=> keypressed=false)
    $(document).keydown(function(e) {
        if(keypressed){
            return
        }
        keypressed=true
        console.log('pressed', e.which)
        switch(e.which) {
            case 37: // left
                $('#stick-man').stop().animate({
                    'left': `-=${spotSize}px`
                },50);
                break;

            case 38: // up
                $('#stick-man').stop().animate({
                    'top': `-=${spotSize}px`
                },50);
                break;

            case 39: // right
                $('#stick-man').stop().animate({
                    'left': `+=${spotSize}px`
                },50);
                break;

            case 40: // down
                $('#stick-man').stop().animate({
                    'top': `+=${spotSize}px`
                },50);
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
  };

  Obstacle.prototype.startMoving = function () {
    let that = this;
    setInterval(function () {

      let newTop = parseInt(that.$elem.css('top')) + 1;
      that.$elem.css('top', `${newTop}px`);

      if (newTop >= $('.game-board').innerHeight()) {
        that.$elem.remove();
      }
    }, 20);
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



  setInterval(function () {
    let obstacle = new Obstacle();
    obstacle.show();

    setInterval(function () {
       let kolizja = obstacle.checkCollision($('#stick-man'));
        if (kolizja){
           console.log("wystapila kolizja")
        }
    },1000)

  }, 2000);

    var stickman = "#stick-man";


  function initGame() {
    moveBackground();
  }

  initGame();
});

