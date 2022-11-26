class JogoDaMemoria{

    // O constructor está recebendo um objeto
    constructor({tela}){
        this.tela = tela;
        this.heroisIniciais = [
            {img: './arquivos/america.svg', name: 'Capitão América'},
            {img: './arquivos/batman.svg', name: 'Batman'},
            {img: './arquivos/flash.svg', name: 'Flash'},
            {img: './arquivos/wolverine.svg', name: 'Wolverine'}
        ];

    };

    inicializar(){
        this.tela.atualizarImagens(this.heroisIniciais);
        this.tela.configurarBotaoJogar(this.jogar.bind(this));
    };

embaralhar(){
    const copias = this.heroisIniciais
    .concat(this.heroisIniciais)
    .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5})
    })
    .sort(() => Math.random() - 0.5)

    this.tela.atualizarImagens(copias);
}

jogar(){
    this.embaralhar();
};
};