import React, { useState } from "react";
import TextInput from "../Input/TextInput";

export default function Cadastro(props) {
  const [state, setState] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState(null);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = localStorage.setItem("state", JSON.stringify(state));
      setError(null);
      console.log(res);
      props.history.push("/");
    } catch (err) {
      console.log(err.res);
      setError(err.res.data.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <hr />

      {/* Campo de Nome */}
      <TextInput
        label="Nome"
        name="name"
        type="text"
        id="CadastroFormName"
        value={state.name}
        error={error}
        onChange={handleChange}
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
