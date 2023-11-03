import { useState } from 'react';

interface GetPeople {
  isDataLoading: boolean;
  error: string;
  getPeople: object;
}

export const useGetPeople = (callback: () => object): GetPeople => {
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState('');

  const getPeople = async () => {
    try {
      setDataLoading(true);
      await callback();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setDataLoading(false);
    }
  };

  return { isDataLoading, error, getPeople };
};
