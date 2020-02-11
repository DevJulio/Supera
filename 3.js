var A = [], i = 0;
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//Funcionando de acordo com as entradas e saídas do URI.
for (i = 0; i < 100; i++) {
    A[i] = ((parseFloat(lines.shift())).toFixed(1));
}

for (i = 0; i < 100; i++) {
    if (A[i] < 10 || A[i]==10) {

    console.log('A['+i+'] = '+A[i]);
   
    }
}
