import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/context';
import { useSearchParams } from 'react-router-dom';
import { SW_URL } from '../constants/api';
import { PAGE, SEARCH, POST_IN_PAGE } from '../constants/common';
import { START_PAGE } from '../constants/pages';
import { getPageCount, getPagesArray } from '../utils/utils';
import { PeopleSWReturn } from '../interface/hooks';

export const usePeopleSW = (): PeopleSWReturn => {
  const { data, setPersonData } = useContext(Context);

  const [totalPages, setTotalPages] = useState<number[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageLocation = searchParams.get(PAGE) || START_PAGE;
  const [currentPage] = useState<string>(currentPageLocation);

  const currentSearch = searchParams.get(SEARCH) || '';

  const [idPerson, setIdPerson] = useState<number | null>(null);

  const [isPersonLoading, setPersonLoading] = useState(false);
  const handlerPeople = (id: number | null) => (id ? setIdPerson(id) : setIdPerson(null));

  const [infoPanel, setInfoPanel] = useState(false);

  const onClickClose = () => {
    setIdPerson(null);
    setInfoPanel(false);
  };

  useEffect(() => {
    const pages = getPageCount(data?.count ? data?.count : POST_IN_PAGE, POST_IN_PAGE);
    const allPages = getPagesArray(pages);
    setTotalPages(allPages);
  }, [data?.count]);

  useEffect((): void => {
    if (idPerson) {
      setPersonLoading(true);
      fetch(`${SW_URL}people/${idPerson}`)
        .then((result) => result.json())
        .then((data) => setPersonData(data))
        .then(() => setPersonLoading(false));
    }
  }, [idPerson]);

  return {
    infoPanel,
    data,
    setInfoPanel,
    handlerPeople,
    isPersonLoading,
    onClickClose,
    totalPages,
    setSearchParams,
    currentSearch,
    currentPage,
  };
};
