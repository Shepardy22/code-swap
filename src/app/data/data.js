// Arquivo: src/data.js

const usuarios = [
    { id: 1, nome: "Usuário 1" },
    { id: 2, nome: "Usuário 2" },
    // ...
  ];
  
const itens = [
    {
      "nivel": "T1",
      "user": "user1",
      "valor": 100,
      "descricao": "Descrição do item 1",
      "link": "https://mail.google.com/",
      "status": "pendente"
    },
    {
      "nivel": "T2",
      "user": "user2",
      "valor": 200,
      "descricao": "Descrição do item 2",
      "link": "https://mail.google.com/",
      "status": "pendente"
    }
  ];
  
  const bookOfertas = [
    { id: 1, nome: "Oferta 1" },
    { id: 2, nome: "Oferta 2" },
    // ...
  ];
  
  export default { usuarios, itens, bookOfertas };
  // como importar este modulo?  export default { usuarios, itens, bookOfertas };
  
  