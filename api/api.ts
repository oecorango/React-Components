import { SWData, SWPeople } from "interfaces";
import { getPageCount, getPagesArray } from "utils";

export async function getPeople(pages: string) {
  const response = await fetch(`https://swapi.dev/api/people?page=${pages}`, {
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