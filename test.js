$(document).ready(function() {

    $("#myBtn").click(function(){

        debugger
        let userName = $("#username").val();

        //$("#game-container").attr('data', './game?name=' + userName);
        $("#game-container").attr('data', './game/index.html?name=' + userName);
        $("#mainGameModal").modal("show");
    });

});