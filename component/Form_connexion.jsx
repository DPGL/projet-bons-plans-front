import { useState, useEffect } from "react";
import '/component/Form_Connexion.css'

function Form_Connexion() {
  const initialValues = { email: "", password: "" };
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
    fetch("http://localhost:3000/",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formValues)
    })
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
    return errors;
  };

  function redirect(){}
  function submit(){}

  return (
    <div className="container">
      <form className="form_connexion" onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formValues.password}
              onChange={handleChange}/>
          </div>
          <p>{formErrors.password}</p>
          <div className="buttons">
          <button className="fluid ui button blue" onClick={{submit}}>Connexion</button>
          <p>Pas de compte ?</p>
          <button className="inscription" onClick={redirect}>Inscription</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form_Connexion;