
import { BsFillGeoAltFill } from "react-icons/bs";
import Star from "/component/Star";

const Logement = () => {
    return(
        <div className="Bp4DAnnonceStage">
            <h1>Location Studio</h1>
            <h3>Entre Particuliers</h3>
            <h3><BsFillGeoAltFill />Paramé</h3>
            <div className="Description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum ipsam enim eos in delectus quae dolore, vero, explicabo sit culpa vel quaerat aspernatur laudantium quis rem esse dolorem fugit.</p>
            </div>
            <div className="Loyer">
                <p>Loyer</p>
            </div>
            <div className="Com">
                <input placeholder="" type="text" />
                <Star />
            </div>
            <div className="Autre">

            </div>
        </div>
    )
}
export default Logement;