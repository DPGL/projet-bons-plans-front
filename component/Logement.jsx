import "../component/Logement.css";
import { BsFillGeoAltFill } from "react-icons/bs";
import Star from "/component/Star";

const Logement = () => {
    return(
        <div className="Bp4DAnnonce">
            <h1>Location Studio</h1>
            <h3>Entre Particuliers</h3>
            <h3><BsFillGeoAltFill />Paramé</h3>
            <img src="./images/appart.jpg" alt="photo logement" />
            <div className="DescriptionBlock">
                <div className="Desc">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum ipsam enim eos in delectus quae dolore, vero, explicabo sit culpa vel quaerat aspernatur laudantium quis rem esse dolorem fugit.</p>
                </div>
                <div className="Loyer">
                    <p>Loyer</p>
                </div>
            </div>
            <div className="Com">
                <Star />
            </div>
            <div className="Autre">
                <h3>VOIR AUSSI</h3>
                <div className="VoirIMG">
                    <img src="./images/appart.jpg" alt="Autre IMG" />
                    <img src="./images/appart.jpg" alt="Autre IMG" />
                    <img src="./images/appart.jpg" alt="Autre IMG" />
                    <img src="./images/appart.jpg" alt="Autre IMG" />
                </div>
            </div>
        </div>
    )
}
export default Logement;