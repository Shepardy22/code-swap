'use client';

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Service from "./services/service";
import styles from "../styles/page.module.css";

import '../styles/page.module.css'


const Page = () => {

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
          <h2>Sub service</h2>
        </div>
        {/* CONSOLE */}
        <div className={styles.console}>
          <div id="console-mensagem">
            <p>Console de Mensagens</p>
          </div>
        </div>

        {/* BOTOES INTERAÇÃO E HEADER */}
        <div className={styles.painel}>
          <h1>Sistema de Comércio</h1>

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
              <button id="btn-listar-itens" className={styles.botoes} onClick={handleListarItens} >Listar Itens</button>
              <button id="btn-listar-book" className={styles.botoes}>Listar Book de Ofertas</button>
              <button id="btn-forjar-item" className={styles.botoes}>Forjar Item</button>
          </div>
        </div>
        
      </div>

      {/* CONTAINER INFERIOR */}
      <div className={styles.containerBotton}>

        <div className={styles.linksUsuario}>
          <h2>Links usuario</h2>
        </div>

        <div className={styles.contaUsuario}>
          <h2>dados usuario</h2>
        </div>

      </div>
      
  </div>
  );
};

export default Page;
