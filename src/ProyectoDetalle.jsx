import { useParams } from "react-router-dom";

function ProyectoDetalle() {
  const { codigo } = useParams();

  return (
    <div>
      <h2>Detalle del Proyecto</h2>
      <p>Código del proyecto: {codigo}</p>
    </div>
  );
}

export default ProyectoDetalle;