var input = process.argv[2];

const len = input.length;
var output = 0;

for (var i = 0; i < len; i++) {
    var j = (i == len -1) ? 0 : i + 1;

    if (input.charAt(i) == input.charAt(j)) {
        output += parseInt(input.charAt(i));
    }

}

console.log(output);
