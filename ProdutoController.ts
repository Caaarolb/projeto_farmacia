import { Produto } from './Produto';  // Importando Produto
import { ProdutoRepository } from './ProdutoRepository';  // Importando a interface ProdutoRepository
import { Medicamento } from './Medicamento';  // Importando Medicamento
import { Cosmetico } from './Cosmetico';  // Importando Cosmetico

export class ProdutoController implements ProdutoRepository {
  private produtos: Produto[] = [];

  // Criar Produto
  criarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto ${produto.nome} adicionado com sucesso!`);
  }

  // Listar Todos os Produtos
  listarTodos(): Produto[] {
    if (this.produtos.length === 0) {
      console.log("Não há produtos cadastrados.");
      return [];
    }
    console.log("Lista de Produtos:");
    return this.produtos;  // Retorna a lista de produtos
  }

  // Consultar Produto por ID
  consultarPorId(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  // Atualizar Produto
  atualizarProduto(id: number, produtoAtualizado: Produto): void {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.produtos[index] = produtoAtualizado;
      console.log(`Produto de ID ${id} atualizado com sucesso!`);
    } else {
      console.log("Produto não encontrado.");
    }
  }

  // Deletar Produto
  deletarProduto(id: number): void {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(`Produto de ID ${id} deletado com sucesso!`);
    } else {
      console.log("Produto não encontrado.");
    }
  }
}
