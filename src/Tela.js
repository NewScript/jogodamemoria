const ID_CONTEUDO = 'conteudo';

class Tela{

    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
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

};