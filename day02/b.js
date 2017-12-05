var cb = require('copy-paste');

var input = cb.paste().split('\n');

var output = 0;

for (x = 0; x < input.length; x++) {
    var line = input[x];
    var numbers = line.replace(/\s+/g, ' ').split(' ');

    for (var i = 0; i < numbers.length; i++) {
        var a = parseInt(numbers[i]);
        for (var j = i + 1; j < numbers.length; j++) {
            var b = parseInt(numbers[j]);
            if (a % b === 0 || b % a === 0) {
                output += (a > b) ? a / b : b / a;
                break;
            }
        }
    }
};

console.log(output);
