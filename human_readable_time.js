// https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
  // TODO
  const second = 1;
  const minute = 60;
  const hour = minute * 60;
  let hh = Math.floor(seconds / hour);
  let mm = Math.floor((seconds - hour * hh) / minute);
  let ss = seconds % 60;

  const hhmmss = [hh, mm, ss].map((time) => {
    if (time < 10) return `0${time}`;
    return `${time}`;
  });

  return hhmmss.join(":");
}
