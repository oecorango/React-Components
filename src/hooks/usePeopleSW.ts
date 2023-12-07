import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAGE, SEARCH, POST_IN_PAGE } from '../constants/common';
import { START_PAGE } from '../constants/pages';
import { getPageCount, getPagesArray } from '../utils/utils';
import { PeopleSWReturn } from '../interface/hooks';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { fetchSwPerson } from '../store/personSlice';

export const usePeopleSW = (): PeopleSWReturn => {
  const [totalPages, setTotalPages] = useState<number[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageLocation = searchParams.get(PAGE) || START_PAGE;
  const [currentPage] = useState<string>(currentPageLocation);

  const currentSearch = searchParams.get(SEARCH) || '';

  const [idPerson, setIdPerson] = useState<number | null>(null);

  const handlerPeople = (id: number | null) => (id ? setIdPerson(id) : setIdPerson(null));

  const [infoPanel, setInfoPanel] = useState(false);

  const onClickClose = () => {
    setIdPerson(null);
    setInfoPanel(false);
  };

  const dispatch = useAppDispatch();

  const { count, results } = useAppSelector((state) => state.people.response);

  const { loading } = useAppSelector((state) => state.person);

  useEffect(() => {
    dispatch(fetchSwPerson(idPerson));
  }, [dispatch, idPerson]);

  useEffect(() => {
    const pages = getPageCount(count ? count : POST_IN_PAGE, POST_IN_PAGE);
    const allPages = getPagesArray(pages);
    setTotalPages(allPages);
  }, [count]);

  return {
    infoPanel,
    setInfoPanel,
    handlerPeople,
    onClickClose,
    totalPages,
    setSearchParams,
    currentSearch,
    currentPage,
    results,
    loading,
  };
};
