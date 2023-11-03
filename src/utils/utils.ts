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
