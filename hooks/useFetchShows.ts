import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { api } from "../api/axios";
import { AiringShow, ResponseObject } from "../types/tmdb";

const fetchShows = async (url: string) => {
  console.log(url);
  return api.get<ResponseObject>(`/${url}?`);
};

function dataConvertor(data: AxiosResponse) {
  return data.data.results as AiringShow[];
}

const useFetchShows = (url: string) => {
  return useQuery({
    queryKey: ["trShows", url],
    queryFn: () => fetchShows(url),
    select: (data) => dataConvertor(data),
  });
};

export default useFetchShows;
