import Star from "./Star";

import "../component/Stage.css"

const Stage = () => {
  return (
    <div>
      <h1>La Belle Epoque</h1>
      <p>Bar. <span style={{color: "#5BCD66"}}>ouvert</span></p>
      <a className="horaire">horaires</a>
    </div>
  );
};

export default Stage;
