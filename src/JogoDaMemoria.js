class JogoDaMemoria{

    // O constructor está recebendo um objeto
    constructor({tela, util}){
        this.tela = tela;
        this.util = util;
        this.heroisIniciais = [
            {img: './arquivos/america.svg', nome: 'Capitão América'},
            {img: './arquivos/batman.svg', nome: 'Batman'},
            {img: './arquivos/flash.svg', nome: 'Flash'},
            {img: './arquivos/wolverine.svg', nome: 'Wolverine'}
        ];
        this.iconePadrao = './arquivos/ninja.svg'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    };

    inicializar(){
        this.tela.atualizarImagens(this.heroisIniciais);
        this.tela.configurarBotaoJogar(this.jogar.bind(this));
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
    };

    async embaralhar(){
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()
        await this.util.timeOut(1000)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
    }

    esconderHerois(herois){
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeDoHeroi){
        const {img} = this.heroisIniciais.find(
            ({nome})=>nomeDoHeroi === nome
        )
        this.tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome){
        const item = { id, nome};
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                this.heroisSelecionados.push(item)
            break
            case 1:
                const [opcao1] = this.heroisSelecionados
                this.heroisSelecionados = []
                if(opcao1.nome === item.nome &&
                    opcao1.id !== item.id
                ) {                                    
                    this.exibirHerois(item.nome);
                    this.tela.exibirMensagem();
                    return
                }
            
                this.tela.exibirMensagem(false)
            break
        }
    }

    jogar(){
        this.embaralhar();
    };
};