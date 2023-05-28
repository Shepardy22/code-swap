import data from '../../data/data'


function SubserviceLink(){
    const listarItens = () => {
        //Retorna um array com os itens
        const itensArray = data.itens
        return itensArray;
      };
    return {
        listarItens
    }

}

export default SubserviceLink;


