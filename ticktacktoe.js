$(document).ready(function() {

    var current_turn = 'x';
    var resetGame;

    $('#tboard').delegate('td', 'click', function(e) {
        var square = $(e.target)
        if (square.html() == "") {
            square.html(current_turn)
            current_turn = (("x" == current_turn) ? "o" : "x");
        }
    });

    $('button').click(function() {
        $('td').html('');
    });

});