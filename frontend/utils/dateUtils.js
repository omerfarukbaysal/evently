export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}

export function formatTime(dateStr) {
  const date = new Date(dateStr);
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString("en-GB", options);
}
