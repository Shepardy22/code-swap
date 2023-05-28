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

      
        // Adicionar o novo item ao array de itens
        //data.itens.push(novoItem);
        
      
        return novoItem;
      };
      

    return {
        listarItens,
        criarItem
    }

}

export default SubserviceLink;


