import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { api } from "../api/axios";
import { ResponseObject } from "../types/tmdb";

export interface Show {
  adult: boolean;
  backdrop_path: string;
  created_by: Createdby[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Lastepisodetoair;
  name: string;
  next_episode_to_air?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  seasons: Season[];
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  similar: Similar;
  images: Images;
}

interface Images {
  backdrops: any[];
  logos: any[];
  posters: any[];
}

interface Similar {
  page: number;
  results: RelatedShow[];
  total_pages: number;
  total_results: number;
}

interface RelatedShow {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface Credits {
  cast: Cast[];
  crew: Crew[];
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

interface Network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

interface Lastepisodetoair {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Createdby {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

const fetchShow = async (tvId: number) => {
  return api.get<ResponseObject>(
    `/tv/${tvId}?&append_to_response=credits,similar,images&`
  );
};

function dataConvertor(data: AxiosResponse) {
  return data.data.results as Show;
}

const useFetchShow = (tvId: number) => {
  return useQuery({
    queryKey: ["tvShow", tvId],
    queryFn: () => fetchShow(tvId),
    select: (data) => dataConvertor(data),
  });
};

export default useFetchShow;
