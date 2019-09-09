function formatDuration (s) {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;
  // convert base time to minutes and seconds;
  minutes = s/60;
  hours = minutes
  seconds = minutes % 1 * 60;
  console.log(seconds, minutes);
}

formatDuration(6002)