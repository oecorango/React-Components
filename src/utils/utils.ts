export const getSearchInLocalStorage = (): string => {
  const search = localStorage.getItem('searchValue');
  if (search) return search;
  return '';
};
