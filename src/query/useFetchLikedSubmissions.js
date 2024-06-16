
import { useQuery } from '@tanstack/react-query';
import { fetchLikedFormSubmissions } from '../service/mockServer';

export const useFetchLikedSubmissions = () => {

  const queryFn = async () => {
     const {formSubmissions} = await fetchLikedFormSubmissions()
     return formSubmissions
  };

  return useQuery({
    queryFn,
    queryKey: ['liked_submissions'],
  });
};
