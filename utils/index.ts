export const getIdPerson = (url: string): number => {
  const idPerson = Number(url.split('/').filter((val) => Number(val))[0]);
  const result = idPerson && idPerson >= 1 ? idPerson : 1;
  return result;
};

export const getPageCount = (totalPosts: number, postsInPages: number): number => {
  return Math.ceil(totalPosts / postsInPages);
};

export const getPagesArray = (totalPages: number): number[] => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};