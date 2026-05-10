import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PDFButton = ({ formData }) => {
    const generatePDF = () => {
        console.log('Botão clicado', formData);
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Relatório CDI', 14, 22);

        doc.setFontSize(12);
        doc.text('Dados do formulário:', 14, 32);

        const labels = {
            cdi: 'Taxa CDI (%)',
            valorInicial: 'Valor Inicial (R$)',
            dias: 'Período (dias)',
            valorFinal: 'Valor Final (R$)',
            rendimento: 'Rendimento (R$)',
        };

        const tableColumn = ["Campo", "Valor"];
        const tableRows = Object.entries(formData).map(([key, value]) => [labels[key] || key, String(value)]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 36,
        });

        doc.save('relatorio_cdi.pdf');
    };

    return (
        <button onClick={generatePDF} className='btn btn-primary w-100"'>
            Gerar PDF
        </button>
    );
};

export default PDFButton;