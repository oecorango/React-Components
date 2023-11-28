import { SWData, SWPeople } from "interfaces";
import { getPageCount, getPagesArray } from "utils";

export async function getPeople(search: string, page: string) {
  const searchValue = search ? search : '';
  const currentPage = page ? page : '1'
  const response = await fetch(`https://swapi.dev/api/people?search=${searchValue}&page=${currentPage}`, {
    next: {
      revalidate: 600,
    },
  });

  const data: SWData = await response.json();

  const allPages = getPageCount(data.count, 10);
  const pagination = getPagesArray(allPages);
  return { data, pagination };
}


export async function getPersonData(id: string) {
  if (id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`, {
      next: {
        revalidate: 600,
      },
    });
    const data: SWPeople = await response.json();
    return data;
  }

  return null;
}