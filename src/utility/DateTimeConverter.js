// export const getDate = date => {
//   return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
// };

export const getDate = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};

export const getTime = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const h = hours > 12 ? hours - 12 : hours;

  return `${h < 10 ? '0' + h : h} : ${minutes < 10 ? '0' + minutes : minutes} ${
    hours >= 12 ? 'PM' : 'AM'
  }`;
};
