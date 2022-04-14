import React from "react";

export const Login = () => {
  return (
    <div>
      <form action = "" method = "post" class = "form">
        <label for ="name">Email</label>
        <input type = "email"></input>

        <label for = "password">Mot de Passe</label>
        <input type = "password"></input>

        <input type = "submit" value = "S'identifier"></input>
      </form>
    </div>
  );
};
