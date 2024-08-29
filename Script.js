
function exercicio1() {
    let nota;
    
        nota = ("Digite uma nota entre 0 e 10:");
        if ( nota < 0 || nota > 10) {
            console.log("Nota inválida, digite novamente ");
        }
    while (nota >= 0 || nota <= 10);
    
    console.log(`Sua nota é:${nota}`);
}
