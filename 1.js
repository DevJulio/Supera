var N, Texto, i, j = 0, VetorOrdem = [], Final = [], res = "";
//Entrada e saída de acordo com o exemplo do URI, funcionando normalmente 
N = 4;
Texto = ['Top Coder comp Wedn at midnight', 'one three five', 'I love Cpp', 'sj a sa df r e w f d s a v c x z sd fd'];

for (i = 0; i < N; i++) {


    VetorOrdem = Texto[i].split(" ");

    Final = VetorOrdem.sort(function (a, b) {//Ordenação
        return b.length - a.length;
    });


    for (j = 0; j < Final.length; j++) {
        res = res + " " + Final[j]
    }

    console.log(res);
    res = ""
}

