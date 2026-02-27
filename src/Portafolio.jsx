import { useParams } from "react-router-dom"
function Portafolio() {
    const {id} = useParams()
    return (
        <div>
            <h1>Portafolio</h1>
            <p> {id}</p>
        </div>
    )
}
export default Portafolio