function convertToHours(dateString) {
  const date = new Date(dateString);
  return date.getHours() + date.getMinutes() / 60;
}

module.exports = { convertToHours };
