export const capitalize = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const buildDosager = (tablet, repeat, week, timeofday, tobetaken) => {
  var y = `take ${tablet} ${tablet == 1 ? 'tablet' : 'tablets'} ${repeat} for ${
    week == 1 ? 'week' : 'weeks'
  } in ${timeofday} ${tobetaken}`;

  return y;
};
///${tablet} tablet {repeat} for ${week} week/s
//in ${timeofday} ${tobetaken}
