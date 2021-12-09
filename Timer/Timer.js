function timer(time) {
  var seconds = Math.floor(time / 1000);
  var minutes = Math.floor(seconds / 60);

  seconds = seconds % 60;
  var hrs = Math.floor(minutes / 60);
  minutes = minutes % 60;

  if (Math.floor(minutes) <= 0) {
    return `${seconds} seconds`;
  } else if (Math.floor(hrs) <= 0 && minutes > 0) {
    return minutes > 0 && seconds <= 0
      ? minutes === 1
        ? `${Math.floor(minutes)} minute`
        : `${Math.floor(minutes)} minutes`
      : `${Math.floor(minutes)} minutes ${seconds} seconds`;
  } else {
    return `${Math.floor(hrs)} hrs ${Math.floor(
      minutes
    )} minutes ${seconds} seconds`;
  }
}

module.exports = timer;
