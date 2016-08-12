function opponents() {
    var random1 = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    switch (random1) {
        case 1:
            opponentOne = cavalry()
            break;
        case 2:
            opponentOne = infantry()
            break;
        case 3:
            opponentOne = messenger()
            break;
        case 4:
            opponentOne = mountedMessenger()
            break;
        case 5:
            opponentOne = logistics()
            break;
        case 6:
            opponentOne = tank()
            break;
    }

    switch (random2) {
        case 1:
            opponentTwo = cavalry()
            break;
        case 2:
            opponentTwo = infantry()
            break;
        case 3:
            opponentTwo = messenger()
            break;
        case 4:
            opponentTwo = mountedMessenger()
            break;
        case 5:
            opponentTwo = logistics()
            break;
        case 6:
            opponentTwo = tank()
            break;
    }

    opponents = [opponentOne, opponentTwo]
}
$(document).ready(function() {

    opponents();
    $('.declared .opponentOne').append(opponents[0].type)
    $('.declared .opponentTwo').append(opponents[1].type)


    $('.opponentOne .type').append(opponents[0].type)
    $('.opponentTwo .type').append(opponents[1].type)
    $('.opponentOne .speed').append(opponents[0].speed)
    $('.opponentTwo .speed').append(opponents[1].speed)
    $('.opponentOne .strength').append(opponents[0].strength)
    $('.opponentTwo .strength').append(opponents[1].strength)
    $('.opponentOne .ability').append(opponents[0].ability)
    $('.opponentTwo .ability').append(opponents[1].ability)

    $('body').on('click', 'button', function() {
        var battle = opponents.reduce(function() {
            // init opponents
            var unitOne = [];
            var unitTwo = [];
            // init stats
            var unitOneAbility = opponents[0].ability()
            var unitOneStrength = parseFloat(opponents[0].strength(), 10)
            var unitOneSpeed = parseFloat(opponents[0].speed(), 10)
            var unitTwoAbility = opponents[1].ability()
            var unitTwoStrength = parseFloat(opponents[1].strength(), 10)
            var unitTwoSpeed = parseFloat(opponents[1].speed(), 10)
                // compare stats
            if (unitOneStrength > unitTwoStrength) {
                unitOne.push(1) // push a score to the unit array
            } else if (unitOneStrength < unitTwoStrength) {
                unitTwo.push(1)
            }
            if (unitOneSpeed > unitTwoSpeed) {
                unitOne.push(1)
            } else if (unitOneSpeed < unitTwoSpeed) {
                unitTwo.push(1)
            }

            // calculate final score
            if (unitOne.length > unitTwo.length) {
                outcome = opponents[0].type() + ' wins'
            } else if (unitOne.length < unitTwo.length) {
                outcome = opponents[1].type() + ' wins'
            } else if (unitOne.length == unitTwo.length) {
                outcome = 'it\'s a draw'
            } else {
                outcome = 'outcome is undetermined'
            }

            // log for debug
            // console.log(unitOne)
            // console.log(unitTwo)
        });
        $('.result').text(outcome)
        setTimeout(function() {
            location.reload();
        }, 5000);
    })

});
