import CDIForm from "./components/CDIForm";

function App() {
  return (
    <div class = 'd-flex flex-column justify-content-center align-items-center min-vh-100 p-3'>
      <h1>Porquinho do CDI</h1>
      <img src="/assets/3d-render-hand-put-golden-coin-into-piggy-bank.png" width='350px'/>
      <CDIForm/>
    </div>
  );
}

export default App
