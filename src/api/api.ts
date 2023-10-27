import { SW_URL } from '../constants/api';
import { SWData } from '../interface/interface';

export const getSPeopleData = async (): Promise<SWData> => {
  const getSearch = localStorage.getItem('searchValue');
  const urlSearch = () => (getSearch ? `?search=${getSearch}` : '');

  const response = await fetch(SW_URL + urlSearch());
  const result = await response.json();
  return result;
};
