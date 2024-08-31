export function formatDate() {
  const data = new Date();
  return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

export function formatDateWithMonthName() {
  const data = new Date().toLocaleDateString("pt-BR", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
  });
  const daraFormat = data.split(" ");
  daraFormat[2] =
    daraFormat[2].charAt(0).toUpperCase() + daraFormat[2].slice(1);
  const newDate = daraFormat.join(" ");
  return newDate;
}

function getMonthNumber(monthAbbreviation) {
  const months = {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    "10": "Out",
    "11": "Nov",
    "12": "Dez",
  };

  return months[monthAbbreviation] || "";
}

export function formatDateForTaskCard(dateStr) {
  const newDate = dateStr.split("-");
  return `${getMonthNumber(newDate[1])}, ${newDate[2]} de ${newDate[0]}`;
}
