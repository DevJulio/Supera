var Texto, TextoAux, i, TextoFinal;

Texto = "Ex(*$a#.mpl.e: Adventures in Disneyland Two blondes were going to Disneyland when they came to a fork in the road. The sign read:" + "Disneyland LEFT." + " So they went home."

//A questão da lista que mais usei funções para fazer. os testes estão de acordo com o uri 
Texto = Texto.replace("(", " ");
Texto = Texto.replace("*", " ");
Texto = Texto.replace("$", " ");
Texto = Texto.replace("#", " ");

for (i = 0; i < Texto.length; i++) {
    if (Texto[i] == '.') {
        Texto = Texto.replace(".", " ");
    } else if (Texto[i] == ':') {
        Texto = Texto.replace(":", " ");
    }
}
Texto = Texto.toLowerCase();

for (i = 0; i < Texto.length; i++) {
    if (Texto[i] + Texto[i + 1] == "  ") {
        Texto = Texto.replace("  ", " ");
    } else if (Texto[i] == ' ') {
        Texto = Texto.replace(" ", " ");
    }
    else if (Texto[i] == '    ') {
        Texto = Texto.replace("    ", " ");
    }
}
for (i = 0; i < Texto.length; i++) {
    TextoAux = Texto.split(" ")
}

for (i = 0; i < TextoAux.length; i++) {
    if (TextoAux[i] == "") {
        TextoAux.splice(i, 1);
    } 
}
TextoFinal= TextoAux.filter((a, b) => TextoAux.indexOf(a) === b)
  

TextoFinal = TextoFinal.sort();


for (i = 0; i < TextoFinal.length; i++) {
        
    console.log(TextoFinal[i])
}
/*


Todas as atividades estão de acordo com as entradas e saidas do uri e do Debug do uri também





*/