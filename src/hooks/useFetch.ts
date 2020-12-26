import api from '@/services/api';
import useSWR from 'swr';

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async urlFetch => {
    const response = await api.get(urlFetch);

    return response.data;
  });

  return { data, error };
}
