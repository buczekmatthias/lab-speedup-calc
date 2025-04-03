const increase = new Map();
increase.set(1.5, [
  { d: 0, hr: 0, min: 30 },
  { d: 0, hr: 4, min: 0 },
  { d: 0, hr: 12, min: 0 },
]);
increase.set(2, [
  { d: 0, hr: 1, min: 0 },
  { d: 0, hr: 8, min: 0 },
  { d: 1, hr: 0, min: 0 },
]);
increase.set(3, [
  { d: 0, hr: 2, min: 0 },
  { d: 0, hr: 16, min: 0 },
  { d: 2, hr: 0, min: 0 },
]);
increase.set(4, [
  { d: 0, hr: 3, min: 0 },
  { d: 1, hr: 0, min: 0 },
  { d: 3, hr: 0, min: 0 },
]);
increase.set(5, [
  { d: 0, hr: 4, min: 0 },
  { d: 1, hr: 8, min: 0 },
  { d: 4, hr: 0, min: 0 },
]);
increase.set(6, [
  { d: 0, hr: 5, min: 0 },
  { d: 1, hr: 16, min: 0 },
  { d: 5, hr: 0, min: 0 },
]);

const timeToString = (time) => {
  let str = "";

  if (time.d > 0) str += `+${time.d}d`;
  if (time.hr > 0) {
    str.length !== 0 ? (str += " ") : (str += "+");
    str += `${time.hr}h`;
  }
  if (time.min > 0) {
    str.length !== 0 ? (str += " ") : (str += "+");
    str += `${time.min}m`;
  }

  return str;
};

export { increase, timeToString };
