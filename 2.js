var X = [], i;
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//De acordo com o URI, funcionando perfeitamente
for (i = 0; i < 10; i++) {
    X[i] = parseInt(lines.shift());
}


for (i = 0; i < 10; i++) {
    if (X[i] < 0 || X[i] === 0) {
        X[i] = 1;
    }
}

for (i = 0; i < 10; i++) {
    console.log('X['+i+'] = '+X[i]);
}