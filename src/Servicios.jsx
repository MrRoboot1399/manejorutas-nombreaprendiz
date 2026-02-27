import { useNavigate } from "react-router-dom";

function Servicios() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Servicios</h2>
      <button onClick={() => navigate("/")}>
        Volver al Dashboard
      </button>
    </div>
  );
}

export default Servicios;