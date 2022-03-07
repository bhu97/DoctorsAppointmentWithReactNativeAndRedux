import React, {useEffect} from 'react';

import {Calendar} from 'react-native-calendars';

import {getDate} from '../../utility/DateTimeConverter';

const CalendarPicker = ({selectedDate, setSelectedDate}) => {
  const today = new Date();

  // to return the date number(1-31) for the specified date
  console.log('today => ', today);

  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  //returns the tomorrow date
  console.log('tomorrow => ', tomorrow);

  const markedDates = {};
  markedDates[getDate(selectedDate)] = {
    customStyles: {
      container: {
        backgroundColor: '#4ae7ff',
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <Calendar
      onMonthChange={month => setSelectedDate(new Date(month.dateString))}
      onDayPress={day => setSelectedDate(new Date(day.dateString))}
      markingType="custom"
      markedDates={markedDates}
      minDate={getDate(tomorrow)}
    />
  );
};

export default CalendarPicker;
