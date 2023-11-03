export const getSearchInLocalStorage = (): string => {
  const search = localStorage.getItem('searchValue');
  if (search) return search;
  return '';
};

export const getChapterInStorage = (): string => {
  const value = localStorage.getItem('chapterValue');
  if (value !== null) {
    return value;
  }
  if (value === 'people') {
    return '/';
  }
  return 'people';
};
