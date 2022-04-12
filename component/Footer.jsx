import "/component/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="blackBar">
        <p>Restez à l'affût !</p>
      </div>
      <div className="mainFooter">
        <div className="columnFooter">
          <div className="titleFooter">
            <p>A propos</p>
          </div>
          <p>Besoin d'aide ?</p>
          <p>Nos services</p>
          <p>Nos partenaires</p>
        </div>
        <div className="columnFooter">
          <p>Renseignez-vous</p>
          <p>Mentions légales</p>
          <p>Politique de confidentialité</p>
        </div>
        <div className="columnFooter">
          <div className="titleFooter">
            <p>Faites nous confiance</p>
          </div>
          <p>
            Ce site internet répertorie et met à jour les information concernant
            la vie à Saint-Malo afin de facilité la vie étudiante.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
