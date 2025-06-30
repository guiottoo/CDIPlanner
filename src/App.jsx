import CDIForm from "./components/CDIForm";

function App() {
  return (
      <div className="p-5 d-flex">
        <div className="container flex-column d-flex justify-content-center align-items-center form_container">
          <h1>CDIPlanner</h1>
          <img src="/assets/3d-render-hand-put-golden-coin-into-piggy-bank.png" width='350px'/>
          <CDIForm/>
        </div>
      </div>
  );
}

export default App
