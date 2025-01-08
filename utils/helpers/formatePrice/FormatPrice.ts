export function formatNumber(value?: number) {
  if (value === 0) {
    return "0"; // Handle the case where the value is 0
  }

  if (value === undefined || value === null) {
    return "0"; // Handle undefined or null values
  }

  const units = [
    { threshold: 1e9, suffix: "B" },
    { threshold: 1e6, suffix: "M" },
    { threshold: 1e3, suffix: "k" },
  ];

  for (const unit of units) {
    if (value >= unit.threshold) {
      return (
        (value / unit.threshold).toFixed(1).replace(/\.0$/, "") + unit.suffix
      );
    }
  }

  return value.toString(); // Return as is for values less than 1000
}
