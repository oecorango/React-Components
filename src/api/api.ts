export const getData = async () => {
  try {
    const response = await fetch('http://ya.ru', {
      headers: {
        autorotation: 'Basic aasdff',
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
  return null;
};
