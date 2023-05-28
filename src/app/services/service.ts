import data from '../../data.js'

const Service = () => {



  const bookOfertas = data.bookOfertas

  const usuarios = data.usuarios

  const itens = data.itens

    const criarUsuario = (nome: string, id: string) => {
      // Lógica para criar usuário
    };
  
    const listarUsuarios = () => {
      // Lógica para listar usuários
      console.log(usuarios)
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
  
    const listarItens = () => {
      return itens;
    };
  
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
    }
  };
  
  export default Service;
  