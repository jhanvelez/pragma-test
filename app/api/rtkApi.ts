import appConfig from '@/app/appConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CAT_API_KEY = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBase,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', CAT_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Cats'],
});