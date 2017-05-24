import * as moment from 'moment';

const absolute = (date: number): string => {
  return moment(date).format('MMM DD, YYYY, hh:mm a');
}

const relative = (date: number): string => {
  const now = moment();

  if (moment(date).diff(now, 'days') < 3) {
    return moment(date).fromNow();
  }

  return absolute(date);
}

export default {
  absolute,
  relative
}
