
import React from "react";

import data from "../../../data/data";

/////////////////////DVERGENCIA////////////////////////
const dataJson = data;

function printData() {
    console.log(`
    /////////////////////DVERGENCIA////////////////////////`)
  console.log(dataJson);
}
function printItens() {
  console.log(dataJson.itens);
}

const Divergencia = () => {
  // Implemente o código do componente PainelInventario aqui
  

    printData();
    printItens();



  return (
    <div>
        <h3> -------------Divergencia - T1</h3>
      {/* Código JSX do componente */}
    </div>
  );
};

export default Divergencia;