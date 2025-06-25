import React, { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Component = () => {
    const targetRef = useRef();
    return (
        <div>
            <button onClick={() => generatePDF(gerarPDF, {filename: 'CDIPlanner.pdf'})}>Gerar PDF</button>
            <div ref={gerarPDF}>
                conteudo pdf
            </div>
        </div>
    )
};