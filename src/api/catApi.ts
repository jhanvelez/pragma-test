import { api } from '@/src/api/rtkApi';
import { TCatBreed, TCatImageResponse } from '@/src/app/cat/CatRequest';

export const catApi = api.injectEndpoints({
  endpoints: (build) => ({
    listBreeds: build.query<TCatBreed[], string | void>({
      query: (search) => `/breeds/search?q=${search}&attach_image=1`,
      providesTags: ['Cats'],
    }),
    getCatImagesByBreed: build.query<TCatImageResponse[], { breedId: string }>({
      query: ({ breedId }) => `/images/search?breed_ids=${breedId}&limit=10`,
      providesTags: ['Cats'],
    }),
  }),
  overrideExisting: true,
});

export const { useListBreedsQuery, useGetCatImagesByBreedQuery } = catApi;
