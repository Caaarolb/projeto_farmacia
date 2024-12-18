import { Produto } from './Produto';

export class Medicamento extends Produto {
  constructor(
    id: number,
    nome: string,
    preco: number,
    public tarja: string
  ) {
    super(id, nome, preco);
  }

  exibirDetalhes(): void {
    console.log(`Medicamento: ${this.nome}, Tarja: ${this.tarja}`);
  }
}
