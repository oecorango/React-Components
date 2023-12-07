import { SetURLSearchParams } from 'react-router-dom';
import { SWData, SWPeople } from './commons';

export interface PeopleSWReturn {
  infoPanel: boolean;
  setInfoPanel: (value: React.SetStateAction<boolean>) => void;
  handlerPeople: (id: number | null) => void;
  onClickClose: () => void;
  totalPages: number[] | undefined;
  setSearchParams: SetURLSearchParams;
  currentSearch: string;
  currentPage: string;
  results: SWPeople[] | undefined;
  loading: boolean;
}
