import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'
import '/component/Form_inscription.css'

function Inscription() {

  // const navigate = useNavigate()

  const initialValues = {nom: "", prenom: "", email: "", password: "", confirmPassword: "", age: "", username: "", ecole: "", formation: ""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
   console.log(formValues)
    fetch("http://localhost:3000/",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formValues)
    })
    .then(res => {
      console.log(res)
      // if(res.ok) navigate('/login')
    })
    .catch(err => console.log(err))
  };

    return (
      <form className="Form_inscription" onSubmit={submit}>
        <img className="Logo_inscription" src="./img/logo.png"></img>
        <div className="container_inscription">

          <div className="Inputs_inscription">
          <input type="text" name="nom" placeholder="Nom" value={formValues.nom} onChange={handleChange}/>
          <input type="text" name="prenom" placeholder="Prénom" value={formValues.prenom} onChange={handleChange}/>
          <input type="text" name="email" placeholder="E-mail" value={formValues.email} onChange={handleChange}/>
          <input type="text" name="password" placeholder="Mot de passe" value={formValues.password} onChange={handleChange}/>
          <input type="text" name="confirmPassword" placeholder="Confirmer le mot de passe" value={formValues.confirmPassword} onChange={handleChange}/>
          <input type="text" name="age" placeholder="âge" value={formValues.age} onChange={handleChange}/>
          <input type="text" name="username" placeholder="Nom d'utilisateur" value={formValues.username} onChange={handleChange}/>
          <input type="text" name="ecole" placeholder="Ecole actuelle" value={formValues.ecole} onChange={handleChange}/>
          <input type="text" name="formation" placeholder="Formation" value={formValues.formation} onChange={handleChange}/>
          </div>

          <div className="picture_inscription">
            <div className="Box">
          <svg width="83" height="77" viewBox="0 0 83 77" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M61.2619 35.6769C67.0272 35.6769 72.5564 37.8537 76.6331 41.7285C80.7097 45.6033 83 50.8587 83 56.3384C83 61.8182 80.7097 67.0736 76.6331 70.9484C72.5564 74.8232 67.0272 77 61.2619 77C55.4966 77 49.9674 74.8232 45.8907 70.9484C41.8141 67.0736 39.5238 61.8182 39.5238 56.3384C39.5238 50.8587 41.8141 45.6033 45.8907 41.7285C49.9674 37.8537 55.4966 35.6769 61.2619 35.6769ZM61.2619 43.1902L60.9062 43.2202C60.5113 43.2888 60.1478 43.47 59.864 43.7398C59.5801 44.0096 59.3895 44.3551 59.3173 44.7304L59.2857 45.0685V54.4601H49.3969L49.0411 54.4939C48.6463 54.5625 48.2827 54.7437 47.9989 55.0135C47.7151 55.2833 47.5244 55.6288 47.4523 56.0041L47.4207 56.3422L47.4523 56.6803C47.5244 57.0556 47.7151 57.4011 47.9989 57.6709C48.2827 57.9407 48.6463 58.1219 49.0411 58.1905L49.3969 58.2205H59.2857V67.6234L59.3173 67.9615C59.3895 68.3368 59.5801 68.6823 59.864 68.9521C60.1478 69.2219 60.5113 69.4031 60.9062 69.4717L61.2619 69.5017L61.6176 69.4717C62.0125 69.4031 62.376 69.2219 62.6598 68.9521C62.9437 68.6823 63.1343 68.3368 63.2065 67.9615L63.2381 67.6234V58.2168H73.1349L73.4906 58.1905C73.8854 58.1219 74.249 57.9407 74.5328 57.6709C74.8166 57.4011 75.0073 57.0556 75.0794 56.6803L75.111 56.3422L75.0794 56.0041C75.007 55.6283 74.8158 55.2824 74.5312 55.0125C74.2466 54.7427 73.8822 54.5618 73.4866 54.4939L73.1309 54.4639H63.2381V45.0723L63.2065 44.7342C63.1351 44.3582 62.9447 44.0118 62.6608 43.7413C62.3769 43.4708 62.013 43.289 61.6176 43.2202L61.2619 43.1902ZM47.1321 0.00375638C48.6817 0.00363828 50.2043 0.388343 51.5492 1.11975C52.8942 1.85116 54.0147 2.90389 54.7998 4.17364L58.017 9.3841H66.2024C69.6085 9.3841 72.8751 10.6699 75.2839 12.9587C77.6928 15.2476 79.0466 18.352 79.0476 21.5895V38.7198C77.2846 37.1109 75.2897 35.7486 73.123 34.6739L73.119 21.5895C73.119 19.8459 72.3903 18.1737 71.0932 16.9408C69.7961 15.708 68.0368 15.0153 66.2024 15.0153H56.3214C55.8047 15.0156 55.2969 14.8874 54.8483 14.6436C54.3998 14.3998 54.026 14.0488 53.7642 13.6254L49.6854 7.02493C49.4239 6.60205 49.0508 6.25137 48.603 6.00759C48.1552 5.76381 47.6482 5.63537 47.1321 5.63497H32.1012C31.6687 5.6353 31.2415 5.7256 30.8496 5.89953C30.4577 6.07345 30.1105 6.32678 29.8326 6.64175L29.5757 6.97985L25.2557 13.6704C24.9908 14.0811 24.6196 14.4204 24.1774 14.6558C23.7352 14.8913 23.237 15.0151 22.7301 15.0153H12.8492C11.9405 15.0148 11.0407 15.1845 10.2011 15.5147C9.36146 15.8448 8.5985 16.329 7.95581 16.9395C7.31312 17.55 6.80329 18.2749 6.45545 19.0728C6.10761 19.8706 5.92857 20.7258 5.92857 21.5895V57.2776C5.92857 60.9065 9.02724 63.8517 12.8452 63.8517H36.8085C37.4923 65.854 38.4369 67.7474 39.6108 69.4867H12.8452C9.43847 69.4867 6.17123 68.2004 3.76228 65.9107C1.35333 63.6211 0 60.5157 0 57.2776V21.5895C0 18.3514 1.35333 15.246 3.76228 12.9563C6.17123 10.6667 9.43847 9.38035 12.8452 9.38035H21.0662L24.5245 4.03088C25.3197 2.79953 26.4337 1.78246 27.7601 1.07678C29.0865 0.371109 30.5812 0.000382171 32.1012 0H47.1321V0.00375638ZM39.5238 20.6503C43.2839 20.65 46.9475 21.782 49.9887 23.8836C53.03 25.9853 55.2926 28.9487 56.4519 32.3485C54.4757 32.7054 52.5785 33.2764 50.7881 34.0352C49.9122 31.4843 48.1071 29.3142 45.6977 27.9157C43.2883 26.5171 40.4328 25.9819 37.6452 26.4062C34.8575 26.8306 32.3208 28.1868 30.4915 30.2307C28.6622 32.2745 27.6605 34.8718 27.6667 37.5552C27.6667 42.9272 31.619 47.4164 36.9073 48.5509C36.2748 50.3364 35.8636 52.1859 35.6821 54.0619C31.4131 53.1524 27.6464 50.7796 25.1018 47.397C22.5573 44.0144 21.4134 39.8591 21.8888 35.7255C22.3641 31.5918 24.4254 27.7696 27.6786 24.9893C30.9318 22.209 35.1489 20.6656 39.5238 20.654V20.6503Z" fill="#E5E5E5"/>
          </svg>
          </div>
          </div>

          <div className="button_inscription">
          <button type="submit">Inscription</button>
          </div>

        </div>
      </form>
    )
}

export default Inscription