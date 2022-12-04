class JogoDaMemoria{

    // O constructor está recebendo um objeto
    constructor({tela}){
        this.tela = tela;
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

    embaralhar(){
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)

        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
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

    verificarSelecao(id, nome){
        const item = { id, nome};
        const heroisSelecionados = this.heroisSelecionados.length
    }

    jogar(){
        this.embaralhar();
    };
};