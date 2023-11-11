import { Dispatch, SetStateAction, createContext } from 'react';
import { SWData, SWPeople } from '../interface/commons';

export interface ContextData {
  data: SWData | null;
  setData: Dispatch<SetStateAction<SWData | null>>;
  search: string | null;
  setSearch: Dispatch<SetStateAction<string | null>>;
  personData: SWPeople | null;
  setPersonData: Dispatch<SetStateAction<SWPeople | null>>;
}

export const Context = createContext(<ContextData>{});
