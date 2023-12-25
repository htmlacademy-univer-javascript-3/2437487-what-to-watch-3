export const formatNumber = (num: number | undefined) => num?.toLocaleString('en-US', {
  style: 'decimal',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).replace('.', ',');
