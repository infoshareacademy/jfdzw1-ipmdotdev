$(document).ready(function () {

  $("#gameShowBtn").click(function () {

    let userName = $("#username").val();

    $("#game-container").attr('data', './game/index.html?name=' + userName);
  });
});