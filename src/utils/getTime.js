export const getTime = (sum) => {
  const hour = Math.floor(sum / 60);
  const minute = sum % 60;
  return `${hour}ч ${minute}м`;
};
