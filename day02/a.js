var cb = require('copy-paste');

var input = cb.paste().split('\n');

var output = 0;

input.forEach(line => {
    var numbers = line.replace(/\s+/g, ' ').split(' ');
    var hi = undefined;
    var low = undefined;
    numbers.forEach(number => {
        number = parseInt(number);
        hi = (hi === undefined || hi < number) ? number : hi;
        low = (low === undefined || low > number) ? number : low;
    });
    output += (hi - low);
});

console.log(output);
