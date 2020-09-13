function dateGoodView(dateInSeconds, type) {
  if (typeof dateInSeconds === 'number') {
    let date = new Date(dateInSeconds * 1000);
    let diff = new Date() - dateInSeconds;

    if (diff < 1000)
      return 'right now'

    let seconds = Math.floor(diff / 1000);

    if (seconds < 60)
      return seconds + ' sec. before'

    let minutes = Math.floor(diff / 60000)

    if (minutes < 60)
      return minutes + 'min. before'

    let d = date;

    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  return null;
}

export default dateGoodView;