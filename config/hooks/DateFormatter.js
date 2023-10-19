const formatDate = (dateString) => {
  const months = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()]; 
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export default formatDate;