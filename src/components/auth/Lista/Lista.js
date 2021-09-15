import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lista(List) {
  // Pegando os dados do cadastro.
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

  // Filtrando dados na Lista.
  useEffect(() => {
    try {
      const res = JSON.parse(localStorage.getItem("state"));
      if (res) {
        setState(res);
      }
      setState({ state: [...res.data] });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Titulo */}
        <div className="d-flex justify-content-between mb-4">
          <h3>Cadastros</h3>
          <Link
            className="btn btn-outline-dark"
            style={{ backgroundColor: "#00c8b3" }}
            to="cadastro"
          >
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
            {/* Destiandano os Dados. */}
            <tr key={state}>
              <td>{state.name}</td>
              <td>{state.cpf}</td>
              <td>{state.phone}</td>
              <td>{state.email}</td>
              <td>
                <Link
                  className="fas fa-pen text-dark d-flex justify-content-center"
                  to="cadastro"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
