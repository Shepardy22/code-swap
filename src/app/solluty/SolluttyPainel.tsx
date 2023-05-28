import React from "react";
import PainelInventario from "./painel_inventario/painel_inventario";

const SolluttyPainel = () => {
  // Implemente o código do componente SolluttyPainel aqui

  const painelInventario = <PainelInventario />;

  return (
    <div>
      <h2> - Sollutty( ) - T3 </h2>
      
      <h3>--------Sub Quests - T2 </h3>
      {painelInventario}
    </div>
  );
};

export default SolluttyPainel;
