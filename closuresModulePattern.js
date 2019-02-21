

var Counter = (function () {

    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {

        increment: function () {
            changeBy(2);
        },
        value: function () {
            return privateCounter;
        }

    }

})();

console.log(Counter.value());


