export async function getCDI() {
    const response = await fetch('https://brasilapi.com.br/api/taxas/v1');
    const data = await response.json();
    const cdi = data.find(item => item.nome === 'CDI');
    return cdi.valor; //taxa anual (%)
};