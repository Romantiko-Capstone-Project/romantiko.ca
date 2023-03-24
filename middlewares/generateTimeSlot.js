const Day = require("../models/Day");
const TimeSlot = require("../models/TimeSlot");
const Week = require("../models/Week");

function generateTimeSlots(start, end, interval) {
  const timeSlots = [];
  for (let time = start; time < end; time += interval) {
    timeSlots.push(new TimeSlot({ startTime: time }));
  }
  return timeSlots;
}

function generateDayWithTimeSlots(start, end, interval, dayConfig) {
  const { day, start, end, interval } = dayConfig;
  const timeSlots = generateTimeSlots(start, end, interval);
  return new Day({ day, timeSlots });
}

async function initializeWeeks(start, end, interval, dayConfig, dayConfigs) {
  for (let weekNumber = 1; weekNumber <= 52; weekNumber++) {
    const days = dayConfigs.map((dayConfig) => generateDayWithTimeSlots(start, end, interval, dayConfig));
    const week = new Week({ weekNumber, days });
    await week.save();
  }
}

module.exports = {
  generateTimeSlots,
  generateDayWithTimeSlots,
  initializeWeeks,
};
