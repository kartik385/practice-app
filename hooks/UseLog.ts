import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { AiringShow } from "../types/tmdb";
export type Pokemon = {
  name: string;
  url: string;
};
const logFetcher = ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?limit=15",
}) => {
  return axios.get(pageParam);
};

function dataConvertor(data: InfiniteData<AxiosResponse>) {
  return {
    pages: data.pages.map((page) => page.data.results) as Pokemon[],
    pageParams: data.pageParams,
  };
}

export const useLog = () => {
  return useInfiniteQuery({
    queryKey: ["log"],
    queryFn: logFetcher,
    getNextPageParam: (lastPage) => {
      console.log("Last page", lastPage);
      return lastPage.data.next;
    },
    select: (data) => dataConvertor(data),
  });
};
