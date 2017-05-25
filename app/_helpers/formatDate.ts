import * as moment from 'moment';

const absolute = (date: number): string => moment(date).format('MMM DD, YYYY, hh:mm a');
const relative = (date: number): string => moment(date).fromNow();

export default {
  absolute,
  relative
}
