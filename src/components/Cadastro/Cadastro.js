import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../Input/TextInput";

export default function Cadastro(props) {
  // Pegando os dados que o usuário digitou.
  const [state, setState] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });
  const [error] = useState(null);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  // Enviando Para Lista.
  async function handleSubmit(event) {
    event.preventDefault();
    const { name, cpf, phone, email } = event.target;
    const payload = {
      name: name.value,
      cpf: cpf.value,
      phone: phone.value,
      email: email.value,
    };
    const usersFromStore = JSON.parse(localStorage.getItem("users"));
    usersFromStore.push(payload);
    console.log(usersFromStore);
    localStorage.setItem("users", JSON.stringify(usersFromStore));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between mb-5">
        <h1 style={{ paddingRight: "62%" }}>Cadastro</h1>
        <Link to="/" className="btn-close " disabled aria-label="Close"></Link>
        <hr />
      </div>
      {/* Campo de Nome */}
      <TextInput
        label="Nome"
        name="name"
        type="text"
        id="CadastroFormName"
        placeholder="Nome completo (sem abreviações)"
        value={state.name}
        error={error}
        onChange={handleChange}
        required
      />
      {/* Campo de CPF */}
      <TextInput
        label="CPF"
        name="cpf"
        type="number"
        id="CadastroFormCpf"
        value={state.cpf}
        error={error}
        onChange={handleChange}
        required
      />
      {/* Campo de Phone */}
      <TextInput
        label="Telefone"
        name="phone"
        type="number"
        id="CadastroFormPhone"
        value={state.phone}
        error={error}
        onChange={handleChange}
        required
      />
      {/* Campo de E-mail */}
      <TextInput
        label="E-mail"
        name="email"
        type="email"
        id="CadastroFormEmail"
        value={state.email}
        error={error}
        onChange={handleChange}
        required
      />
      <button
        style={{ backgroundColor: "#00c8b3" }}
        type="submit"
        className="btn text-white"
      >
        Cadastrar
      </button>
      {error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      ) : null}
    </form>
  );
}
