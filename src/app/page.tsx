'use client';

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Service from "./services/service";
import styles from "../styles/page.module.css";

import '../styles/page.module.css'
import SubserviceLink from "./services/subservices/subserviceLink";

import PasswordForm from "./functions/PasswordForm";


import data from "./data/data.json";



const Page = () => {
  const [showPage, setShowPage] = useState(false);
  const service = Service();

  useEffect(() => {
    
    const storedPassword  = localStorage.getItem('password');
    if (storedPassword  === '1846018bbc7155') {
      setShowPage(true);
    }
  }, []);


  

  const dadosUsuario = data.usuarios[0];



  const [linksUsuario, setLinksUsuario] = useState<Array<{ link: string; nivel: string; valor: number; status: string; }>>(service.listarItensUsuario(dadosUsuario.nome));

  const [printConsole, setPrintConsole] = useState('');
  const [printResultConsole, setPrintResultConsole] = useState<Array<{
    nivel: string;
    user: string;
    valor: number;
    descricao: string;
    link: string;
    status: string;
  }>>([]);






  function handleListarItens() {
    setPrintConsole(service.limparConsole());

    setPrintConsole(`
   - function handleListarItens() {
      //Solicitando Service para listagem de Itens

      const result = service.listarItens().itensArray;
      setPrintResultConsole(result);
    };
    `)
    //Print da Interfaçe da Listar Itens
    setPrintConsole(prevConsole => prevConsole + service.listarItens().IListarItens);

    const userLinks = printResultConsole.filter((item) => item.link === dadosUsuario.nome);
    console.log(userLinks);


    const result = service.listarItens().itensArray;
    setPrintResultConsole(result);

  };

  function handleCriarItem() {
    setPrintConsole(service.limparConsole());
    const nivel = prompt("Digite o nível do item");
    const user = Number(prompt("Digite o usuário do item"));
    const valor = Number(prompt("Digite o valor do item"));
    const descricao = prompt("Digite a descrição do item");
    const link = prompt("Digite o link do item");
    const status = prompt("Digite o status do item");

    const novoItem = {
      nivel: nivel || "",
      user: user,
      valor: valor,
      descricao: descricao || "",
      link: link || "",
      status: status || "",
    };
    setPrintConsole(`
    - function handleCriarItem() {
      //Solicitando Service para criar Item
      const result = service.criarItem().novoItem;
      setPrintResultConsole(result);
    };
    `)


    const result = service.criarItem(novoItem).novoItem;
    setPrintConsole(prevConsole => prevConsole + service.criarItem(novoItem).IcriarItem);
    setPrintConsole(prevConsole => prevConsole + `Item criado com sucesso!`);


    //console.log(result);
  };


  return (

    <>
    {!showPage ? (
        <PasswordForm />
      ) : (
        <>
          <div className={styles.container}>

            <div className={styles.containerTop}>
              {/* SUB SERVICE */}
              <div className={styles.subService}>
                <h2>Services</h2>
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
                    {
                      printResultConsole && printResultConsole.map((item, index) => (
                        <div key={index}>
                          <p>User: {item.user}</p>
                          <p>Nível: {item.nivel}</p>
                          <p>Valor: {item.valor} CODES</p>
                          <p>Descrição: {item.descricao}</p>
                          <p>Link: <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>


                          <p>Status: {item.status}</p>
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

                  <button id="btn-criar-item" className={styles.botoes} onClick={() => handleCriarItem()}>Criar Item</button>
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
                  - Pull Request
                </h3>
                <div>
                  {linksUsuario && linksUsuario.map((link, index) => (
                    <div key={index}>
                      <p>
                        <span>{link.nivel} - </span>
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                          {link.link}
                        </a>
                        <span> - Valor: {link.valor} - Status: {link.status}</span>
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              <div className={styles.contaUsuario}>
                <h2>Dados do usuario</h2>
                <p>Nome: {dadosUsuario.nome}</p>
                <p>Nivel: </p>
                <p>Saldo: {dadosUsuario.saldo} </p>

              </div>

            </div>

          </div>
        </>
      )}
    </>
      
    

  );
};
  

export default Page;
