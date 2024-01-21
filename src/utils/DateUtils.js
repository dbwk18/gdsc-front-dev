const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('ko-KR', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const shortDateFormatter = new Intl.DateTimeFormat('ko-KR', {
  dateStyle: 'medium',
});

export const formatDate = date => {
  const dateString = dateFormatter.format(date);
  const timeString = `${timeFormatter.format(date).replace(':', '시 ')}분`;
  return `${dateString} ${timeString}`;
};

export const convertPeriodToLongFormat = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startStr = formatDate(startDate);
  const endStr = formatDate(endDate);

  return `${startStr} ~ ${endStr}`;
};

export const convertPeriodToShortFormat = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startStr = shortDateFormatter.format(startDate);
  const endStr = shortDateFormatter.format(endDate);

  return `${startStr} ~ ${endStr}`;
};
