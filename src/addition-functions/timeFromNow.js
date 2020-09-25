function timeFromNow(timeInSeconds) {
  if (typeof timeInSeconds === 'number') {
    let date = new Date(timeInSeconds * 1000);
    let diff = new Date() - timeInSeconds;

    if (diff < 1000)
      return 'right now'
    else if (diff < 60000)
      return Math.floor(diff / 1000) + ' sec. before'
    else if (diff < 3600000)
      return Math.floor(diff / 60000) + ' min. before'
    else if (diff < 86400000)
      return Math.floor(diff / 3600000) + ' hour(s) before'
    else if (diff < 604800000)
      return Math.floor(diff / 86400000) + ' day(s) before'
    else {
      let fullDate = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
      ].map(component => component.slice(-2));

      return fullDate.slice(0, 3).join('.') + ' ' + fullDate.slice(3).join(':');
    }
  }
  return null;
}

export default timeFromNow;