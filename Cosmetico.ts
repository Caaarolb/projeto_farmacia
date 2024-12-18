import { Produto } from './Produto';

export class Cosmetico extends Produto {
  constructor(
    id: number,
    nome: string,
    preco: number,
    public marca: string
  ) {
    super(id, nome, preco);
  }

  exibirDetalhes(): void {
    console.log(`Cosmético: ${this.nome}, Marca: ${this.marca}`);
  }
}
