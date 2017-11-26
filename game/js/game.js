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

        })
    })
});

function initGame() {

}
