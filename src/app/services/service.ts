import SubserviceLink from "./subservices/subserviceLink";

const Service = () => {

  const subserviceLink = SubserviceLink()



    const criarUsuario = (nome: string, id: string) => {
      // Lógica para criar usuário
    };
  
    const listarUsuarios = () => {
      // Lógica para listar usuários
      return [];
    };
  
    const criarItem = (item: { nivel: string; user: number; valor: number; descricao: string; link: string; status: string; }) => {
      const IcriarItem = `
      - const criarItem = () => {
        const novoItem = {
            id: Number(prompt("Digite o id do item")),
            nivel: prompt("Digite o nível do item"),
            user: prompt("Digite o usuário do item"),
            valor: Number(prompt("Digite o valor do item")),
            descricao: prompt("Digite a descrição do item"),
            link: prompt("Digite o link do item"),
            status: prompt("Digite o status do item"),
        };
      
        // Adicionar o novo item ao array de itens
        //data.itens.push(novoItem);
        console.log(novoItem);
      
        return novoItem;
      };
      `
      const novoItem = subserviceLink.criarItem(item.nivel, item.user, item.valor, item.descricao, item.link, item.status)
      return {
        IcriarItem,
        novoItem
      }


    };
  
    const colocarItemVenda = (usuarioId: number, itemId: number, precoVenda: number) => {
      // Lógica para colocar item à venda
    };
  
    const comprarItem = (usuarioId: number, itemId: number, precoCompra: number) => {
      // Lógica para comprar item
    };
  
    function listarItens(){
      
      const IListarItens = `
   - function listarItens() {
      //Busca no DataBase os Dados

      const itensArray = data.itens 
      
      return {
        listarItens
      }
    }
      `
      const itensArray = subserviceLink.listarItens()

      return {
        IListarItens,
        itensArray
      };
    };

    function ListarItensUsuario(){

    }
  
    const listarBookOfertas = () => {
      // Lógica para listar book de ofertas
      return [];
    };
  
    const forjarItem = (usuarioId: number) => {
      // Lógica para forjar item
    };
  
    return {
      criarUsuario,
      listarUsuarios,
      criarItem,
      colocarItemVenda,
      comprarItem,
      listarItens,
      listarBookOfertas,
      forjarItem,
      ListarItensUsuario
    }
  };
  
  export default Service;
  