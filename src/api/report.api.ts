import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setShowAlert } from "../redux/slices/appSlice";
import { getClientToken } from "../helpers/clientToken";

const API = "https://profile.short.io/tmp";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Report"],
  endpoints: (builder) => ({
    getReportList: builder.query<ReportItem[], void>({
      query: () => `/abuse-reports?clientToken=${getClientToken()}`,
      providesTags: ["Report"],
    }),
    createReport: builder.mutation<void, CreateReportDTO>({
      query: (requestData) => ({
        url: "/abuse-report",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags: ["Report"],
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            setShowAlert({
              isShow: true,
              message: "successfully reported",
              status: "success",
            })
          );
        } catch (e) {
          console.warn(e);
        }
      },
    }),
  }),
});

export const { useGetReportListQuery, useCreateReportMutation } = reportApi;

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
