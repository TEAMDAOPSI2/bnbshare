const numberFormat = (number) => {
  if (number) {
    const num = Number(number);
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(num);
  }
  return number;
};

const toPercent = (number) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(number);

const dateFormat = (date) => {
    if (date) {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        });
    }
    return date;
}

export { numberFormat, toPercent, dateFormat };
