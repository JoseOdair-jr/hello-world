const participantes = [{nome:"joão"},{nome:"Ana"},{nome:"Beatriz"},{nome:"Maria"},
{nome:"Ana Clara"},{nome:"Joana"},{nome:"Augusto"},{nome:"Renan"},{nome:"Patricia"},
{nome:"Carlos"},{nome:"Renato"},{nome:"José"},{nome:"Roberto"},{nome:"Sara"},
{nome:"Junior"},{nome:"Pedro"},{nome:"Vitor"},{nome:"Antonio"},];
// for (item {  pega toda a chave})

function procurar (nomeDaPessoa) {
    let encontrado = false;
    for (let indice = 0; indice < participantes.length; indice++) {
        if(participantes[indice].nome === nomeDaPessoa){
            encontrado = true
            console.log(` ${nomeDaPessoa} esta na posição ${indice+1}`);
        }
    } 
    if(!encontrado){
        console.log(`${nomeDaPessoa} não encontrado`);
    } 
};
procurar("tranqueira");