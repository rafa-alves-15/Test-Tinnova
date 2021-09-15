import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Lista from "./Lista/Lista";
import Cadastro from "./Cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Route exact path="/" component={Lista} />
        <Route path="/cadastro" component={Cadastro} />
      </div>
    </BrowserRouter>
  );
}

export default App;
