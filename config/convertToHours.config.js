function convertToHours(dateString) {
  const date = new Date(dateString);
  return date.getHours() + date.getMinutes() / 60;
}

const formatTime = (time) => {
  const hour = Math.floor(time);
  const minute = (time - hour) * 60;
  const period = hour < 12 ? "am" : "pm";
  const formattedHour = hour <= 12 ? hour : hour - 12;
  const formattedMinute = minute === 0 ? "00" : minute;

  return `${formattedHour}:${formattedMinute}${period}`;
};


module.exports = { convertToHours, formatTime };
