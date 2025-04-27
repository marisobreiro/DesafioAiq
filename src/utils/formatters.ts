export function formatCurrency(
  value: number,
  showSymbol: boolean = true,
): string {
  const formatted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  if (showSymbol) {
    return formatted;
  } else {
    return formatted.replace('R$', '').trim();
  }
}
