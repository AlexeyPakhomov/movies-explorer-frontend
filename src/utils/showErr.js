export const showErr = (err, statusCode, setTextError, message) => {
  if (err === `Ошибка: ${statusCode}`) {
    setTextError(message);
  }
};
