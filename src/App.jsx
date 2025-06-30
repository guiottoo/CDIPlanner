import React, { useState } from "react";
import CDIForm from "./components/CDIForm";
import PDFButton from "./components/PDFButton";

function App() {
  const [formData, setFormData] = useState(null);

  // Função para receber os dados do formulário após o cálculo
  const handleCalculate = (dados) => {
    setFormData(dados);
  };

  return (
    <div className="p-5 d-flex">
      <div className="container flex-column d-flex justify-content-center align-items-center form_container">
        <h1>CDIPlanner</h1>
        <img src="/assets/3d-render-hand-put-golden-coin-into-piggy-bank.png" width='350px'/>
        <CDIForm onCalculate={handleCalculate} />
        {formData && <PDFButton formData={formData} />}
      </div>
    </div>
  );
}

export default App;
