import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://profile.short.io/tmp";
const clientToken = localStorage.getItem("clientToken");

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getReportList: builder.query<ReportItem[], void>({
      query: () => `/abuse-reports?clientToken=${clientToken}`,
    }),
    createReport: builder.mutation<void, CreateReportDTO>({
      query: (requestData) => ({
        url: "/abuse-report",
        method: "POST",
        body: requestData,
      }),
    }),
  }),
});

export const { useGetReportListQuery, useCreateReportMutation } =
  reportApi;

export type CreateReportDTO = {
  // clientToken -  it is generated automatically on first page load and saved in localStorage (should not be visible to user)
  clientToken: string;
  abusedURL: string;
  email: string;
  reportType: string;
  targetCountry?: string | null;
  spamProof?: string | null;
  captchaToken: string;
  //captcha2Token - (optional task) empty, generate it only if server responds with 403 error (how to generate: https://developers.google.com/recaptcha/docs/display)
};

export type ReportItem = {
  abusedURL: string;
  clientToken: string;
  createdAt: string;
  email: string;
  id: number;
  reportType: string;
  spamProof: string;
  status: string;
  targetCountry: string;
  updatedAt: string;
};
