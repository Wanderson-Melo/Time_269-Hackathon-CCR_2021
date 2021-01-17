//PESSOAS
let pessoa01 = {
    nome: "Jeferson",
    qualificacoes: ["word", "excel", "powerPoint", "comunicacaoInterpessoal"]
}
let pessoa02 = {
    nome: "Luís",
    qualificacoes: ["word"]
}
let pessoa03 = {
    nome: "Kelly",
    qualificacoes: ["word", "excel", "powerPoint", "comunicacaoInterpessoal", 'matemática', 'escrita']
}
let pessoa04 = {
    nome: "Giovana",
    qualificacoes: ["word", "excel", "powerPoint", "comunicacaoInterpessoal"]
}
let pessoa05 = {
    nome: "Yuri",
    qualificacoes: ["word", "excel", "powerPoint", "comunicacaoInterpessoal"]
}

//VETOR TOTAL DE CANDIDATOS
let listaCandidatos = [pessoa01, pessoa02, pessoa03, pessoa04, pessoa05];

//--

//VAGAS
let vaga01 = {
    empresa: "loja",
    função: "auxiliar administrativo",
    requisitos: ['word', 'powerPoint', 'raioX', 'e-mail', 'matemática', 'escrita']
}
let vaga02 = {
    empresa: "fábrica",
    função: "auxiliar administrativo",
    requisitos: ['word', 'powerPoint', 'raioX']
}
let vaga03 = {
    empresa: "farmácia",
    função: "auxiliar administrativo",
    requisitos: ['word', 'powerPoint', 'raioX']
}
let vaga04 = {
    empresa: "padaria",
    função: "auxiliar administrativo",
    requisitos: ['word', 'powerPoint', 'raioX']
}
let vaga05 = {
    empresa: "mercado",
    função: "auxiliar administrativo",
    requisitos: ['word', 'powerPoint', 'raioX']
}

//VETOR TOTAL DE CANDIDATOS
let listaVagas = [vaga01, vaga02, vaga03, vaga04, vaga05];

//--

//BUSCA POR CANDIDATOS
let listaCandidatosAprovados = [];
let listaVagasCompativeis = [];

function buscarCandidato(candidato, vaga){
    let marchDeCompetencias = [];
    let competenciasPendentes = [];    

    for (let contador of vaga.requisitos) {
        let seletorCandidato =  candidato.qualificacoes.indexOf(contador);
        
        if(seletorCandidato !== -1){
            marchDeCompetencias.push(contador);
        } else {
            competenciasPendentes.push(contador)
        }
    }

    if(candidato.qualificacoes.length >= vaga.requisitos.length*0.75){
        //console.log(`O candidato ${candidato.nome} apresenta compatibilidade com a vaga`)
        listaCandidatosAprovados.push(candidato.nome);
        listaVagasCompativeis.push(vaga.empresa);
    } else {
        var competenciasNecessarias = function(){
            let competenciasNecessariasFuncao = [];

            for (const iterator of competenciasPendentes) {
                if (competenciasNecessariasFuncao.length !== 0){
                    competenciasNecessariasFuncao = `${competenciasNecessariasFuncao}, ${iterator}`
                } else {
                    competenciasNecessariasFuncao = `${iterator}`
                }   
                //console.log(competenciasNecessariasFuncao);
            }
            return competenciasNecessariasFuncao;
        }
        //console.log(`Obrigado pelo interesse nesta vaga, porém a empresa precisa de alguém com cursos de: ${competenciasNecessarias()}.`)
    }
    //console.log(marchDeCompetencias); // competências encontradas
    //console.log(competenciasPendentes); // compentencias pendentes
    //console.log(competenciasNecessarias); // lista de competências pendentes
    //console.log(listaCandidatosAprovados);
}

//Busca por candidatos
function buscarTodosCanditatos(minhaVaga){
    for (const iterator of listaCandidatos) {
        buscarCandidato(iterator, minhaVaga); // quando eu estiver buscando um canditado a vaga sempre será sabida.
    }
    console.log(listaCandidatosAprovados);
}

//Busca por vagas
function buscarTodasVagas(meuPerfil){
    for (const iterator of listaVagas) {
        buscarCandidato(meuPerfil, iterator); // quando eu estiver buscando um canditado a vaga sempre será sabida.
    }
    console.log(listaVagasCompativeis);
}

// FUNÇÃO BUSCA POR CANDITADOS, VOCÊ INSERE SUA VAGA E BUSCA POR CANDIDATOS
buscarTodosCanditatos(vaga02);

// FUNÇÃO BUSCA POR VAGAS, VOCÊ MONTA O SEU PERFIL E BUSCA POR VAGAS COMPATÍVEIS
//buscarTodasVagas(pessoa03); // função busca por candidatos

//buscarCandidato(pessoa01, vaga01);
//TESTES
//console.log(pessoa01.qualificacoes.indexOf("powerPoint"));
//console.log(typeof(pessoa01.qualificacoes));