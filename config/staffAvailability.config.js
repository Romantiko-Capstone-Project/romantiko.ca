import Week from "../models/Week";

async function addStaffToAvailability(staffId) {
  const weeks = await Week.find();

  weeks.forEach(async (week) => {
    week.days.forEach((day) => {
      day.timeSlots.forEach((timeSlot) => {
        timeSlot.staffAvailability.push({ staff: staffId, isBooked: false });
      });
    });
    await week.save();
  });
}

module.exports = {
  addStaffToAvailability,
};
