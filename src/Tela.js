const util = Util;

const ID_CONTEUDO = 'conteudo';
const ID_BTN_JOGAR = 'jogar';
const ID_MENSAGEM = 'mensagem';
const CLASSE_INVISIBLE = 'invisible';
const ID_CARREGANDO = 'carregando';
const ID_CONTADOR = 'contador';
const BTN_MOSTRAR_TUDO = 'mostrarTudo';
const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação INCORRETA',
        classe: 'alert-danger'
    }
}

class Tela{

static obterCodigoHtml(item){
    return `
    <div class="col-md-3">
        <div class="card" style="width: 18rem;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')" >
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
    </div>
    <br />
    </div>
    `   
};

    static alterarConteudoHtml(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO);
        conteudo.innerHTML = codigoHtml;
    };

    static gerarStringHtmlPelaImagem(itens){
        // Para cada item de ua lista, vai executar a função
        // obterCodigoHtml e ao final, vai concatenar tudo em
        // uma string 

        // A função de array map, retornará a lista concatenada
        return itens.map(Tela.obterCodigoHtml).join('');
    }

    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens);
        Tela.alterarConteudoHtml(codigoHtml);
    }

    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR);
        btnJogar.onclick = funcaoOnClick;
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick;
    }

    static exibirHerois(nomeDoHeroi,img){
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        elementosHtml.forEach( item => (item.src = img))
    }

    static async exibirMensagem(sucesso = true){
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }else{
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto  
        }
        elemento.classList.remove(CLASSE_INVISIBLE)
        await util.timeOut(1000);
        elemento.classList.add(CLASSE_INVISIBLE);
    }

    static exibirCarregando(mostrar = true){
        const carregando = document.getElementById(ID_CARREGANDO);
        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIBLE)
            return
        }
        carregando.classList.add(CLASSE_INVISIBLE);
    }

    static iniciarContador(){
        let contarAte = 3;
        const elementoContador = document.getElementById(ID_CONTADOR)
        const identificadorNoTexto = "$$contador"
        const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`
        const atualizarTexto = () =>
            (elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--))
        atualizarTexto();
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }

    static limparContador(idDoIntervalo){
        clearInterval(idDoIntervalo)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }

    static configurarBotaoMostrarTudo(funcaoOnClick){
        const btnMostrarTudo = document.getElementById(BTN_MOSTRAR_TUDO);
        btnMostrarTudo.onclick = funcaoOnClick;
    }

}; 