import { SWData, SWPeople } from "interfaces";
import { getPageCount, getPagesArray } from "utils";

export async function getPeople(search: string, page: string) {
  const searchValue = search ? search : '';
  const currentPage = page ? page : '1';

  const response = await fetch(`https://swapi.dev/api/people?search=${searchValue}&page=${currentPage}`);

  const data: SWData = await response.json();

  const allPages = getPageCount(data.count, 10);
  const pagination = getPagesArray(allPages);
  return { data, pagination };
}


export async function getPersonData(id: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data: SWPeople = await response.json();

    return data;
  } catch (err) {
    console.warn(err)
  }
};

export async function fakeFetch() {
  const response = await fetch(`https://sapi.dev/api/`);
  const fakeData: SWData = await response.json();

  const allPages = getPageCount(fakeData.count, 10);
  const fakePagination = getPagesArray(allPages);

  return { fakeData, fakePagination };
};