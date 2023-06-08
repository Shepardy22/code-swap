import data from '../../data/data.json'


function SubserviceLink(){

    const listarItens = () => {
        //Retorna um array com os itens
        const itensArray = data.itens
        return itensArray;
      };

    const criarItem = (nivel: string, user: any, valor: any, descricao: any, link: any, status: any) => {
      const novoItem = {
          id: data.itens.length + 1,
          nivel: nivel,
          user: user,
          valor: valor,
          descricao: descricao,
          link: link,
          status: status

      };

    
      
      
    
      return novoItem;
    };
      
    function listarItensUsuario(user: string) {
      const userLinks = data.itens.filter((item) => item.user === user);
      const links = userLinks.map((item) => ({
        link: item.link,
        nivel: item.nivel,
        valor: item.valor,
        status: item.status,
      }));
      
      return links;
    }
    

    return {
        listarItens,
        criarItem,
        listarItensUsuario
    }

}

export default SubserviceLink;


