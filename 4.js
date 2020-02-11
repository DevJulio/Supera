var N = 0, A = [], B = [], i = 0, A1 = 0, B1 = 0;
N = 4
A = ['56234523485723854755454545478690', '5434554', '1243', '54'];
B = ['78690', '543', '1243', '64545454545454545454545454545454554']
//Essa questão foi a mais complicada porque, não encontrei documentação de como os testes automatizados do uri funcionam
//porém mesmo com os parâmetros do uri, os testes deram certo.
for (i = 0; i < N; i++) {
 
    A1 = A[i].length;
    B1 = B[i].length;
    if (B1 > A1) {
        console.log("nao encaixa");
    }

    else if (A[i].endsWith(B[i])) {//endswith é responsavél por verificar se a variavél termina da forma desejada.

        console.log("encaixa");
    }
    else {
        console.log("nao encaixa");
    }
} 


/*var N=0, A = [], B = [], i=0, A1 =0, B1 =0, C=[];
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

N = Number(lines.shift());


for (i = 0; i < N; i++) {
    A = Number(lines.shift());
    B = Number(lines.shift());

    A1 = A.toString().length;
    B1 = B.toString().length;
    if (B1 > A1) {
        console.log("nao encaixa");
    }
    else if (A[A1 - 1] == B[B1 -1]) {

        for (let A3 = 0; A3 < B1; A3++) {
            if (A[A1 - A3] == B[B1 -A3]){
                C[A3]=true
            }else{
                C[A3]= false
            }
            
        }
        let ret = C.indexOf(false);
        if(ret==-1){
            console.log("encaixa");
        }else{
            console.log("nao encaixa");
        }
        
    }
}

123456789 789

var N, blockA, blockB, blockA_length, blockB_length


for (i = 0; i < N; i++) {
    blockA = lines.shift().toString();
    blockB = lines.shift().toString();

    blockA_length = blockA.length;
    blockB_length = blockB.length;

    if (blockB_length > blockA_length) {
        console.log("nao encaixa");
    }
    else if (blockA == blockB) {
        console.log("encaixa");
    }
    else if (blockA.substr(blockA_length - blockB_length) == blockB) {
        console.log("encaixa");
    }
    else
    {
        console.log("nao encaixa");
    }
}
 *
 *
 *
 *
 *
 *
 *
 */

 /**
  * 
  * 
  * 
  * 
  * 
  * var N=0, A = [], B = [], i=0, A1 =0, B1 =0;
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

N = Number(lines.shift());


for (i = 0; i < N; i++) {
    A = Number(lines.shift());
    B = Number(lines.shift());

    A1 = A.toString().length;
    B1 = B.toString().length;
    if (B1 > A1) {
        console.log("nao encaixa");
    }
     if (B1 == A1) {
        console.log("nao encaixa");
    }
    // else if(a[al-1]==b[bl-1]){
    else if (A[A1 - 1] == B[B1 -1]) {
        
        console.log("encaixa");
    }
}
  */

  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * var N=0, A = [], B = [], i=0, A1 =0, B1 =0, C=[];
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

N = Number(lines.shift());


for (i = 0; i < N; i++) {
    A = Number(lines.shift());
    B = Number(lines.shift());

    A1 = A.toString().length;
    B1 = B.toString().length;
    if (B1 > A1) {
        console.log("nao encaixa");
    }
    // else if(a[al-1]==b[bl-1]){
    else if (A[A1 - 1] == B[B1 -1]) {

        for (let A3 = 0; A3 < B1; A3++) {
            if (A[A1 - A3] == B[B1 -A3]){
                C[A3]=true
            }else{
                C[A3]= false
            }
            
        }
        let ret = C.indexOf(false);
        if(ret==-1){
            console.log("encaixa");
        }else{
            console.log("nao encaixa");
        }
        
    }
} 5%
   */