export const createSlots = async (
  date,
  startTime,
  endTime,
  slotDuration,
  appointments,
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('creating slots');

      let _slots = {Morning: [], Afternoon: [], Evening: []};

      const y = date.getFullYear();
      const m = date.getMonth();
      const d = date.getDate();

      endTime = new Date(endTime).setFullYear(y, m, d);

      const morningLimit = new Date(y, m, d, 12, 0, 0).setMilliseconds(0);
      const afternoonLimit = new Date(y, m, d, 17, 0, 0).setMilliseconds(0);

      let nextSlot = new Date(startTime).setFullYear(y, m, d);
      let id = 0;
      do {
        let booked =
          appointments.findIndex(
            app => nextSlot === new Date(app.dateTime).getTime(),
          ) !== -1;

        let slot = {id: ++id, value: nextSlot, selected: false, booked};

        if (nextSlot < morningLimit) {
          _slots.Morning.push(slot);
        } else if (nextSlot < afternoonLimit) {
          _slots.Afternoon.push(slot);
        } else {
          _slots.Evening.push(slot);
        }
        nextSlot += slotDuration * 60000;
        //nextSlot.setMinutes(nextSlot.getMinutes() + doctor.slotDuration);
      } while (nextSlot < endTime);

      return resolve(_slots);
    }, 1000);
  });
};
