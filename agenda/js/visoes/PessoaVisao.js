
class PessoaVisao{
  constructor(elemento) {  
      this._elemento = elemento;
  }
  
  
  modelo(pessoas) {
      
      return `
        <table>      
          <thead>
              <tr>
                  <th>Nome</th>
              </tr>
          </thead>      
          <tbody>
              ${pessoas.map(pessoa => `
                  <tr>
                      <td>${pessoa.nome}</td>
                  </tr>
              `).join('')}      
          </tbody>            
      </table>
      `;
    }
  
  atualiazar(pessoas) {
      this._elemento.innerHTML = this.modelo(pessoas);
  }
}