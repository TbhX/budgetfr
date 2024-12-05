export function formatAmount(amount: number): string {
  const formattedAmount = (amount / 1_000_000).toFixed(1); // Divide by 1 million for proper formatting
  return `${formattedAmount} Mds €`;
}
