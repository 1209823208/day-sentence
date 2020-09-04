const showtime = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();
  const hour: number = today.getHours();
  const minute: number = today.getMinutes();
  const second: number = today.getSeconds();

  let strDate: string = '';
  const nDay = today.getDay();

  switch (nDay) {
    case 0:
      strDate = '星期日';
      break;
    case 1:
      strDate = '星期一';
      break;
    case 2:
      strDate = '星期二';
      break;
    case 3:
      strDate = '星期三';
      break;
    case 4:
      strDate = '星期四';
      break;
    case 5:
      strDate = '星期五';
      break;
    case 6:
      strDate = '星期六';
      break;
    case 7:
      strDate = '星期日';
      break;
    default:
      break;
  }

  return {
    year,
    month,
    date,
    hour,
    second,
    minute,
    strDate,
  };
};

const showTimeFormat = () => {
  const { year, month, date, hour, minute, second, strDate } = showtime();
  return `${year}-${month}-${date} ${hour}:${minute}:${second} ${strDate}`;
};
export { showtime, showTimeFormat };
