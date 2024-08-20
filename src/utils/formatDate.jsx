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
