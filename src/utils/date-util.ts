export function formatDate(date: Date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const suffixes = ["st", "nd", "rd", "th"];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const suffix = suffixes[(day - 1) % 10 < 4 ? (day - 1) % 10 : 3];

  return `${day}${suffix} ${month}'${year.toString().slice(2)}, ${hour
    .toString()
    .padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}
