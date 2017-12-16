function stickmanManager(props) {

  const $stickman = $('#stick-man');

  let keypressed = false;
  $(document).keyup(() => keypressed = false)
  $(document).keydown(function (e) {

    let positionOfStickMan = $("#stick-man").position();

    if (keypressed) {
      return;
    }
    keypressed = true;
    switch (e.which) {
      case 37: // left
        if (positionOfStickMan.left === 0) {
          break
        }
        $stickman.stop().animate({
          'left': `-=${props.spotSize}px`
        }, 50);
        break;

      case 38: // up
        if (positionOfStickMan.top < 55) {
          break
        }
        $stickman.stop().animate({
          'top': `-=${props.spotSize}px`
        }, 50);
        break;

      case 39: // right
        if (positionOfStickMan.left > 385) {
          break;
        }
        $stickman.stop().animate({
          'left': `+=${props.spotSize}px`
        }, 50);
        break;

      case 40: // down
        if (positionOfStickMan.top > 385) {
          break;
        }
        $stickman.stop().animate({
          'top': `+=${props.spotSize}px`
        }, 50);
        break;

      default:
        return;
    }
    e.preventDefault();

  });

}