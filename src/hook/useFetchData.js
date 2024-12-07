import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../lib/axiosInstance";

const useFetchData = (url, params) => {
  return useQuery({
    queryKey: [url, params],
    queryFn: () => fetchData(url, params),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: 5 * 60 * 1000,
  });
};

export default useFetchData;
