
import { useNavigate } from "react-router-dom"
function Dashboard() {
    const navigate = useNavigate()
    const Servicios = () => {
        navigate("/servi")
    }
    return (
        <div>
            
            <h1>Dashboard</h1>
            <button onClick={Servicios}>servicios</button>
        </div>
    )
}
export default Dashboard