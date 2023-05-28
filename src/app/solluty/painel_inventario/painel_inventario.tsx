import React from "react";
import Divergencia from "./divergencia/Divergencia";
import Link from "next/link";

const PainelInventario = () => {
  // Implemente o código do componente PainelInventario aqui

  const divergencia = Divergencia();
  return (
    <div>
      <h3>------------ PainelInventario - T1</h3>
        
        {divergencia}

    </div>
  );
};

export default PainelInventario;
