import { SWData, SWPeople } from './index';

export type DataState = {
  searchValue: string;
  loading: boolean;
  response: SWData;
  error: string | null;
};

export type personState = {
  loading: boolean;
  personData: SWPeople | null;
  error: string | null;
};
