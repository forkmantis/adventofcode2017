var input = process.argv[2];

const len = input.length;
const offset = len / 2;

var output = 0;

for (var i = 0; i < len; i++) {
    var j = (i + offset) % len;

    if (input.charAt(i) == input.charAt(j)) {
        output += parseInt(input.charAt(i));
    }

}

console.log(output);
