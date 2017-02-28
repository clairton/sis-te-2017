
class PessoaControlador {


    constructor() {
        this._visao = new PessoaVisao(document.querySelector('#pessoas'));
    }
    
    pesquisar() {
        let xhr = new XMLHttpRequest();
        let pessoas = [];
        let visao = this._visao;
        xhr.open('GET', 'http://agenda.clairton.eti.br/pessoas');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    pessoas = JSON.parse(xhr.response).pessoas;
                } else {
                    alert(`Erro ao consultar pessoa ${xhr.responseText}`);
                }
                visao.atualiazar(pessoas);
            }
        };
        xhr.send();
    }

}