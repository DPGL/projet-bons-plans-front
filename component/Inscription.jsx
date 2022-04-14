import React from "react";

export const Inscription = () => {
  return (
    <div>
      <form action="" method="post" class="form">
        <label for="firstName">Prénom</label>
        <input type="text"></input>

        <label for="lastName">Nom</label>
        <input type="text"></input>

        <label for="email">Email</label>
        <input type="email"></input>

        <label for="password">Mot de Passe</label>
        <input type="password"></input>

        <label for="passwordConfirm">Confirmez le mot de Passe</label>
        <input type="password"></input>

        <input type="submit" value="S'inscrire"></input>
      </form>
    </div>
  );
};
