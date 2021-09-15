import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

export default function Lista(List) {
  // Pegando os dados do cadastro.
  const [userList, setUserList] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Filtrando dados na Lista.

  useEffect(() => {
    const isRequestReady = JSON.parse(localStorage.getItem("isRequestReady"));
    if (!isRequestReady) {
      api.get().then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data));
        localStorage.setItem("isRequestReady", "true");
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);
  useEffect(() => {
    if (isLoaded) {
      setUserList(JSON.parse(localStorage.getItem("users")));
    }
  }, [isLoaded]);

  return (
    <div>
      <form onSubmit>
        {/* Titulo */}
        <div className="d-flex justify-content-between mb-4">
          <h3>Cadastros</h3>
          <Link
            className="btn btn-outline-dark"
            style={{ backgroundColor: "#00c8b3" }}
            to="cadastro"
            state={userList}
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
            {userList.map((user) => {
              return (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="fas fa-pen text-dark d-flex justify-content-center"
                      to="cadastro"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}
