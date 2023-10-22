import { SWData } from '../interface/interface';

export const getSPeopleData = async (request: string): Promise<SWData> => {
  const response = await fetch(request);
  const result = await response.json();
  return result;
};
