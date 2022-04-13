import { useState, useEffect } from "react";
import '/component/Form_inscription.css'

function Inscription(){
  const initialValues = {nom: "", prenom: "", email: "", password: "", confirmPassword: "", age: "", username: "", ecole: "", formation: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // fetch("http://localhost:3000/",{
    //     method:"POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify(formValues)
    // })
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nom) {
      errors.nom = "Un nom est requis";
    } else if (!regex.test(values.nom)) {
      errors.nom = "Ce n'est pas un nom valide";
    }

    if (!values.prenom) {
      errors.prenom = "Un prenom est requis";
    } else if (!regex.test(values.prenom)) {
      errors.prenom = "Ce n'est pas un prenom valide";
    }

    if (!values.email) {
      errors.email = "L'Email est requis";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas un format Email valide";
    }

    if (!values.password) {
      errors.password = " Un mot de passe est requis !";
    } else if (values.password.length < 4) {
      errors.password = "Le mot de passe doit avoir plus de 4 caractères";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = " Veuillez confirmer votre mot de passe !"
    } else if (values.confirmPassword != values.password) {
      errors.confirmPassword = " Veuillez entré le même mot de passe !"
    }
    return errors;
  };


  function redirect(){}
  function submit(){}

    return (
        <form onSubmit={handleSubmit} className="container_inscription">
          <div className="field-name">
            <input type="text"
              name="nom"
              placeholder="Nom"
              value={formValues.nom}
              onChange={handleChange}/>
              <p>{formErrors.nom}</p>
          </div>
          <div className="field-prenom">
            <input type="text"
              name="prenom"
              placeholder="Prénom"
              value={formValues.prenom}
              onChange={handleChange}/>
              <p>{formErrors.prenom}</p>
          </div>
          <div className="field-email">
            <input type="text"
              name="email"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleChange}/>
          </div>
          <div className="field-password">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formValues.password}
              onChange={handleChange}/>
          </div>
          <div className="field-confirm-password">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmation mot de passe"
              value={formValues.confirmPassword}
              onChange={handleChange}/>
          </div>
          <div className="field-age">
            <input type="text"
              name="age"
              placeholder="Age"
              value={formValues.age}
              onChange={handleChange}/>
          </div>
          <div className="field-username">
            <input type="text"
              name="username"
              placeholder="Nom d'utilisateur"
              value={formValues.username}
              onChange={handleChange}/>
          </div>
          <div className="field-ecole">
            <input type="text"
              name="ecole"
              placeholder="école actuelle"
              value={formValues.ecole}
              onChange={handleChange}/>
          </div>
          <div className="field-formation">
            <input type="text"
              name="formation"
              placeholder="formation"
              value={formValues.formation}
              onChange={handleChange}/>
          </div>
          <div className="btns">
          <button className="validation_inscription" onClick={handleSubmit}>Inscription</button>
          </div>
         </form>
    )
}

export default Inscription