import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lista() {
  const [state, setState] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    async function fetchLista() {
      try {
        const res = await localStorage.getItem(state.name);
        setState({ ...res.state });
        console.log(setState);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchLista();
  }, []);

  return (
    <div>
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
    </div>
  );
}
