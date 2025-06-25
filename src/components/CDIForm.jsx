import { useState, useEffect } from 'react';
import { getCDI } from '../services/cdiService';

export default function CDIForm() {
    const [valor, setValor] = useState('');
    const [dias, setDias] = useState('');
    const [resultado, setResultado] = useState(null);
    const [cdi, setCDI] = useState(null);

    useEffect(() => {
        getCDI().then(taxa => setCDI(taxa));
    }, []);

    function calcularEstimativa(e) {
        e.preventDefault();
        if (!cdi || !valor || !dias) return;

        const cdiDiario = Math.pow(1 + cdi / 100, 1 / 252) - 1;
        const valorFinal = valor * Math.pow(1 + cdiDiario, dias);

        setResultado({
            valorFinal: valorFinal.toFixed(2),
        });
    }

    return (
        <div>
            <h4 className="mb-4">Simule seu rendimento com CDI</h4>
            <form onSubmit={calcularEstimativa} className="w-100" style={{maxWidth: 400}}>
                <div className="mb-4">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Valor em R$"
                        value={valor}
                        onChange={e => setValor(Number(e.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Quantidade de dias"
                        value={dias}
                        onChange={e => setDias(Number(e.target.value))}
                        min="1"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Calcular</button>
            </form>

            {resultado && (
                <div className="mt-4">
                    <p>CDI atual: {cdi}%</p>
                    <p>Valor após {dias} dias: R$ {resultado.valorFinal}</p>
                </div>
            )}
        </div>
    );
}
