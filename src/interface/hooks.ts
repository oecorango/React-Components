import { SetURLSearchParams } from 'react-router-dom';
import { SWData } from './commons';

export interface PeopleSWReturn {
  infoPanel: boolean;
  data: SWData | null;
  setInfoPanel: (value: React.SetStateAction<boolean>) => void;
  handlerPeople: (id: number | null) => void;
  isPersonLoading: boolean;
  onClickClose: () => void;
  totalPages: number[] | undefined;
  setSearchParams: SetURLSearchParams;
  currentSearch: string;
  currentPage: string;
}
