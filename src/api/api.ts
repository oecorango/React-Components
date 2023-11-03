import { SW_URL } from '../constants/api';
import { SWData } from '../interface/interface';
import { getChapterInStorage } from '../utils/utils';

export const getSWData = async (search: string): Promise<SWData | null> => {
  try {
    const searchValue = () => (search.length ? `?search=${search}` : '');

    const response = await fetch(SW_URL + getChapterInStorage() + searchValue());
    const result = await response.json();

    return result;
  } catch (err) {
    console.warn(err);
  }
  return null;
};
