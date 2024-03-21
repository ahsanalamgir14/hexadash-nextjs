/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text:any, size:any) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

const idGenerator = (events:any, length = 1) => {
  const arrayData:any = [];
  events.map((data:any) => {
    return arrayData.push(parseInt(data.id, 10));
  });
  const number = (Math.max(...arrayData) + 1).toString();
  return number.length < length ? `${'0'.repeat(length - number.length)}${number}` : number;
};

export { ellipsis, idGenerator };
