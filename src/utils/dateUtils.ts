import dayjs from 'dayjs';

export const formatToDayJs = (date: string) => {
  const [day, month, year] = date.split('/');
  return dayjs(`${year}-${month}-${day}`).format('YYYY-MM-DD');
};

export const formatToSfccDate = (date: string) => {
  const dateArray = date.split('/');
  const year = dateArray[2];
  const month = dateArray[1];
  const day = dateArray[0];
  return `${year}-${month}-${day}`;
};

export const formatDate = (date?: string) => {
  if (!date) {
    return '';
  }
  const dateArray = date.split('/');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  return `${day}-${month}-${year}`;
};

const isDateFormatValid = (date: string, _format?: string): boolean =>
  dayjs(formatToDayJs(date)).isValid();

const isAdult = (date: string): boolean =>
  dayjs().diff(formatToDayJs(date), 'years') >= 18;

export default {
  isDateFormatValid,
  isAdult,
};
