import { SW_URL } from '../constants/api';
import { SWData } from '../interface/interface';

export const getSPeopleData = async (getSearch: string): Promise<SWData> => {
  const response = await fetch(SW_URL + getSearch);
  const result = await response.json();
  return result;
};
