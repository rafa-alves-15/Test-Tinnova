import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lista(List) {
  const [state, setState] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    List(state);
    setState("");
  }

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state) {
      setState(state);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between mb-4">
          <h3>Cadastros</h3>
          <Link className="btn btn-outline-dark" to="cadastro">
            <h5>Cadastrar</h5>
          </Link>
        </div>
        <table className="table border border-dark border-1-solid-dark ">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr key={state}>
              <td>{state.name}</td>
              <td>{state.cpf}</td>
              <td>{state.phone}</td>
              <td>{state.email}</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
