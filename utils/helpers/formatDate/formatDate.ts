export function getComparisonType(period: {
  start: string;
  end: string;
}): string {
  const startDate = new Date(period.start);
  const endDate = new Date(period.end);
  const dayDifference = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24),
  );

  if (dayDifference === 1) {
    return "vs last day";
  }

  if (dayDifference > 1 && dayDifference <= 31) {
    return "vs last month";
  }

  if (dayDifference > 31 && dayDifference <= 366) {
    return "vs last year";
  }

  return "vs last day";
}

export function getCurrentFormattedDate(): string {
  const now = new Date();
  const dayOfWeek = now.toLocaleString("default", { weekday: "long" });
  const day = now.getDate();

  const month = now.toLocaleString("default", { month: "long" });


  const year = now.getFullYear();

  return `${dayOfWeek}, ${day} ${month}, ${year}`;
}

