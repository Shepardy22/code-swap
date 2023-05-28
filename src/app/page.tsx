'use client';

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Service from "./services/service";
import styles from "../styles/page.module.css";

import '../styles/page.module.css'
import SubserviceLink from "./services/subservices/subserviceLink";


import data from "./data/data.json";



const Page = () => {

 

  const dadosUsuario = data.usuarios[0];
  
  const [printConsole, setPrintConsole] = useState('');
  const [printResultConsole, setPrintResultConsole] = useState<Array<{
    nivel: string;
    user: string;
    valor: number;
    descricao: string;
    link: string;
    status: string;
  }>>([]);

  const service = Service();

  const handleCriarUsuario = () => {
    //const nomeUsuario = prompt('Digite o nome do novo usuário:');
    //service.criarUsuario( nomeUsuario, nivelSelecionado);
  };

  const handleListarUsuarios = () => {
   
  };

  const handleCriarItem = () => {
    // Handle criar item logic
  };

  const handleColocarItemVenda = () => {
    // Handle colocar item à venda logic
  };

  const handleComprarItem = () => {
    // Handle comprar item logic
  };

  function handleListarItens() {
    
    
    setPrintConsole(`
   - function handleListarItens() {
      setPrintConsole(prevConsole => 
        prevConsole + service.listarItens().IListarItens);

      //Solicitando Service para listagem de Itens
      const result = service.listarItens().itensArray;
      setPrintResultConsole(result);
    };
    `)
    setPrintConsole(prevConsole => prevConsole + service.listarItens().IListarItens);
    
    

    const result = service.listarItens().itensArray;
    setPrintResultConsole(result);
  };
  

  function handleListarBook() {
    // Handle listar book logic
  };

  const handleForjarItem = () => {
    // Handle forjar item logic
  };

  return (
    <div className={styles.container}>


      <div className={styles.containerTop}>
        {/* SUB SERVICE */}
        <div className={styles.subService}>
          <h2>Sub services</h2>
          {/* usuario salvo no local storage*/}
          <p>Key: {dadosUsuario.chaveAcesso} </p>
          

          <h2>API - Solluty( )</h2> 
          <p>Link:
             <a href="https://www.solluty.com/" target="_blank" rel="noopener noreferrer">
              https://codeswap.com/solluty</a>  
          </p>
          
          
         
        </div>
        {/* CONSOLE */}
        <div className={styles.console}>
          <div id="console-mensagem">
            <pre>{printConsole}</pre>
          </div>
          <div>
            <pre>result:</pre>
            <pre>
              __________________________________
              {printResultConsole && printResultConsole.map((item, index) => (
                <div key={index}>
                  <p>Nome: {item.user}</p>
                  <p>Nivel: {item.nivel}</p>
                  <p>valor: {item.valor} CODES</p>
                  <p>Descrição: {item.descricao}</p>
                  <p>Link: <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
                  <p>Status: {item.status} </p>
                  ///////////////////////////////////
                </div>
              ))}

            </pre>
          </div>
        </div>

        {/* BOTOES INTERAÇÃO E HEADER */}
        <div className={styles.painel}>
          <h1>CODESWAP( )</h1>

          <div className={styles.opcoes}>
              <button id="btn-criar-usuario" className={styles.botoes}>
                Criar Usuário
              </button>

              <div className={styles.nivelSelectContainer}>
                <label htmlFor="nivelSelect">Nível:</label>
                <select id="nivel-select">
                  <option value="N1">N1</option>
                  <option value="N2">N2</option>
                  <option value="N3">N3</option>
                </select>
              </div>

              <button id="btn-criar-item" className={styles.botoes}>Criar Item</button>
              <button id="btn-colocar-venda" className={styles.botoes}>Colocar Item à Venda</button>
              <button id="btn-comprar-item" className={styles.botoes}>Comprar Item</button>
              <button id="btn-listar-itens" className={styles.botoes} onClick={() => handleListarItens()} >Listar Itens</button>
              <button id="btn-listar-book" className={styles.botoes}>Listar Book de Ofertas</button>
              <button id="btn-forjar-item" className={styles.botoes}>Forjar Item</button>
          </div>
        </div>
        
      </div>

      {/* CONTAINER INFERIOR */}
      <div className={styles.containerBotton}>

        <div className={styles.linksUsuario}>
          <h2>Links de Request</h2>
          <h3>
            T1 - Pull Request
          </h3>
        </div>

        <div className={styles.contaUsuario}>
          <h2>Dados do usuario</h2>
          <p>Nome: {dadosUsuario.nome}</p>
          <p>Nivel: </p>
          <p>Saldo: {dadosUsuario.saldo} </p>

        </div>

      </div>
      
  </div>
  );
};

export default Page;
