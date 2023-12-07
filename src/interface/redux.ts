import { SWData, SWPeople } from './commons';

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
