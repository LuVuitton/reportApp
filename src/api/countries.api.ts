import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://restcountries.com/v3.1";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getCountryNames: builder.query<string[], void>({
      query: () => `/all?fields=name`,
      transformResponse: (response: CountryItem[]) => {
        return response.map((country) => country.name.common);
      },
    }),
  }),
});

export const { useGetCountryNamesQuery } = countriesApi;

type CountryItem = {
  name: {
    common: string;
    official: string;
    nativeName: {
      ell: {
        official: string;
        common: string;
      };
      tur: {
        official: string;
        common: string;
      };
    };
  };
};
