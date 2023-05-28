// Dados de exemplo
const usuarios = [
    { id: 1, nome: 'yuri', saldo: 1000, nivel: 'T1', poder: 100, xp: 0 },
    { id: 2, nome: 'mateus', saldo: 2000, nivel: 'T1', poder: 100, xp: 0 },
    { id: 3, nome: 'bia', saldo: 1500, nivel: 'T2', poder: 100, xp: 0 },
  ];
  
  const itens = [
    { id: 1, nome: 'OLHO DE HORUS', proprietario: 1, api: 'apiHorus', status: 'Trabalho Novo', nivel: 'Link',preco: 200, poder: 30, chave: '--chave-criptografada--' },
    { id: 2, nome: 'LIVRO DE HORUS', proprietario: 2,api: 'apiHorus', status: 'Trabalho Novo', nivel: 'Link',preco: 150, poder: 30, chave: '--chave-criptografada--' },
    { id: 3, nome: 'ESPADE DE HORUS', proprietario: 1,api: 'apiHorus', status: 'Trabalho Novo', nivel: 'SubLink',preco: 300, poder: 30, chave: '--chave-criptografada--' },
  ];
  
  const bookOfertas = [
    
  ];
  
  
  
  //ENTREGA       PERSONIFICADO/////////////////////////////////////////
  // Função para criar usuário
  function criarUsuario(nomeUsuario, nivelSelecionado) {
    let saldoInicial = 0;
    let poderInicial = 0;
    let xpInicial = 0;
  
    if (nivelSelecionado === 'T1') {
      saldoInicial = 100;
      poderInicial = 0;
      xpInicial = 0;
    } else if (nivelSelecionado === 'T2') {
      saldoInicial = 200;
      poderInicial = 90;
      xpInicial = 90;
    } else if (nivelSelecionado === 'T3') {
      saldoInicial = 300;
      poderInicial = 360;
      xpInicial = 360;
    }
  
    const novoUsuario = {
      id: usuarios.length + 1,
      nome: nomeUsuario,
      saldo: saldoInicial,
      nivel: nivelSelecionado,
      poder: poderInicial,
      xp: xpInicial,
    };
  
    usuarios.push(novoUsuario);
    exibirMensagemConsole(`
    _________________________________________
    ++++++++++++++++++++++++++++++++++++++++++++++++["${poderInicial}"]++++
    Usuário "${nomeUsuario}" criado com sucesso.////+++++++++++++["${nivelSelecionado}"]++++
    ++++++++++++++++++++++++++++++++++++++++++++++++
    ###################################################`);
  }
  
  // Função para criar item ////PERSONIFICADO///////////////////////////////
  function criarItem(nomeItem, proprietarioId) {
    const nivelItem = encontrarUsuarioPorId(proprietarioId).nivel;
    const poderItem = (nivelItem === 'SubLink') ? 30 : ((nivelItem === 'Link') ? 120 : 450);
    
    const novoItem = {
      id: itens.length + 1,
      nome: nomeItem,
      proprietario: proprietarioId,
      nivel: nivelItem,
      poder: poderItem,
      api: 'apiHorus',
      status: 'Trabalho Novo',
      preco: 0,
      chave: '--chave-criptografada--',
    };
  
    itens.push(novoItem);
    exibirMensagemConsole(`
    ___________________________________________________________     
    ID: ${item.id}, ${item.nivel} ${item.nome} /////////////////
      key: ${item.chave} ${item.preco} moedas  ////////
      /////**Status: ${item.status}***
      ######Apis////${item.api}///////
      ###################################################`);
  }
  
  // Função para colocar item à venda
  function colocarItemVenda(usuarioId, itemId, precoVenda) {
    bookOfertas.push({ usuario: usuarioId, item: itemId, preco: precoVenda });
    exibirMensagemConsole(`
    _______________________________________
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    Item ID:${itemId} 
    foi colocado à venda por ${precoVenda} moedas.////$$$$$$$
   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    ###################################################`);
  }
  
  // Função para comprar item
  function comprarItem(usuarioId, itemId, precoCompra) {
    const usuario = encontrarUsuarioPorId(usuarioId);
    const item = encontrarItemPorId(itemId);
  
    if (!usuario || !item) {
      exibirMensagemConsole('Usuário ou item não encontrado.');
      return;
    }
  
    if (usuario.saldo >= precoCompra) {
      usuario.saldo -= precoCompra;
      item.proprietario = usuarioId;
      exibirMensagemConsole(`
      ___________________________________________-
      $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      Item ID:${itemId} foi comprado por ${precoCompra} moedas.####$$$$$$$
      $$$$$$$$$
      ###################################################`);
    } else {
      exibirMensagemConsole('Saldo insuficiente para comprar o item.');
    }
  }
  
  // Função para forjar item
  function forjarItem(usuarioId) {
    const usuario = encontrarUsuarioPorId(usuarioId);
    const itensUsuario = itens.filter((item) => item.proprietario === usuarioId);
  
    if (itensUsuario.length < 3) {
      exibirMensagemConsole('Você precisa ter pelo menos 3 itens para forjar um novo item.');
      return;
    }
  
    const nivelAtual = usuario.nivel;
    const poderAtual = usuario.poder;
  
    if (nivelAtual === 'N1' && itensUsuario.every((item) => item.nivel === 'SubLink')) {
      const novoItemN2 = {
        id: itens.length + 1,
        nome: 'SubLink N2',
        proprietario: usuarioId,
        nivel: 'SubLink N2',
        poder: 120,
      };
  
      itens.push(novoItemN2);
  
      itensUsuario.forEach((item) => {
        const itemIndex = itens.findIndex((i) => i.id === item.id);
        itens.splice(itemIndex, 1);
      });
  
      exibirMensagemConsole('Você forjou um novo item N2 com seus itens N1.');
  
      usuario.nivel = 'N2';
      usuario.poder = poderAtual + 90;
      usuario.xp = poderAtual + 90;
    } else if (nivelAtual === 'N2' && itensUsuario.every((item) => item.nivel === 'N2')) {
      const novoItemN3 = {
        id: itens.length + 1,
        nome: 'Item N3',
        proprietario: usuarioId,
        nivel: 'N3',
        poder: 450,
      };
  
      itens.push(novoItemN3);
  
      itensUsuario.forEach((item) => {
        const itemIndex = itens.findIndex((i) => i.id === item.id);
        itens.splice(itemIndex, 1);
      });
  
      exibirMensagemConsole('Você forjou um novo item N3 com seus itens N2.');
  
      usuario.nivel = 'N3';
      usuario.poder = poderAtual + 270;
      usuario.xp = poderAtual + 270;
    } else {
      exibirMensagemConsole('Combinação inválida de itens para forjar um novo item.');
    }
  }
  
  
  //NTREGA RETORNOS DAS FUNÇÕES//////////////////////////////////////////
  // Função para listar usuários
  function listarUsuarios() {
    return usuarios;
  }
  
  // Função para listar itens
  function listarItens() {
    return itens;
  }
  
  // Função para listar book de ofertas
  function listarBookOfertas() {
    const bookOfertasListado = bookOfertas.map((oferta) => {
      const item = encontrarItemPorId(oferta.item);
      const usuario = encontrarUsuarioPorId(oferta.usuario);
      return {
        nomeItem: item.nome,
        nomeUsuario: usuario.nome,
        chaveItem: item.chave,
        precoItem: oferta.preco,
      };
    });
  
    return bookOfertasListado;
  }
  // BUSCAS ////////////////////////////////////////////////////////////////////
  // Função para encontrar usuário por ID
  function encontrarUsuarioPorId(usuarioId) {
    return usuarios.find((usuario) => usuario.id === usuarioId);
  }
  
  // Função para encontrar item por ID
  function encontrarItemPorId(itemId) {
    return itens.find((item) => item.id === itemId);
  }
  
  // limpar console
  function limparConsole() {
    const consoleMensagem = document.getElementById('console-mensagem');
    consoleMensagem.innerHTML = '';
  }
  
  
  //ENTREGA  Função para exibir mensagem no console///////////////////////////////////
  function exibirMensagemConsole(mensagem) {
    const consoleMensagem = document.getElementById('console-mensagem');
    const novaMensagem = document.createElement('div');
    novaMensagem.innerText = mensagem;
    consoleMensagem.appendChild(novaMensagem);
    novaMensagem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  
  
  
  //ENTREGA Event Listeners////////////////////////////////////////////////////////////////
  document.getElementById('btn-criar-usuario').addEventListener('click', function () {
    const nomeUsuario = prompt('Digite o nome do novo usuário:');
    const nivelSelecionado = document.getElementById('nivel-select').value;
    limparConsole();
    criarUsuario(nomeUsuario, nivelSelecionado);
  
    // Joga a barra de rolagem do console para o final
    document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  document.getElementById('btn-criar-item').addEventListener('click', function () {
    limparConsole();
    const nomeItem = prompt('Digite o nome do novo item:');
  
    const proprietarioId = parseInt(prompt('Digite o ID do proprietário do item:'));
    const valorItem = parseInt(prompt('Digite o valor do item:'));
    
  
    criarItem(nomeItem, proprietarioId, valorItem );
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  document.getElementById('btn-colocar-venda').addEventListener('click', function () {
    limparConsole();
    const usuarioId = parseInt(prompt('Digite o ID do usuário que está colocando o item à venda:'));
    const itemId = parseInt(prompt('Digite o ID do item que está sendo colocado à venda:'));
    const precoVenda = parseInt(prompt('Digite o preço de venda do item:'));
    colocarItemVenda(usuarioId, itemId, precoVenda);
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  document.getElementById('btn-comprar-item').addEventListener('click', function () {
    limparConsole();
    const usuarioId = parseInt(prompt('Digite o ID do usuário que está comprando o item:'));
    const itemId = parseInt(prompt('Digite o ID do item que está sendo comprado:'));
    const precoCompra = parseInt(prompt('Digite o preço de compra do item:'));
    comprarItem(usuarioId, itemId, precoCompra);
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  document.getElementById('btn-listar-usuarios').addEventListener('click', function () {
    limparConsole();
    const usuariosListados = listarUsuarios();
    exibirMensagemConsole(`
    
    ||||||Usuários///////////////////////////////////
    ////////////////////////////////////////////////
    ________________________________________________________
    `);
    usuariosListados.forEach((usuario) => {
      exibirMensagemConsole(`
      ID NOME SALDO NÍVEL PODER
         ${usuario.id}    ${usuario.nome}   /${usuario.saldo}     //${usuario.nivel}     ///${usuario.poder}`);
    });
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  document.getElementById('btn-listar-itens').addEventListener('click', function () {
    limparConsole();
    const itensListados = listarItens();
    exibirMensagemConsole(`
    
    ||||||lISTAR-ITENS///////////////////////////////////
    ////////////////////////////////////////////////
    ________________________________________________________`);
    itensListados.forEach((item) => {
      exibirMensagemConsole(`
      ////////////////////////////////////////////////      
      ID: ${item.id}, ${item.nivel} ${item.nome} /////////////////
        key: ${item.chave} ${item.preco} moedas  ////////
        /////**Status: ${item.status}***
        ######Apis////${item.api}///////
        ###################################################`);
    });
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  
  // Event Listener para listar book de ofertas
  document.getElementById('btn-listar-book').addEventListener('click', function () {
    limparConsole();
    const bookOfertasListado = listarBookOfertas();
    exibirMensagemConsole(`
    ||||||lISTAR-BOOK///////////////////////////////////
    ////////////////////////////////////////////////
    ________________________________________________________`);
    bookOfertasListado.forEach((oferta) => {
      exibirMensagemConsole(`
     _____________________________________________////////
      Usuário: ${oferta.nomeUsuario}, Item: ${oferta.chaveItem},
       Preço: ${oferta.precoItem} moedas //////
      ////${oferta.nomeItem}/////
      ++++ KEY: ${oferta.chaveItem} ++++++++++++++++++++++++++++++++++++++++
  `);
    });
  
    // Joga a barra de rolagem do console para o final
    document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  });
  
  document.getElementById('btn-forjar-item').addEventListener('click', function () {
    limparConsole();
    const usuarioId = parseInt(prompt('Digite o ID do usuário que está forjando o item:'));
    forjarItem(usuarioId);
     // Joga a barra de rolagem do console para o final
     document.getElementById('console-mensagem').scrollTop = document.getElementById('console-mensagem').scrollHeight;
  
  });
  