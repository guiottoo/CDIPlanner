import { useState, useEffect } from 'react';
import { getCDI } from '../services/cdiService';

export default function CDIForm() {
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState(null);
    const [cdi, setCDI] = useState(null);

    useEffect(() => {
        getCDI().then(taxa => setCDI(taxa));
    }, []);

    function calcularEstimativa(e) {
        e.preventDefault();
        if (!cdi || !valor) return;

        const cdiDiario = Math.pow(1 + cdi / 100, 1 / 252) - 1;
        const valorAmanha = valor * (1 + cdiDiario);
        const valor30Dias = valor * Math.pow(1 + cdiDiario, 30);

    setResultado({
        amanha: valorAmanha.toFixed(2),
        trintaDias: valor30Dias.toFixed(2),
    });
    }

    return (
        <div>
            <h2>Simule seu rendimento com CDI</h2>
            <form onSubmit={calcularEstimativa}>
                <input
                type="number"
                placeholder="Valor em R$"
                value={valor}
                onChange={e => setValor(Number(e.target.value))}
                />
                <button type="submit">Calcular</button>
            </form>

            {resultado && (
                <div>
                    <p>CDI atual: {cdi}%</p>
                    <p>Valor amanhã: R$ {resultado.amanha}</p>
                    <p>Valor em 30 dias: R$ {resultado.trintaDias}</p>
                </div>
            )}
        </div>
    );
}
