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
  
    const criarItem = (nome: string, id: number) => {
      // Lógica para criar item
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
  