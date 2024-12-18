import { ProdutoController } from './ProdutoController';
import { Medicamento } from './Medicamento';
import { Cosmetico } from './Cosmetico';
import * as readlineSync from 'readline-sync';



function exibirMenu(): void {
  console.log("\nEscolha uma opção:");
  console.log("1. Criar Produto");
  console.log("2. Listar Todos os Produtos");
  console.log("3. Consultar Produto por ID");
  console.log("4. Atualizar Produto");
  console.log("5. Deletar Produto");
  console.log("6. Sobre");
  console.log("7. Sair");
}

function main(): void {
  let opcao: number;
  const controller = new ProdutoController();

  do {
    exibirMenu();
    opcao = Number(readlineSync.question(" Escolha uma opcao: "));

    switch (opcao) {
      case 1: // Criar Produto
        const tipo = Number(readlineSync.question("Tipo (1- Medicamento, 2- Cosmetico): "));
        const id = Number(readlineSync.question("ID: "));
        const nome = readlineSync.question("Nome: ");
        const preco = Number(readlineSync.question("Preço: "));

        if (tipo === 1) {
          const tarja = readlineSync.question("Tarja: ");
          const medicamento = new Medicamento(id, nome, preco, tarja);
          controller.criarProduto(medicamento);
        } else if (tipo === 2) {
          const marca = readlineSync.question("Marca: ");
          const cosmetico = new Cosmetico(id, nome, preco, marca);
          controller.criarProduto(cosmetico);
        }
        break;

      case 2: // Listar Produtos
        controller.listarTodos();
        break;

      case 3: // Consultar Produto
        const consultaId = Number(readlineSync.question("ID do Produto: "));
        const produto = controller.consultarPorId(consultaId);
        if (produto) {
          console.log(`Produto encontrado: ${produto.nome} - Preço: R$${produto.preco}`);
        }
        break;

      case 4: 
        const idAtualizar = Number(readlineSync.question("ID do Produto a Atualizar: "));
        const produtoAtualizado = new Medicamento(idAtualizar, "Novo Nome", 99.99, "Verde");
        controller.atualizarProduto(idAtualizar, produtoAtualizado);
        break;

      case 5: 
        const idDeletar = Number(readlineSync.question("ID do Produto a Deletar: "));
        controller.deletarProduto(idDeletar);
        break;

      case 6: 
        about();
        break;

      case 7: 
        console.log("Saindo do programa...");
        break;

      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  } while (opcao !== 7);
}

function about(): void {
    console.log("\n", "=".repeat(22), " 💊 Programa encerrado! 💊 ", "=".repeat(20), "\n");
    console.log("Desenvolvido por: Jeisa Boaventura");
    console.log("https://github.com/Caaarolb");
    console.log("LinkedIn: https://www.linkedin.com/in/-caroline-boaventura/");
    console.log("\n", "=".repeat(68), "\n");
    process.exit(0); // Encerra o programa
  }
main();
