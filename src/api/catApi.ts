import { api } from '@/src/api/rtkApi';
import { TCatBreed, TCatImageResponse } from '@/src/app/cat/CatRequest';

export const catApi = api.injectEndpoints({
  endpoints: (build) => ({
    listBreeds: build.query<TCatBreed[], void>({
      query: () => '/breeds',
      providesTags: ['Cats'],
    }),
    getCatImagesByBreed: build.query<TCatImageResponse[], { breedId: string }>({
      query: ({ breedId }) => `/images/search?breed_ids=${breedId}&limit=10`,
      providesTags: ['Cats'],
    }),
  }),
  overrideExisting: false,
});

export const { useListBreedsQuery, useGetCatImagesByBreedQuery } = catApi;
