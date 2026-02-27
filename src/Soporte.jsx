import { useParams } from "react-router-dom"
function Soporte() {
    const {name} = useParams()
    return (
        <div>
            <h1>Soporte</h1>
            <p> {name}</p>
        </div>
    )
}
export default Soporte