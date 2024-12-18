import { Produto } from './Produto';

export interface ProdutoRepository {
  criarProduto(produto: Produto): void;
  listarTodos(): Produto[];
  consultarPorId(id: number): Produto | undefined;
  atualizarProduto(id: number, produto: Produto): void;
  deletarProduto(id: number): void;
}
